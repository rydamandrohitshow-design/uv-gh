importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@2/dist/uv.sw.js');
const uv = new UltravioletServiceWorker();
self.addEventListener('fetch', event => event.respondWith(uv.fetch(event.request)));
