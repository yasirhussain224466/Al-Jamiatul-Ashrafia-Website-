const staticCacheName = 'site-static-V2'
const dynamicCache = 'site-Dynamic-V1'
const assets = [

]
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets)

        })
    )
})

this.addEventListener('activate', evt => {

    evt.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        }
        )
    )
})

this.addEventListener("fetch", event => {
    if (!navigator.onLine) {

        event.respondWith(
            caches.match(event.request).then(cachesRes => {
                return cachesRes || fetch(event.request).then(async fetchres => {
                    const cache = await caches.open(dynamicCache)
                    cache.put(event.request.url, fetchres.clone())
                    return fetchres
                })

            })
        )
    }
})
// console.log("Heloo World")