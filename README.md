# OrthoDico — dictionnaire pour orthophoniste (PWA)

Outil de séance pour orthophoniste : bibliothèque d'images de vocabulaire par catégories, avec un **mode cartes** (nom caché / révélé) et deux **modes quizz** (par catégorie et alphabet A→Z).

Aucun framework, aucune étape de build : HTML / CSS / JavaScript vanilla.

## Fonctionnalités

- **Recherche instantanée** sur l'accueil : tapez 2 lettres, tous les mots de toutes les catégories sont filtrés (accents ignorés).
- **Carte surprise** 🎲 : un mot au hasard dans toute la bibliothèque.
- **Favoris** ★ : une étoile sur chaque carte ; la catégorie « Mes favoris » apparaît sur l'accueil et peut être quizzée (mémorisés dans le navigateur).
- **Voix** 🔊 : chaque carte lit le mot en français (synthèse vocale du système) ; le bouton *Voix auto* lit automatiquement le mot à chaque révélation.
- **Quizz mixte** : les questions alternent « nommer l'image » (4 mots) et « trouver l'image » (4 visuels).
- **Séries et records** : compteur 🔥 de bonnes réponses consécutives, confettis, mention finale et meilleur score conservé par catégorie (affiché sur sa tuile).
- **Quizz alphabet** : placement de lettres au doigt, à la souris **ou au clavier** (Entrée = valider, Retour arrière = effacer), bouton **💡 Indice** qui pose une lettre correcte.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique (app shell) |
| `style.css` | Styles, responsive mobile / tablette |
| `data.js` | Catégories, sous-catégories, éléments et mots-clés de recherche |
| `images.js` | Appels à l'API Openverse, cache localStorage, placeholder SVG |
| `app.js` | Navigation, fil d'ariane, mode cartes, recherche, favoris, voix |
| `quiz.js` | Quizz par catégorie, quizz alphabet, confettis et records |
| `manifest.json` | Métadonnées PWA |
| `service-worker.js` | Cache de l'app shell (les images restent chargées en direct) |
| `icons/` | Icônes de l'application |

## Images et licences

Trois sources de visuels, dans cet ordre de priorité :

1. **`imageOverride`** — une URL que vous fixez vous-même dans `data.js` (voir ci-dessous).
2. **Drapeaux officiels** — catégorie *Pays*, servis par [FlagCDN](https://flagcdn.com/) d'après le code ISO à 2 lettres (`iso: 'fr'` → `https://flagcdn.com/w320/fr.png`). Libre d'usage, aucune attribution requise.
3. **[API Openverse](https://api.openverse.org/)** — pour tout le reste, filtrée sur les licences autorisant l'usage commercial et la modification. Chaque image affiche discrètement, en coin, le nom de son auteur, la licence et un lien vers la page d'origine, conformément aux obligations Creative Commons.

Les couleurs, elles, sont rendues en aplat CSS et ne déclenchent aucun appel réseau.

Le premier affichage d'une catégorie déclenche une requête par élément ; le résultat est ensuite mémorisé dans le `localStorage` du navigateur (clé `ov:<mot-clé>`). Les visites suivantes sont donc immédiates. Pour vider ce cache : console du navigateur →

```js
Object.keys(localStorage).filter(k => k.startsWith('ov:')).forEach(k => localStorage.removeItem(k));
```

Si aucune image n'est trouvée, un pictogramme SVG neutre est affiché à la place.

## Corriger une image à la main

Quand Openverse renvoie une image inadaptée, ajoutez le champ `imageOverride` à l'élément concerné dans `data.js` :

```js
{ nom: 'Poireau', mot: 'leek', imageOverride: 'https://exemple.org/mon-poireau.jpg' }
```

L'application utilise alors directement cette URL, **sans passer par le cache** : la correction est visible dès le rechargement de la page, sans rien vider. Si l'URL est cassée ou inaccessible, l'application revient automatiquement au comportement Openverse habituel.

Quelques précautions : l'URL doit être en `https`, pointer directement sur le fichier image (`.jpg`, `.png`, `.webp` — pas sur une page web), et provenir d'un site qui autorise l'affichage externe. Vous pouvez aussi déposer vos propres images dans un dossier `img/` du dépôt et écrire `imageOverride: 'img/poireau.jpg'`.

## Modifier le contenu

Tout le vocabulaire est dans `data.js`. Pour ajouter un élément :

```js
{ nom: 'Nom affiché en français', mot: 'search keyword in english' }
```

`nom` est ce que voit le patient ; `mot` sert uniquement à chercher l'image sur Openverse. Les pays acceptent en plus `drapeau: '🇫🇷'` et `iso: 'fr'` (code du drapeau FlagCDN), et les couleurs utilisent `couleur: '#D6322C'` (aplat CSS, sans appel réseau). Le champ `imageOverride` est accepté sur n'importe quel élément.

Après modification de `data.js`, incrémenter `CACHE` dans `service-worker.js` (`vocab-shell-v2` → `v3`) pour forcer la mise à jour chez les utilisateurs ayant déjà installé l'application.

## Données enregistrées dans le navigateur

| Clé | Contenu |
|---|---|
| `ov:<mot-clé>` | Résultat Openverse mis en cache |
| `voc:favoris` | Liste des mots mis en favori |
| `voc:voixAuto` | État du bouton *Voix auto* |
| `voc:record:<catégorie>` | Meilleur score de quizz, en % |

Rien n'est envoyé sur un serveur : tout reste sur l'appareil.
