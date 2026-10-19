'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_2.part.js": "054fbceb974ab320cee2761de1cde9d2",
"main.dart.js_1.part.js": "4faaba130fc97eea22943fbdfac58b08",
"main.dart.js_4.part.js": "f0f34e217a43ea832667d64129512b9c",
"flutter_bootstrap.js": "397a335c146070cb22d3d9d7cec86d6d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "5f40e3b4d8c7daf0a2d393f79ebb938d",
"icons/Icon-maskable-192.png": "aae7848fef6907e96d3c29887e818f18",
"icons/Icon-192.png": "aae7848fef6907e96d3c29887e818f18",
"icons/Icon-maskable-512.png": "5f40e3b4d8c7daf0a2d393f79ebb938d",
"version.json": "b4267b04f6f804d6bd1400bff22f9347",
"main.dart.js_5.part.js": "65f32245cce352df711b4c58599a277a",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"main.dart.js_8.part.js": "09ee72d54ffb0bb531ec5e9f13256b8b",
"favicon.png": "9bc99b1d4c8fe3673c554c34bb0a10c9",
"assets/NOTICES": "7fba026735b7ca97606b0778e6f52fae",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "6d7a7a148b4320289f5130b381123ccd",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/AssetManifest.bin.json": "a084513faa3accdda22ca05ed69caa29",
"assets/AssetManifest.bin": "36afe06a1482a95c9e5b9513b525b5c0",
"assets/assets/translations/pt.json": "4e75dbfcb5d17d0fb639cb0a4e93cb05",
"assets/assets/translations/fr.json": "9b18ab29d94cf3cac1984e6f16ea26ec",
"assets/assets/translations/ar.json": "6187016150fd0505cafb5dadf3a04760",
"assets/assets/translations/ko.json": "901edcc64fb339cc1aa397a6b18e02f8",
"assets/assets/translations/ja.json": "682efc22028433a9993f4f977c42e71f",
"assets/assets/translations/it.json": "c0ff7d696e01363994f063a297b0f9c7",
"assets/assets/translations/my.json": "bd05f1be8023b2ebdd28082a1b1c935b",
"assets/assets/translations/ru.json": "7c738a3b56eea4e61f224dee6a06dfe6",
"assets/assets/translations/es.json": "8422813ac08c570cf9eb18ed1583fcab",
"assets/assets/translations/zh.json": "b33972f83abeb7932e0c8886c20f62ef",
"assets/assets/translations/th.json": "81d532eca2842fce9b42f8a7b8eb281b",
"assets/assets/translations/de.json": "888074bb697a1b0f675cbc8956ae69c4",
"assets/assets/translations/he.json": "bb544429cd8e139e94db322947be6703",
"assets/assets/translations/hi.json": "8dc716c4dc0037aa32ca6de07f6b62da",
"assets/assets/translations/vi.json": "b50f063ee91da47e0a10ad2e94831826",
"assets/assets/translations/en.json": "3d4e875d0088bbadc17cd3af43701feb",
"assets/assets/logo.png": "9cbb72f1697080500080523f81f22624",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "d40c67ce9f52d4bf087e61453006393c",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "91247cd78d4f285c8f23b8b4ae57d58f",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "b4152eb99a791dffb918a54c06d87ab7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"manifest.json": "9ab6bdd19a5790e7745bb2742d27af6b",
"main.dart.js_9.part.js": "85ef67431a155b73ed1a3f9ee8a79b79",
"main.dart.js": "643fa3efe6999f9b83ab788d52d22975",
"main.dart.js_6.part.js": "01ddf6ae560f29352a31216f2637dfb7",
"main.dart.js_7.part.js": "9a4e1f6a3692ab8687429b4a5ce50dec",
"index.html": "9d2db4c301ef0c1c4649b624b2361531",
"/": "9d2db4c301ef0c1c4649b624b2361531",
"main.dart.js_3.part.js": "dd62eef28ebb3169b253a52019b3b02f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
