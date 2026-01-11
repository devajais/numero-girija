const CACHE_NAME = 'numero-girija-v1';
const urlsToCache = [
  '/numero-girija/',
  '/numero-girija/index.html',
  '/numero-girija/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
