let cacheName = 'v1'
let filesToCache = [
  '/index.html',
  '/assets/sound/katiknam.mp3',
]

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache.match(evt.request).then((response) => {
        let fetchPromise = fetch(evt.request).then((networkResponse) => {
          if (evt.request.url.startsWith('http')) cache.put(evt.request, networkResponse.clone())
          return networkResponse
        })
        return response || fetchPromise
      })
    })
  )
})

self.addEventListener('activate', (evt) => {
  const cacheWhitelist = [cacheName]

  evt.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
