/* images.js — visuels des éléments
 * Priorité : imageOverride (manuel) → drapeau FlagCDN (pays) → aplat CSS (couleurs) → Openverse.
 * Les résultats Openverse sont mis en cache dans localStorage, clé = "ov:" + mot-clé.
 */

const OV_PREFIX = 'ov:';
const OV_ENDPOINT = 'https://api.openverse.org/v1/images/';
const FLAG_BASE = 'https://flagcdn.com/w320/';
const enCours = new Map(); // évite les appels concurrents en double
const DELAI_API = 6000;   // ms avant d'abandonner l'appel à l'API Openverse
const DELAI_IMG = 5000;   // ms avant d'abandonner le test de chargement d'une image

/* fetch() avec un délai maximum : sur une connexion instable, une requête peut
   rester "en attente" très longtemps sans jamais échouer ni réussir. On force
   un abandon après DELAI ms pour basculer plus vite sur le placeholder. */
function fetchAvecDelai(url, options, delai) {
  const controleur = new AbortController();
  const minuteur = setTimeout(function () { controleur.abort(); }, delai);
  return fetch(url, Object.assign({}, options, { signal: controleur.signal }))
    .finally(function () { clearTimeout(minuteur); });
}

function ovLire(mot) {
  try {
    const brut = localStorage.getItem(OV_PREFIX + mot);
    return brut ? JSON.parse(brut) : null;
  } catch (e) { return null; }
}

function ovEcrire(mot, valeur) {
  try { localStorage.setItem(OV_PREFIX + mot, JSON.stringify(valeur)); } catch (e) {}
}

/* Renvoie { url, auteur, lien, licence } ou { vide: true } */
function chercherImage(mot) {
  const cache = ovLire(mot);
  if (cache) return Promise.resolve(cache);
  if (enCours.has(mot)) return enCours.get(mot);

  const url = OV_ENDPOINT
    + '?q=' + encodeURIComponent(mot)
    + '&license_type=commercial,modification&page_size=5';

  const p = fetchAvecDelai(url, { headers: { Accept: 'application/json' } }, DELAI_API)
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      const liste = (data && data.results) || [];
      const trouve = liste.find(function (r) { return r && (r.url || r.thumbnail); });
      let res;
      if (trouve) {
        res = {
          // La miniature est bien plus légère que la photo en pleine résolution :
          // on l'affiche en priorité, la version complète ne sert que de secours.
          url: trouve.thumbnail || trouve.url,
          secours: trouve.url || trouve.thumbnail,

          auteur: trouve.creator || 'Auteur inconnu',
          lien: trouve.foreign_landing_url || trouve.url,
          licence: (trouve.license || '').toUpperCase() + (trouve.license_version ? ' ' + trouve.license_version : '')
        };
      } else {
        res = { vide: true };
      }
      ovEcrire(mot, res);
      return res;
    })
    .catch(function () {
      return { vide: true, erreur: true }; // pas de mise en cache d'une erreur réseau
    })
    .finally(function () { enCours.delete(mot); });

  enCours.set(mot, p);
  return p;
}

/* Placeholder SVG (data URI) */
function placeholderSVG(nom) {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">'
    + '<rect width="200" height="200" fill="#EFEAE1"/>'
    + '<circle cx="100" cy="86" r="34" fill="none" stroke="#C6BCAB" stroke-width="6"/>'
    + '<path d="M62 148h76" stroke="#C6BCAB" stroke-width="6" stroke-linecap="round"/>'
    + '<path d="M80 86l16 16 26-30" fill="none" stroke="#C6BCAB" stroke-width="6" '
    + 'stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* Charge une URL et résout true/false selon la réussite (avec délai maximum). */
function testerImage(url) {
  return new Promise(function (resolve) {
    let fini = false;
    const regler = function (ok) {
      if (fini) return;
      fini = true;
      resolve(ok);
    };
    const t = new Image();
    t.referrerPolicy = 'no-referrer';
    t.onload = function () { regler(true); };
    t.onerror = function () { regler(false); };
    t.src = url;
    setTimeout(function () { regler(false); }, DELAI_IMG);
  });
}

/* Vide un conteneur en conservant les éléments persistants (outils de carte). */
function netToyer(conteneur) {
  Array.prototype.slice.call(conteneur.children).forEach(function (n) {
    if (!n.classList || !n.classList.contains('card-tools')) n.remove();
  });
}

function afficherImage(conteneur, src, classe, secours) {
  netToyer(conteneur);
  const img = document.createElement('img');
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.referrerPolicy = 'no-referrer';
  if (classe) img.className = classe;
  img.src = src;
  // Filet de sécurité : si le chargement échoue (réseau mobile, hôte qui bloque, etc.),
  // on bascule sur le placeholder au lieu de laisser l'icône "image cassée" du navigateur.
  if (secours) {
    img.onerror = function () {
      img.onerror = null;
      img.src = secours;
    };
  }
  conteneur.appendChild(img);
  return img;
}

/* Pose la mention d'attribution, soit en remplaçant un placeholder (options.credit),
   soit en l'ajoutant dans un conteneur (options.creditInto). */
function poserCredit(res, options) {
  if (!options || res.vide) return;
  const p = document.createElement('p');
  p.className = 'credit';
  p.innerHTML = '<a href="' + res.lien + '" target="_blank" rel="noopener">'
    + escapeHTML(res.auteur) + (res.licence ? ' · ' + escapeHTML(res.licence) : '') + '</a>';
  p.addEventListener('click', function (e) { e.stopPropagation(); });
  if (options.creditInto) options.creditInto.appendChild(p);
  else if (options.credit && options.credit.parentNode) options.credit.replaceWith(p);
}

/* Remplit un conteneur .card-media / .quiz-media pour un élément donné. */
function peuplerMedia(conteneur, element, options) {
  options = options || {};

  // 1. Aplat CSS pour les couleurs
  if (element.couleur) {
    netToyer(conteneur);
    const sw = document.createElement('div');
    sw.className = 'swatch';
    sw.style.background = element.couleur;
    if (element.couleur.toUpperCase() === '#FFFFFF') sw.style.boxShadow = 'inset 0 0 0 1px #E4DED3';
    conteneur.appendChild(sw);
    return Promise.resolve();
  }

  netToyer(conteneur);
  conteneur.appendChild(Object.assign(document.createElement('div'), { className: 'loading' }));

  // 2. Correction manuelle : URL fournie dans data.js (jamais mise en cache)
  const depart = element.imageOverride
    ? testerImage(element.imageOverride).then(function (ok) {
        if (ok) { afficherImage(conteneur, element.imageOverride, 'contain', placeholderSVG(element.nom)); return true; }
        return false;
      })
    : Promise.resolve(false);

  return depart.then(function (fait) {
    if (fait) return;

    // 3. Drapeaux officiels (FlagCDN) — pas d'attribution requise
    if (element.iso) {
      const url = FLAG_BASE + element.iso + '.png';
      return testerImage(url).then(function (ok) {
        afficherImage(conteneur, ok ? url : placeholderSVG(element.nom), 'contain drapeau', placeholderSVG(element.nom));
      });
    }

    // 4. Openverse
    if (!element.mot) {
      afficherImage(conteneur, placeholderSVG(element.nom));
      return;
    }
    return chercherImage(element.mot).then(function (res) {
      const img = afficherImage(conteneur, res.vide ? placeholderSVG(element.nom) : res.url, null, placeholderSVG(element.nom));
      img.onerror = function () {
        if (!res.vide && res.secours && img.src !== res.secours) {
          img.src = res.secours;
          img.onerror = function () { img.onerror = null; img.src = placeholderSVG(element.nom); };
          return;
        }
        img.onerror = null;
        img.src = placeholderSVG(element.nom);
      };
      poserCredit(res, options);
    });
  });
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
