const nombreCache = 'apv-v8';

const archivos = [
  '/',
  '/index.html',
  '/error.html',
  '/css/bootstrap.css',
  '/css/styles.css',
  '/js/app.js',
  '/js/apv.js',
];

self.addEventListener('install', (e) => {
  console.log('SW instalado');

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log('cacheando...');
      cache.addAll(archivos);
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log('SW activado');

  e.waitUntil(
    caches.keys()
      .then(keys => {
        return Promise.all(
          keys.filter(key => key !== nombreCache)
            .map(key => caches.delete(key))
        )
      })
  )
  
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) =>
        cacheResponse ? cacheResponse : caches.match('error.html')
      )
  );
});
