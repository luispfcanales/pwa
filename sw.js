const CACHE_NAME = 'v1cachename',
urlsToCache = [
    './',
    './css/style.css',
    './img/imagen.webp',
    './js/app.js'
]

self.addEventListener("install",event => {
    const cachePromise = caches.open("CACHE_NAME")
        .then(cache => {
            return cache.addAll(urlsToCache)
                .then(()=>self.skipWaiting())
        })
    event.waitUntil(cachePromise)
});

self.addEventListener("active",event => {
    const cacheWhiteList = [CACHE_NAME]
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhiteList.indexOf(cacheName) === -1){
                        return caches.delete(cacheName)
                    }
                })
            )
        })
        .then(()=> self.clients.claim())
    )
});

self.addEventListener("fetch",event => {
    const cacheFetch = caches.match(event.request)
        .then(res => {
            if(res){
                return res
            }
            return fetch(event.request)
        })
    event.respondWith(cacheFetch)
});

/*
self.addEventListener("install",e => {
    const cachePromise = caches.open("storage-v1")
        .then(cache => {
            return cache.addAll([
                "index.html",
                "img/imagen.webp",
                "css/style.css"
            ])
        })
    
    const cacheInmutable = caches.open("inmutable")
        .then(cache => cache.add("https://bootstrap.com"))

    e.waitUntil(Promise.all([cachePromise,cacheInmutable]))
})
*/