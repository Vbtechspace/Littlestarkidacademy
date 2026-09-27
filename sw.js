// Minimal service worker. Its only job is to exist and answer fetch events —
// Android Chrome requires an active service worker before it will offer a
// real "Install app" (not just a shortcut). It doesn't cache anything, so
// the app always loads fresh from the network exactly as before.
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
