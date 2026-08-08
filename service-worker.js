/* service-worker.js
 * - App shell (HTML/CSS/JS) : cache d'abord, réseau en secours (comme avant).
 * - Images distantes (Openverse, FlagCDN, etc.) : servies depuis le cache
 *   immédiatement si déjà vues, avec mise à jour discrète en arrière-plan.
 *   C'est ce qui évite un rechargement complet à chaque affichage sur une
 *   connexion lente ou instable. */

const CACHE = 'vocab-shell-v3';
const IMG_CACHE = 'vocab-images-v1';
const SHELL = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './images.js',
  './quiz.js',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (noms) {
        return Promise.all(noms
          .filter(function (n) { return n !== CACHE && n !== IMG_CACHE; })
          .map(function (n) { return caches.delete(n); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Toute image (même origine ou distante) passe par le cache d'images,
  // en stale-while-revalidate : on sert le cache tout de suite s'il existe,
  // et on va chercher une version fraîche en tâche de fond pour la prochaine fois.
  if (req.destination === 'image') {
    e.respondWith(gererImage(req));
    return;
  }

  const url = new URL(req.url);
  // Le reste (JSON de l'API Openverse, etc.) : si externe, réseau direct.
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req)
        .then(function (res) {
          if (res && res.ok && res.type === 'basic') {
            const copie = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copie); });
          }
          return res;
        })
        .catch(function () { return caches.match('./index.html'); });
    })
  );
});

function gererImage(req) {
  return caches.open(IMG_CACHE).then(function (cache) {
    return cache.match(req).then(function (dansLeCache) {
      const depuisReseau = fetch(req)
        .then(function (res) {
          // Les images distantes (autre origine) donnent une réponse "opaque" :
          // on ne peut pas lire son statut, mais elle s'affiche très bien dans
          // une <img>, donc on la met quand même en cache.
          if (res && (res.ok || res.type === 'opaque')) {
            cache.put(req, res.clone());
          }
          return res;
        })
        .catch(function () { return null; });

      // On répond avec le cache s'il existe (affichage instantané), sinon on
      // attend le réseau. La mise à jour réseau continue de toute façon en
      // arrière-plan pour rafraîchir le cache silencieusement.
      return dansLeCache || depuisReseau;
    });
  });
}
