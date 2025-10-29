// Service worker básico para la PWA (permite la instalación)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});