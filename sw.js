self.addEventListener('install', function(event) {
  // pre cache a load of stuff:
  event.waitUntil(
    caches.open('myapp-static-v1').then(function(cache) {
      return cache.addAll([
        'custom-style.css',
        'custom-style.css',
        'custom-style.scss',
        'favicon.ico',
        'index.html',
        'logo-site.png'
      ]);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});
