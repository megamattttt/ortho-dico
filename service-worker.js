/* service-worker.js — cache l'app shell uniquement.
 * Les images Openverse et les appels API passent toujours par le réseau. */

const CACHE = 'vocab-shell-v2';
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
        return Promise.all(noms.filter(function (n) { return n !== CACHE; })
          .map(function (n) { return caches.delete(n); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Tout ce qui est externe (API Openverse, images) : réseau direct, pas de cache.
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
