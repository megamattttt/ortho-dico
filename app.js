/* app.js — navigation, fil d'ariane, mode cartes, recherche, favoris, voix */

const app = document.getElementById('app');
const filAriane = document.getElementById('breadcrumb');

let etat = { vue: 'accueil', catId: null, sousCatId: null };

document.getElementById('btn-accueil').addEventListener('click', function () { allerAccueil(); });

/* ---------- stockage local ---------- */
const STORE = {
  get: function (k, d) {
    try { const v = localStorage.getItem('voc:' + k); return v ? JSON.parse(v) : d; }
    catch (e) { return d; }
  },
  set: function (k, v) {
    try { localStorage.setItem('voc:' + k, JSON.stringify(v)); } catch (e) {}
  }
};

let FAVORIS = STORE.get('favoris', []);
let VOIX_AUTO = STORE.get('voixAuto', false);

function cleFav(el) { return (el.categorieId || etat.sousCatId || etat.catId || '?') + '|' + el.nom; }
function estFavori(el) { return FAVORIS.indexOf(cleFav(el)) !== -1; }
function basculerFavori(el) {
  const k = cleFav(el);
  const i = FAVORIS.indexOf(k);
  if (i === -1) FAVORIS.push(k); else FAVORIS.splice(i, 1);
  STORE.set('favoris', FAVORIS);
  return i === -1;
}
function elementsFavoris() {
  return tousLesElements().filter(function (e) { return FAVORIS.indexOf(e.categorieId + '|' + e.nom) !== -1; });
}

/* ---------- voix (synthèse vocale française) ---------- */
function dire(texte) {
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = 'fr-FR';
    u.rate = 0.9;
    speechSynthesis.speak(u);
  } catch (e) {}
}

function boutonVoix(texte, classe) {
  const b = h('button', {
    class: 'mini ' + (classe || ''), type: 'button', title: 'Écouter le mot',
    'aria-label': 'Écouter le mot'
  }, ['🔊']);
  b.addEventListener('click', function (e) { e.stopPropagation(); dire(texte); });
  return b;
}

/* ---------- utilitaires ---------- */
function h(tag, attrs, enfants) {
  const n = document.createElement(tag);
  if (attrs) Object.keys(attrs).forEach(function (k) {
    if (k === 'class') n.className = attrs[k];
    else if (k === 'html') n.innerHTML = attrs[k];
    else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
    else n.setAttribute(k, attrs[k]);
  });
  (enfants || []).forEach(function (c) {
    if (c == null) return;
    n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return n;
}

function vider() {
  if (typeof clavierAlpha !== 'undefined' && clavierAlpha) {
    document.removeEventListener('keydown', clavierAlpha);
    clavierAlpha = null;
  }
  app.innerHTML = '';
  window.scrollTo(0, 0);
}

function getCategorie(id) { return CATEGORIES.find(function (c) { return c.id === id; }); }

function getNoeud(catId, sousCatId) {
  const cat = getCategorie(catId);
  if (!cat) return null;
  if (!sousCatId) return cat;
  return (cat.sousCategories || []).find(function (s) { return s.id === sousCatId; }) || null;
}

function compterMots(cat) {
  return cat.sousCategories
    ? cat.sousCategories.reduce(function (s, sc) { return s + sc.elements.length; }, 0)
    : cat.elements.length;
}

/* Teintes ludiques, une par catégorie */
const TEINTES = ['#E8F1EB', '#FDEDE3', '#E9F0FA', '#F5EBF6', '#FBF3DF', '#E5F1F2', '#FAEAEC', '#EFF3E4'];

/* Une couleur propre à chaque catégorie : pastel (fond) + intense (bord, accent) */
const COULEURS_CAT = {
  legumes:     { pastel: '#E4F2DE', vif: '#5C9A3E' },
  fruits:      { pastel: '#FDE4E1', vif: '#D9483F' },
  metiers:     { pastel: '#E3ECFA', vif: '#3A62B8' },
  pays:        { pastel: '#E0F1F1', vif: '#22867F' },
  fleurs:      { pastel: '#F8E3F1', vif: '#B8478F' },
  objets:      { pastel: '#F1EBE1', vif: '#8A6A3E' },
  nature:      { pastel: '#E6EEE8', vif: '#4E7A62' },
  couleurs:    { pastel: '#FBE8CF', vif: '#E0801B' },
  vetements:   { pastel: '#EAE5F7', vif: '#6A4FB5' },
  transports:  { pastel: '#DDEDF7', vif: '#1F7BA8' },
  instruments: { pastel: '#FCE7DA', vif: '#C4602A' },
  aliments:    { pastel: '#FBF0D4', vif: '#B99416' },
  animaux:     { pastel: '#E9EDD9', vif: '#79913B' }
};
function couleurCat(id, i) {
  return COULEURS_CAT[id] || { pastel: TEINTES[i % TEINTES.length], vif: '#2E6F6A' };
}

/* Fil d'ariane : liste de { nom, action } ; le dernier est l'élément courant. */
function majFilAriane(items) {
  filAriane.innerHTML = '';
  items.forEach(function (it, i) {
    if (i > 0) filAriane.appendChild(h('span', { class: 'sep' }, ['›']));
    if (it.action && i < items.length - 1) {
      filAriane.appendChild(h('button', { type: 'button', onClick: it.action }, [it.nom]));
    } else {
      filAriane.appendChild(h('span', { class: 'current' }, [it.nom]));
    }
  });
}

/* ---------- Accueil ---------- */
function allerAccueil() {
  etat = { vue: 'accueil', catId: null, sousCatId: null };
  vider();
  majFilAriane([{ nom: 'Accueil' }]);

  const bloc = h('div', { class: 'brand-home' }, []);
  const logo = document.createElement('img');
  logo.src = 'logo.png'; logo.alt = 'OrthoDico'; logo.className = 'brand-logo';
  bloc.appendChild(logo);
  app.appendChild(bloc);
  app.appendChild(h('p', { class: 'sub' }, [
    tousLesElements().length + ' mots · cherchez, écoutez, jouez.'
  ]));

  /* barre de recherche + accès rapides */
  const champ = h('input', {
    class: 'search', type: 'search', placeholder: 'Rechercher un mot…',
    'aria-label': 'Rechercher un mot', autocomplete: 'off'
  });
  const zoneRes = h('div', { class: 'resultats' });

  champ.addEventListener('input', function () {
    const q = sansAccents(champ.value.trim());
    zoneRes.innerHTML = '';
    grille.style.display = q.length >= 2 ? 'none' : '';
    if (q.length < 2) return;
    const trouves = tousLesElements().filter(function (e) {
      return sansAccents(e.nom).indexOf(q) !== -1;
    }).slice(0, 40);
    if (!trouves.length) {
      zoneRes.appendChild(h('p', { class: 'vide' }, ['Aucun mot ne correspond à « ' + champ.value +' ».']));
      return;
    }
    zoneRes.appendChild(h('p', { class: 'sub' }, [trouves.length + ' résultat' + (trouves.length > 1 ? 's' : '')]));
    const g = h('div', { class: 'grid-cards' });
    trouves.forEach(function (el) { g.appendChild(construireCarte(el, { revele: true, source: true })); });
    zoneRes.appendChild(g);
  });

  app.appendChild(h('div', { class: 'barre-recherche' }, [
    champ,
    h('button', {
      class: 'btn', type: 'button', title: 'Une carte au hasard',
      onClick: function () { ouvrirSurprise(); }
    }, ['🎲 Surprise'])
  ]));
  app.appendChild(zoneRes);

  const grille = h('div', { class: 'grid-cats' });

  grille.appendChild(h('button', {
    class: 'cat-tile tile-quiz-alpha', type: 'button',
    onClick: function () { lancerQuizAlphabet(); }
  }, [
    h('span', { class: 'emoji', 'aria-hidden': 'true' }, ['🔤']),
    h('span', {}, [
      h('span', { class: 'label' }, ['Quizz Alphabet']),
      h('span', { class: 'count', style: 'display:block' }, ['De A à Z, toutes catégories'])
    ])
  ]));

  const favs = elementsFavoris();
  if (favs.length) {
    grille.appendChild(h('button', {
      class: 'cat-tile tile-fav', type: 'button',
      style: '--tint:#FDF0DC',
      onClick: function () { ouvrirFavoris(); }
    }, [
      h('span', { class: 'emoji', 'aria-hidden': 'true' }, ['⭐']),
      h('span', { class: 'label' }, ['Mes favoris']),
      h('span', { class: 'count' }, [favs.length + ' mots'])
    ]));
  }

  CATEGORIES.forEach(function (cat, i) {
    const n = compterMots(cat);
    const record = STORE.get('record:' + cat.id, null);
    grille.appendChild(h('button', {
      class: 'cat-tile', type: 'button',
      style: '--tint:' + couleurCat(cat.id, i).pastel + ';--vif:' + couleurCat(cat.id, i).vif,
      onClick: function () { ouvrirCategorie(cat.id); }
    }, [
      record ? h('span', { class: 'medaille', title: 'Meilleur score' }, ['★ ' + record + '%']) : null,
      h('span', { class: 'emoji', 'aria-hidden': 'true' }, [cat.icone]),
      h('span', { class: 'label' }, [cat.nom]),
      h('span', { class: 'count' }, [
        cat.sousCategories ? cat.sousCategories.length + ' groupes · ' + n + ' mots' : n + ' mots'
      ])
    ]));
  });

  app.appendChild(grille);
}

/* ---------- Sous-catégories ---------- */
function ouvrirCategorie(catId) {
  const cat = getCategorie(catId);
  if (!cat) return allerAccueil();
  if (!cat.sousCategories) return ouvrirCartes(catId, null);

  etat = { vue: 'sousCats', catId: catId, sousCatId: null };
  vider();
  majFilAriane([
    { nom: 'Accueil', action: allerAccueil },
    { nom: cat.nom }
  ]);

  app.appendChild(h('h1', {}, [cat.icone + ' ' + cat.nom]));
  app.appendChild(h('p', { class: 'sub' }, ['Choisissez un groupe.']));

  const grille = h('div', { class: 'grid-cats' });
  cat.sousCategories.forEach(function (sc, i) {
    grille.appendChild(h('button', {
      class: 'cat-tile', type: 'button',
      style: '--tint:' + couleurCat(sc.id, i).pastel + ';--vif:' + couleurCat(sc.id, i).vif,
      onClick: function () { ouvrirCartes(cat.id, sc.id); }
    }, [
      h('span', { class: 'emoji', 'aria-hidden': 'true' }, [sc.icone]),
      h('span', { class: 'label' }, [sc.nom]),
      h('span', { class: 'count' }, [sc.elements.length + ' mots'])
    ]));
  });
  app.appendChild(grille);
}

/* ---------- Mode cartes ---------- */
function ouvrirCartes(catId, sousCatId) {
  const noeud = getNoeud(catId, sousCatId);
  if (!noeud) return allerAccueil();

  etat = { vue: 'cartes', catId: catId, sousCatId: sousCatId };
  rendreListe({
    titre: noeud.icone + ' ' + noeud.nom,
    elements: noeud.elements,
    chemin: cheminActuel(),
    quiz: function () { lancerQuizCategorie(catId, sousCatId); }
  });
}

function ouvrirFavoris() {
  const els = elementsFavoris();
  etat = { vue: 'favoris', catId: null, sousCatId: null };
  if (!els.length) return allerAccueil();
  rendreListe({
    titre: '⭐ Mes favoris',
    elements: els,
    chemin: [{ nom: 'Accueil', action: allerAccueil }, { nom: 'Mes favoris' }],
    source: true,
    quiz: els.length >= 4 ? function () {
      lancerQuizListe(els, '⭐ Quizz — Mes favoris', 'favoris', ouvrirFavoris,
        [{ nom: 'Accueil', action: allerAccueil }, { nom: 'Mes favoris', action: ouvrirFavoris }, { nom: 'Quizz' }]);
    } : null
  });
}

function rendreListe(cfg) {
  vider();
  majFilAriane(cfg.chemin);

  app.appendChild(h('h1', {}, [cfg.titre]));
  app.appendChild(h('p', { class: 'sub' }, [
    cfg.elements.length + ' mots · touchez une carte pour révéler le nom'
  ]));

  let toutRevele = false;
  const btnTout = h('button', { class: 'btn', type: 'button' }, ['👁 Tout révéler']);
  btnTout.addEventListener('click', function () {
    toutRevele = !toutRevele;
    app.querySelectorAll('.card').forEach(function (c) { basculerCarte(c, toutRevele); });
    btnTout.textContent = toutRevele ? '🙈 Tout cacher' : '👁 Tout révéler';
  });

  const btnVoix = h('button', { class: 'btn' + (VOIX_AUTO ? ' actif' : ''), type: 'button' },
    ['🔊 Voix auto']);
  btnVoix.addEventListener('click', function () {
    VOIX_AUTO = !VOIX_AUTO;
    STORE.set('voixAuto', VOIX_AUTO);
    btnVoix.classList.toggle('actif', VOIX_AUTO);
  });

  const outils = [btnTout, btnVoix, h('span', { class: 'spacer' })];
  if (cfg.quiz) {
    outils.push(h('button', { class: 'btn btn-primary', type: 'button', onClick: cfg.quiz }, ['🎯 Quizz']));
  }
  app.appendChild(h('div', { class: 'toolbar' }, outils));

  const grille = h('div', { class: 'grid-cards' });
  cfg.elements.forEach(function (el) {
    grille.appendChild(construireCarte(el, { source: cfg.source }));
  });
  app.appendChild(grille);
}

/* ---------- Carte surprise ---------- */
function ouvrirSurprise() {
  const tous = tousLesElements();
  const el = tous[Math.floor(Math.random() * tous.length)];
  vider();
  majFilAriane([{ nom: 'Accueil', action: allerAccueil }, { nom: 'Surprise' }]);

  app.appendChild(h('h1', {}, ['🎲 Carte surprise']));
  app.appendChild(h('p', { class: 'sub' }, ['Catégorie : ' + el.categorieNom]));

  const bloc = h('div', { class: 'surprise' });
  bloc.appendChild(construireCarte(el, { source: true }));
  app.appendChild(bloc);

  app.appendChild(h('div', { class: 'actions' }, [
    h('button', { class: 'btn btn-primary', type: 'button', onClick: ouvrirSurprise }, ['🎲 Une autre']),
    h('button', {
      class: 'btn', type: 'button',
      onClick: function () { allerCategorieDe(el); }
    }, ['Voir la catégorie →'])
  ]));
}

function allerCategorieDe(el) {
  const direct = getCategorie(el.categorieId);
  if (direct) return ouvrirCartes(el.categorieId, null);
  const parent = CATEGORIES.find(function (c) {
    return (c.sousCategories || []).some(function (s) { return s.id === el.categorieId; });
  });
  if (parent) return ouvrirCartes(parent.id, el.categorieId);
  allerAccueil();
}

/* ---------- Construction d'une carte ---------- */
function construireCarte(el, opts) {
  opts = opts || {};
  const media = h('div', { class: 'card-media' });
  const nom = h('div', { class: 'card-name' }, [h('span', { class: 'mask' }, ['• • •'])]);

  const carte = h('div', { class: 'card', role: 'button', tabindex: '0' }, [media, nom]);
  carte.dataset.nom = el.nom;
  carte.dataset.drapeau = el.drapeau || '';

  const outils = h('div', { class: 'card-tools' });
  const btnFav = h('button', {
    class: 'mini fav' + (estFavori(el) ? ' on' : ''), type: 'button',
    title: 'Ajouter aux favoris', 'aria-label': 'Ajouter aux favoris'
  }, [estFavori(el) ? '★' : '☆']);
  btnFav.addEventListener('click', function (e) {
    e.stopPropagation();
    const ajoute = basculerFavori(el);
    btnFav.classList.toggle('on', ajoute);
    btnFav.textContent = ajoute ? '★' : '☆';
    btnFav.classList.remove('pulse');
    void btnFav.offsetWidth;
    btnFav.classList.add('pulse');
  });
  outils.appendChild(btnFav);
  outils.appendChild(boutonVoix(el.nom));
  media.appendChild(outils);

  carte.addEventListener('click', function () {
    basculerCarte(carte, !carte.classList.contains('revealed'));
  });
  carte.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      basculerCarte(carte, !carte.classList.contains('revealed'));
    }
  });

  peuplerMedia(media, el, { creditInto: media, garder: outils });
  if (opts.source && el.categorieNom) {
    carte.appendChild(h('div', { class: 'card-source' }, [el.categorieNom]));
  }
  if (opts.revele) basculerCarte(carte, true);
  return carte;
}

function basculerCarte(carte, revele) {
  const zone = carte.querySelector('.card-name');
  const etaitRevele = carte.classList.contains('revealed');
  carte.classList.toggle('revealed', !!revele);
  zone.innerHTML = '';
  if (revele) {
    if (carte.dataset.drapeau) {
      zone.appendChild(h('span', { 'aria-hidden': 'true' }, [carte.dataset.drapeau]));
    }
    zone.appendChild(h('span', {}, [carte.dataset.nom]));
    if (VOIX_AUTO && !etaitRevele) dire(carte.dataset.nom);
  } else {
    zone.appendChild(h('span', { class: 'mask' }, ['• • •']));
  }
}

/* Chemin du fil d'ariane pour l'état courant (réutilisé par les quizz). */
function cheminActuel(suffixe) {
  const cat = getCategorie(etat.catId);
  const items = [{ nom: 'Accueil', action: allerAccueil }];
  if (cat) {
    items.push({
      nom: cat.nom,
      action: function () { ouvrirCategorie(cat.id); }
    });
    if (etat.sousCatId) {
      const sc = getNoeud(cat.id, etat.sousCatId);
      items.push({
        nom: sc.nom,
        action: function () { ouvrirCartes(cat.id, sc.id); }
      });
    }
  }
  if (suffixe) items.push({ nom: suffixe });
  return items;
}

allerAccueil();
