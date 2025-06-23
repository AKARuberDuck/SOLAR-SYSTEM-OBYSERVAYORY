const CACHE_NAME = "solar-system-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./favicon.ico",
  "./8k_stars_milky_way.jpg",
  "./splash-loading-screen.png",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
