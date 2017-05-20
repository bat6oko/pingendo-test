self.addEventListener('install', function(event) {
  // pre cache a load of stuff:
  event.waitUntil(
    caches.open('myapp-static-v3').then(function(cache) {
      return cache.addAll([
        'custom-style.css',
        'custom-style.css',
        'custom-style.scss',
        'favicon.ico',
        'index.html',
        'logo-site.png',
        'lib/font-awesome.min.css',
        'lib/jquery-3.1.1.slim.min.js',
        'lib/tether.min.js',
        'lib/bootstrap-4.0.0-alpha.6.min.js'
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
