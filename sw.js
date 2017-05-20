self.addEventListener('install', function(event) {
  // pre cache a load of stuff:
  event.waitUntil(
    caches.open('myapp-static-v2').then(function(cache) {
      return cache.addAll([
        'custom-style.css',
        'custom-style.css',
        'custom-style.scss',
        'favicon.ico',
        'index.html',
        'logo-site.png',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://code.jquery.com/jquery-3.1.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js',
        'https://pingendo.com/assets/bootstrap/bootstrap-4.0.0-alpha.6.min.js'
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
