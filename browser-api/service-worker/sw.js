const dontCache = [
  'style.css', // not caching css
];

// cache name
const cacheName = 'v2';

self.addEventListener('install', (event) => {
  console.log("SW installed");
})

self.addEventListener('activate', (e) => {
  console.log("SW Activated");
  // remove unwanted cache if we have a new cache version
  e.waitUntil(
    caches.keys().then(cacheNames =>{
      return Promise.all(cacheNames.map(cache=> {
        if (cache !== cacheName) {
          console.log("SW: Clear old cache");
          return caches.delete(cache);
        }
      }))
    })
  )
})

self.addEventListener('fetch', (e) => {
  console.log("fetch ", e.request.url);
  // caching files as they come
  e.respondWith(
    fetch(e.request).then(res =>{
      const resClone = res.clone();
      const included = dontCache.find(item => e.request.url.includes(item));
      if (!included) {
        caches.open(cacheName).then(cache=>{
          cache.put(e.request, resClone);
        })
      }
      return res;
    }).catch(() => caches.match(e.request).then(res => res))
  )
})


