// sw.js - Versión mínima para hacer la app instalable
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Estrategia: siempre buscar en la red (los datos están en localStorage)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});