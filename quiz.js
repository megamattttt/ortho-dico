/* quiz.js — quizz par catégorie et quizz alphabet */

function melanger(tab) {
  const a = tab.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* Construit 4 propositions : la bonne + 3 leurres. */
function propositions(bon, pool) {
  const leurres = melanger(pool.filter(function (e) { return e.nom !== bon.nom; })).slice(0, 3);
  let choix = leurres.map(function (e) { return e.nom; });
  if (choix.length < 3) {
    const global = melanger(tousLesElements())
      .filter(function (e) { return e.nom !== bon.nom && choix.indexOf(e.nom) === -1; });
    while (choix.length < 3 && global.length) choix.push(global.pop().nom);
  }
  return melanger(choix.concat([bon.nom]));
}

/* Comme propositions(), mais renvoie des éléments complets (mode « trouve l'image »). */
function propositionsElements(bon, pool) {
  const l = melanger(pool.filter(function (e) { return e.nom !== bon.nom; })).slice(0, 3);
  if (l.length < 3) {
    const g = melanger(tousLesElements()).filter(function (e) {
      return e.nom !== bon.nom && !l.some(function (x) { return x.nom === e.nom; });
    });
    while (l.length < 3 && g.length) l.push(g.pop());
  }
  return melanger(l.concat([bon]));
}

/* Petite pluie de confettis (célébration) */
function confetti(n) {
  n = n || 16;
  const couleurs = ['#2E6F6A', '#D9773E', '#3F8F5A', '#F2C230', '#7B4BA8'];
  for (let i = 0; i < n; i++) {
    const d = document.createElement('i');
    d.className = 'confetti';
    d.style.left = (42 + Math.random() * 16) + 'vw';
    d.style.background = couleurs[i % couleurs.length];
    d.style.setProperty('--dx', (Math.random() * 300 - 150) + 'px');
    d.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
    d.style.animationDelay = (Math.random() * 0.18).toFixed(2) + 's';
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 1700);
  }
}

/* Construit une série de questions mixtes (nommer l'image / trouver l'image). */
function construireQuestions(dispo, nb) {
  return melanger(dispo).slice(0, nb).map(function (el, i) {
    if (dispo.length >= 4 && i % 2 === 1) {
      return { element: el, type: 'image', choixEl: propositionsElements(el, dispo) };
    }
    return { element: el, type: 'mot', choix: propositions(el, dispo) };
  });
}

/* ======================= Quizz par catégorie ======================= */
function lancerQuizCategorie(catId, sousCatId) {
  const noeud = getNoeud(catId, sousCatId);
  if (!noeud) return allerAccueil();

  const dispo = noeud.elements;
  const nb = Math.max(5, Math.min(10, dispo.length));

  jouerQuiz({
    titre: noeud.icone + ' Quizz — ' + noeud.nom,
    questions: construireQuestions(dispo, nb),
    chemin: cheminActuel('Quizz'),
    cleRecord: catId,
    rejouer: function () { lancerQuizCategorie(catId, sousCatId); },
    retour: function () { ouvrirCartes(catId, sousCatId); }
  });
}

/* Quizz sur une liste libre (favoris, résultats…) */
function lancerQuizListe(elements, titre, cleRecord, retour, chemin) {
  const nb = Math.max(4, Math.min(10, elements.length));
  jouerQuiz({
    titre: titre,
    questions: construireQuestions(elements, nb),
    chemin: chemin,
    cleRecord: cleRecord,
    rejouer: function () { lancerQuizListe(elements, titre, cleRecord, retour, chemin); },
    retour: retour
  });
}

/* ======================= Quizz alphabet ======================= */
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LETTRES_PLAUSIBLES = 'EAISTNRULOMDCPBVFGH'.split('');
let minuteurAlpha = null;
let clavierAlpha = null;

function lancerQuizAlphabet() {
  const tous = tousLesElements();
  const questions = ALPHABET.map(function (lettre) {
    const candidats = tous.filter(function (e) { return sansAccents(e.nom)[0] === lettre; });
    if (!candidats.length) return { lettre: lettre, vide: true };
    return { lettre: lettre, element: candidats[Math.floor(Math.random() * candidats.length)] };
  });

  const resultats = new Array(26).fill(null); // '1' | '2' | 'echec' | 'skip'
  const chemin = [{ nom: 'Accueil', action: allerAccueil }, { nom: 'Quizz Alphabet' }];
  let index = 0;

  /* -------- une lettre -------- */
  function rendre() {
    clearTimeout(minuteurAlpha);
    if (clavierAlpha) { document.removeEventListener('keydown', clavierAlpha); clavierAlpha = null; }
    vider();
    majFilAriane(chemin);
    if (index >= 26) return rendreResultat();

    const q = questions[index];
    const bloc = h('div', { class: 'quiz' });

    /* progression */
    const jauge = h('i');
    jauge.style.width = (index / 26 * 100) + '%';
    bloc.appendChild(h('div', { class: 'quiz-progress' }, [
      h('span', {}, ['Lettre ' + (index + 1) + ' / 26']),
      h('div', { class: 'bar' }, [jauge]),
      h('span', {}, [nbReussites() + ' pt'])
    ]));

    /* grande lettre animée */
    bloc.appendChild(h('div', { class: 'hero-lettre' }, [
      h('span', { class: 'glyphe' }, [q.lettre])
    ]));

    if (q.vide) {
      resultats[index] = 'skip';
      bloc.appendChild(h('div', { class: 'vide' }, [
        h('p', {}, ['Aucun élément ne commence par cette lettre.'])
      ]));
      bloc.appendChild(h('div', { class: 'actions' }, [
        h('button', { class: 'btn btn-primary', type: 'button', onClick: suivant }, ['Suivant →'])
      ]));
      app.appendChild(bloc);
      minuteurAlpha = setTimeout(suivant, 1600);
      return;
    }

    /* image */
    const media = h('div', { class: 'quiz-media' });
    bloc.appendChild(media);
    peuplerMedia(media, q.element, { creditInto: media });

    /* mot à reconstituer */
    const cible = q.element.nom.toUpperCase();      // accents conservés : "ÉTOILE", "ARC-EN-CIEL"
    const lettresCible = cible.split('').filter(estLettre);
    const zoneCases = h('div', { class: 'slots' });
    const cases = [];                              // uniquement les cases lettres

    cible.split('').forEach(function (ch, i) {
      if (!estLettre(ch)) {
        zoneCases.appendChild(h('span', { class: 'sep-mot' }, [ch === ' ' ? '' : ch]));
        return;
      }
      const c = h('button', { class: 'slot', type: 'button' });
      c.dataset.attendu = ch;
      if (i === 0) {
        c.classList.add('fixe');
        c.textContent = ch;
        c.dataset.valeur = ch;
        c.disabled = true;
      } else {
        c.addEventListener('click', function () { viderCase(c); });
      }
      cases.push(c);
      zoneCases.appendChild(c);
    });
    bloc.appendChild(zoneCases);

    /* pool de lettres */
    const aPlacer = lettresCible.slice(1);
    const pieges = tirerPieges(lettresCible, 3 + Math.floor(Math.random() * 3));
    const zonePool = h('div', { class: 'pool' });
    melanger(aPlacer.concat(pieges)).forEach(function (l) {
      zonePool.appendChild(creerJeton(l));
    });
    bloc.appendChild(zonePool);

    /* validation */
    const msg = h('p', { class: 'alpha-msg' }, ['\u00a0']);
    const btnValider = h('button', { class: 'btn btn-primary', type: 'button', disabled: 'disabled' }, ['Valider']);
    btnValider.addEventListener('click', valider);
    bloc.appendChild(msg);
    bloc.appendChild(h('div', { class: 'actions' }, [
      btnValider,
      h('button', { class: 'btn', type: 'button', onClick: indice }, ['💡 Indice']),
      h('button', { class: 'btn', type: 'button', onClick: reinitialiser }, ['↺ Effacer'])
    ]));
    bloc.appendChild(h('p', { class: 'legende centre' }, [
      'Glissez les lettres, touchez-les, ou tapez-les au clavier · Entrée pour valider'
    ]));

    let essais = 0;
    let aide = false;
    let verrouille = false;
    app.appendChild(bloc);

    /* ---- clavier physique ---- */
    clavierAlpha = function (e) {
      if (verrouille || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!zoneCases.isConnected) return;
      const cible = e.target;
      if (cible && (cible.tagName === 'INPUT' || cible.tagName === 'TEXTAREA' || cible.isContentEditable)) return;
      if (e.key === 'Enter') { if (!btnValider.disabled) valider(); return; }
      if (e.key === 'Backspace') {
        e.preventDefault();
        const pleines = cases.filter(function (c) {
          return !c.classList.contains('fixe') && c.dataset.valeur;
        });
        if (pleines.length) viderCase(pleines[pleines.length - 1]);
        return;
      }
      if (e.key.length !== 1) return;
      const k = sansAccents(e.key);
      if (!/^[A-Z]$/.test(k)) return;
      const jeton = Array.prototype.find.call(zonePool.querySelectorAll('.tile'), function (j) {
        return !j.classList.contains('used') && sansAccents(j.dataset.lettre) === k;
      });
      const libre = premiereCaseLibre();
      if (jeton && libre) { e.preventDefault(); poser(jeton, libre); }
    };
    document.addEventListener('keydown', clavierAlpha);

    /* ---- indice : place une lettre correcte ---- */
    function indice() {
      if (verrouille) return;
      const libre = premiereCaseLibre();
      if (!libre) return;
      aide = true;
      const attendue = libre.dataset.attendu;
      const jeton = Array.prototype.find.call(zonePool.querySelectorAll('.tile'), function (j) {
        return !j.classList.contains('used') && j.dataset.lettre === attendue;
      });
      if (jeton) poser(jeton, libre);
      else {
        libre.dataset.valeur = attendue;
        libre.textContent = attendue;
        libre.classList.add('remplie');
        majBouton();
      }
      libre.classList.add('aide');
    }

    /* ---- manipulation des lettres ---- */
    function creerJeton(l) {
      const j = h('button', { class: 'tile', type: 'button' }, [l]);
      j.dataset.lettre = l;
      brancherGeste(j);
      return j;
    }

    function brancherGeste(jeton) {
      let x0 = 0, y0 = 0, drag = false, fantome = null;

      jeton.addEventListener('pointerdown', function (e) {
        if (verrouille || jeton.classList.contains('used')) return;
        x0 = e.clientX; y0 = e.clientY; drag = false;
        jeton.setPointerCapture(e.pointerId);
      });

      jeton.addEventListener('pointermove', function (e) {
        if (!jeton.hasPointerCapture || !jeton.hasPointerCapture(e.pointerId)) return;
        if (!drag && Math.hypot(e.clientX - x0, e.clientY - y0) > 8) {
          drag = true;
          jeton.classList.add('dragging');
          fantome = jeton.cloneNode(true);
          fantome.className = 'tile fantome';
          document.body.appendChild(fantome);
        }
        if (drag) {
          fantome.style.left = e.clientX + 'px';
          fantome.style.top = e.clientY + 'px';
          const sous = document.elementFromPoint(e.clientX, e.clientY);
          const cible2 = sous && sous.closest ? sous.closest('.slot') : null;
          zoneCases.querySelectorAll('.slot').forEach(function (s) { s.classList.remove('survol'); });
          if (cible2 && !cible2.classList.contains('fixe') && !cible2.dataset.valeur) {
            cible2.classList.add('survol');
          }
        }
      });

      jeton.addEventListener('pointerup', function (e) {
        if (verrouille) return;
        zoneCases.querySelectorAll('.slot').forEach(function (s) { s.classList.remove('survol'); });
        if (drag) {
          jeton.classList.remove('dragging');
          if (fantome) { fantome.remove(); fantome = null; }
          const sous = document.elementFromPoint(e.clientX, e.clientY);
          const cible2 = sous && sous.closest ? sous.closest('.slot') : null;
          if (cible2 && !cible2.classList.contains('fixe') && !cible2.dataset.valeur) {
            poser(jeton, cible2);
          }
          drag = false;
        } else {
          const libre = premiereCaseLibre();
          if (libre) poser(jeton, libre);
        }
      });

      jeton.addEventListener('lostpointercapture', function () {
        if (fantome) { fantome.remove(); fantome = null; }
        jeton.classList.remove('dragging');
        drag = false;
      });
    }

    function premiereCaseLibre() {
      return cases.find(function (c) { return !c.classList.contains('fixe') && !c.dataset.valeur; });
    }

    function poser(jeton, caseCible) {
      caseCible.dataset.valeur = jeton.dataset.lettre;
      caseCible.dataset.jeton = jeton.dataset.id || (jeton.dataset.id = 'j' + Math.random().toString(36).slice(2));
      caseCible.textContent = jeton.dataset.lettre;
      caseCible.classList.add('remplie');
      jeton.classList.add('used');
      jeton.disabled = true;
      majBouton();
    }

    function viderCase(c) {
      if (verrouille || !c.dataset.valeur) return;
      const jeton = zonePool.querySelector('[data-id="' + c.dataset.jeton + '"]');
      if (jeton) { jeton.classList.remove('used'); jeton.disabled = false; }
      delete c.dataset.valeur;
      delete c.dataset.jeton;
      c.textContent = '';
      c.classList.remove('remplie');
      majBouton();
    }

    function viderCases() {
      cases.forEach(function (c) { if (!c.classList.contains('fixe')) viderCase(c); });
    }

    function reinitialiser() {
      viderCases();
      msg.textContent = '\u00a0';
      msg.className = 'alpha-msg';
    }

    function majBouton() {
      const complet = cases.every(function (c) { return !!c.dataset.valeur; });
      btnValider.disabled = !complet;
    }

    function valider() {
      const propose = cases.map(function (c) { return c.dataset.valeur; }).join('');
      const attendu = lettresCible.join('');
      if (propose === attendu) {
        verrouille = true;
        cases.forEach(function (c) { c.classList.add('juste'); });
        msg.textContent = '✓ ' + q.element.nom;
        msg.className = 'alpha-msg ok';
        resultats[index] = (essais === 0 && !aide) ? '1' : '2';
        confetti(essais === 0 && !aide ? 18 : 10);
        dire(q.element.nom);
        btnValider.disabled = true;
        minuteurAlpha = setTimeout(suivant, 1100);
        return;
      }

      essais++;
      zoneCases.classList.remove('secoue');
      void zoneCases.offsetWidth;
      zoneCases.classList.add('secoue');
      cases.forEach(function (c) { if (!c.classList.contains('fixe')) c.classList.add('faux'); });

      if (essais >= 2) {
        verrouille = true;
        resultats[index] = 'echec';
        setTimeout(function () {
          cases.forEach(function (c, i) {
            c.classList.remove('faux');
            c.classList.add('revele');
            c.textContent = lettresCible[i];
            c.dataset.valeur = lettresCible[i];
          });
        }, 500);
        msg.textContent = 'La réponse était : ' + q.element.nom;
        msg.className = 'alpha-msg ko';
        btnValider.disabled = true;
        minuteurAlpha = setTimeout(suivant, 2400);
      } else {
        msg.textContent = '✗ Ce n’est pas le bon mot — encore un essai.';
        msg.className = 'alpha-msg ko';
        setTimeout(function () {
          cases.forEach(function (c) { c.classList.remove('faux'); });
          viderCases();
        }, 500);
      }
    }
  }

  function suivant() { clearTimeout(minuteurAlpha); index++; rendre(); }

  function nbReussites() {
    return resultats.filter(function (r) { return r === '1' || r === '2'; }).length;
  }

  /* -------- compte-rendu -------- */
  function rendreResultat() {
    vider();
    majFilAriane(chemin);
    if (clavierAlpha) { document.removeEventListener('keydown', clavierAlpha); clavierAlpha = null; }
    const jouees = questions.filter(function (q) { return !q.vide; }).length;
    const pct = jouees ? Math.round(nbReussites() / jouees * 100) : 0;
    const record = STORE.get('record:alphabet', 0);
    const nouveau = pct > record;
    if (nouveau) STORE.set('record:alphabet', pct);
    if (pct >= 80) confetti(30);

    const bloc = h('div', { class: 'quiz result' });
    bloc.appendChild(h('h1', {}, ['Compte-rendu']));
    bloc.appendChild(h('div', { class: 'badge-mention' }, [
      pct === 100 ? '🏆 Alphabet parfait !' : pct >= 80 ? '🌟 Très bien !' : pct >= 50 ? '👍 Bien joué' : '💪 On recommence ?'
    ]));
    bloc.appendChild(h('div', { class: 'score' }, [nbReussites() + ' / ' + jouees]));
    bloc.appendChild(h('p', { class: 'sub' }, [
      'mots reconstitués · ' + (26 - jouees) + ' lettres sans élément'
    ]));
    bloc.appendChild(h('p', { class: 'record' }, [
      nouveau ? '★ Nouveau record : ' + pct + ' %' : 'Meilleur score : ' + Math.max(record, pct) + ' %'
    ]));

    const recap = h('div', { class: 'recap' });
    questions.forEach(function (q, i) {
      const r = resultats[i] || 'skip';
      const classe = (r === '1' || r === '2') ? 'ok' : (r === 'echec' ? 'ko' : 'skip');
      const marque = r === '1' ? '✓' : (r === '2' ? '✓²' : (r === 'echec' ? '✗' : '–'));
      recap.appendChild(h('div', { class: classe, title: q.vide ? 'Aucun élément' : q.element.nom }, [
        h('div', { class: 'l' }, [q.lettre]),
        h('div', { class: 'm' }, [marque])
      ]));
    });
    bloc.appendChild(recap);
    bloc.appendChild(h('p', { class: 'legende' }, ['✓ réussi du premier coup · ✓² réussi au 2e essai · ✗ échoué · – aucun élément']));

    bloc.appendChild(h('div', { class: 'actions' }, [
      h('button', { class: 'btn btn-primary', type: 'button', onClick: lancerQuizAlphabet }, ['↻ Recommencer']),
      h('button', { class: 'btn', type: 'button', onClick: allerAccueil }, ['← Retour'])
    ]));
    app.appendChild(bloc);
  }

  rendre();
}

function estLettre(ch) { return /\p{L}/u.test(ch); }

/* Lettres pièges : plausibles, absentes du mot (accents ignorés pour la comparaison). */
function tirerPieges(lettresMot, combien) {
  const dedans = {};
  lettresMot.forEach(function (l) { dedans[sansAccents(l)] = true; });
  const dispo = melanger(LETTRES_PLAUSIBLES.filter(function (l) { return !dedans[l]; }));
  return dispo.slice(0, combien);
}

/* ======================= Moteur commun ======================= */
function jouerQuiz(cfg) {
  let index = 0;
  let serie = 0, meilleureSerie = 0;
  const reponses = []; // 'ok' | 'ko' | 'skip'

  function rendre() {
    vider();
    majFilAriane(cfg.chemin);
    if (index >= cfg.questions.length) return rendreResultat();

    const q = cfg.questions[index];
    const bloc = h('div', { class: 'quiz' });

    bloc.appendChild(h('h1', {}, [cfg.titre]));

    const barre = h('i');
    barre.style.width = (index / cfg.questions.length * 100) + '%';
    bloc.appendChild(h('div', { class: 'quiz-progress' }, [
      h('span', {}, [cfg.alphabet
        ? 'Lettre ' + q.lettre + ' — ' + (index + 1) + ' / 26'
        : 'Question ' + (index + 1) + ' / ' + cfg.questions.length]),
      h('div', { class: 'bar' }, [barre]),
      h('span', {}, [score() + ' pt']),
      serie >= 2 ? h('span', { class: 'serie' }, ['🔥 ×' + serie]) : null
    ]));

    if (q.vide) {
      bloc.appendChild(h('div', { class: 'vide' }, [
        h('div', { class: 'lettre' }, [q.lettre]),
        h('p', {}, ['Aucun élément pour cette lettre.'])
      ]));
      bloc.appendChild(h('div', { class: 'feedback' }, [
        h('span', { class: 'msg' }, ['Lettre ignorée']),
        h('button', {
          class: 'btn btn-primary', type: 'button',
          onClick: function () { reponses[index] = 'skip'; index++; rendre(); }
        }, ['Suivant →'])
      ]));
      app.appendChild(bloc);
      return;
    }

    const zoneFeedback = h('div', { class: 'feedback' });
    const zoneChoix = h('div', { class: q.type === 'image' ? 'choices choices-img' : 'choices' });

    if (q.type === 'image') {
      /* Mode « trouve l'image » : le mot est donné, on choisit parmi 4 visuels. */
      bloc.appendChild(h('p', { class: 'quiz-question grande' }, [
        h('span', {}, ['Où est : ' + q.element.nom + ' ?']),
        boutonVoix(q.element.nom, 'inline')
      ]));
      q.choixEl.forEach(function (el) {
        const vignette = h('div', { class: 'choix-media' });
        const b = h('button', { class: 'choice choix-img', type: 'button' }, [vignette]);
        peuplerMedia(vignette, el, {});
        b.dataset.nom = el.nom;
        b.addEventListener('click', function () { repondre(el.nom); });
        zoneChoix.appendChild(b);
      });
    } else {
      const media = h('div', { class: 'quiz-media' });
      bloc.appendChild(media);
      peuplerMedia(media, q.element, { creditInto: media });
      bloc.appendChild(h('p', { class: 'quiz-question' }, ['Quel est le nom de cet élément ?']));
      q.choix.forEach(function (nom) {
        const b = h('button', { class: 'choice', type: 'button' }, [nom]);
        b.dataset.nom = nom;
        b.addEventListener('click', function () { repondre(nom); });
        zoneChoix.appendChild(b);
      });
    }

    function repondre(nom) {
      const juste = nom === q.element.nom;
      reponses[index] = juste ? 'ok' : 'ko';
      if (juste) {
        serie++;
        if (serie > meilleureSerie) meilleureSerie = serie;
        if (serie >= 3) confetti(14);
      } else {
        serie = 0;
      }
      Array.prototype.forEach.call(zoneChoix.children, function (b) {
        b.disabled = true;
        if (b.dataset.nom === q.element.nom) b.classList.add('bonne');
        else if (b.dataset.nom === nom) b.classList.add('mauvaise');
        else b.classList.add('pale');
      });
      dire(q.element.nom);
      zoneFeedback.innerHTML = '';
      zoneFeedback.appendChild(h('span', { class: 'msg ' + (juste ? 'ok' : 'ko') }, [
        juste
          ? (serie >= 3 ? '🔥 ' + serie + ' d’affilée !' : '✓ Bonne réponse')
          : '✗ C’était : ' + q.element.nom
      ]));
      zoneFeedback.appendChild(h('button', {
        class: 'btn btn-primary', type: 'button',
        onClick: function () { index++; rendre(); }
      }, [index + 1 >= cfg.questions.length ? 'Voir le résultat →' : 'Suivant →']));
    }

    bloc.appendChild(zoneChoix);
    bloc.appendChild(zoneFeedback);
    app.appendChild(bloc);
  }

  function score() {
    return reponses.filter(function (r) { return r === 'ok'; }).length;
  }

  function rendreResultat() {
    const total = cfg.alphabet
      ? cfg.questions.filter(function (q) { return !q.vide; }).length
      : cfg.questions.length;

    const bloc = h('div', { class: 'quiz result' });
    const pct = total ? Math.round(score() / total * 100) : 0;
    const record = STORE.get('record:' + cfg.cleRecord, 0);
    const nouveau = cfg.cleRecord && pct > record;
    if (nouveau) STORE.set('record:' + cfg.cleRecord, pct);
    if (pct >= 80) confetti(28);

    const mention = pct === 100 ? '🏆 Sans faute !'
      : pct >= 80 ? '🌟 Très bien !'
      : pct >= 50 ? '👍 Bien joué' : '💪 On recommence ?';

    bloc.appendChild(h('h1', {}, ['Résultat']));
    bloc.appendChild(h('div', { class: 'badge-mention' }, [mention]));
    bloc.appendChild(h('div', { class: 'score' }, [score() + ' / ' + total]));
    bloc.appendChild(h('p', { class: 'sub' }, [
      cfg.alphabet
        ? 'Sur ' + total + ' lettres jouées (' + (26 - total) + ' sans élément)'
        : 'bonnes réponses · meilleure série 🔥 ×' + meilleureSerie
    ]));
    if (cfg.cleRecord) {
      bloc.appendChild(h('p', { class: 'record' }, [
        nouveau ? '★ Nouveau record : ' + pct + ' %' : 'Meilleur score : ' + Math.max(record, pct) + ' %'
      ]));
    }

    if (cfg.alphabet) {
      const recap = h('div', { class: 'recap' });
      cfg.questions.forEach(function (q, i) {
        const r = reponses[i] || 'skip';
        recap.appendChild(h('div', { class: r === 'ok' ? 'ok' : (r === 'ko' ? 'ko' : 'skip') }, [
          h('div', { class: 'l' }, [q.lettre]),
          h('div', { class: 'm' }, [r === 'ok' ? '✓' : (r === 'ko' ? '✗' : '–')])
        ]));
      });
      bloc.appendChild(recap);
    }

    bloc.appendChild(h('div', { class: 'actions' }, [
      h('button', { class: 'btn btn-primary', type: 'button', onClick: cfg.rejouer }, ['↻ Recommencer']),
      h('button', { class: 'btn', type: 'button', onClick: cfg.retour }, ['← Retour'])
    ]));
    app.appendChild(bloc);
  }

  rendre();
}
