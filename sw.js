const CACHE_NAME = 'numero-girija-v2';
const OFFLINE_CACHE = 'numero-girija-offline-v2';

// Core files to cache during installation
const urlsToCache = [
  '/numero-girija/',
  '/numero-girija/index.html',
  '/numero-girija/icon.svg',
  '/numero-girija/manifest.json'
];

// Install event - cache core resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching core resources');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== OFFLINE_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - Network First, fallback to Cache strategy
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    // Try network first
    fetch(event.request)
      .then((response) => {
        // If we get a valid response, cache it
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(OFFLINE_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // If page is not in cache, return offline page
          if (event.request.mode === 'navigate') {
            return caches.match('/numero-girija/index.html');
          }
        });
      })
  );
});
