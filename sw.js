self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("skybound-cache").then(cache => {
        return cache.addAll([
          "/",
          "/index.html",
          "/ChatGPT_Image_15_Jul_2025_15.20.27-removebg-preview.png",
          "/ChatGPT Image 15 Jul 2025 15.43.23.png",
          "/laki-laki copy.png",
          "/perempuan copyy.png",
          "/coin.png",
          "/popup.jpg",
          "/icon-192.png",
          "/icon-512.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
  