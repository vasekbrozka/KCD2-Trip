const C = 'kcd2-v19';
const ASSETS = ['./', './index.html', './manifest.json', './icon-180.png', './icon-512.png',
  './img/hero.jpg', './img/trosky.jpg', './img/troskovice.jpg', './img/vezak.jpg', './img/podseminsky.jpg',
  './img/nebakov.jpg', './img/hrubaskala.jpg', './img/valdstejn.jpg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(C).then(c => c.put(e.request, clone));
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
