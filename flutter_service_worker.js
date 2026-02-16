'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_2.part.js": "b1d04e5763aff972682b157d6645c38c",
"main.dart.js_1.part.js": "9d055141b1ef9f5aa0599229a0889d07",
"main.dart.js_4.part.js": "2be66fe4c530b7e8f8659168932cd6f9",
"flutter_bootstrap.js": "0956c701cac6dd5f58f5bd374b24a3a9",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "5f40e3b4d8c7daf0a2d393f79ebb938d",
"icons/Icon-maskable-192.png": "aae7848fef6907e96d3c29887e818f18",
"icons/Icon-192.png": "aae7848fef6907e96d3c29887e818f18",
"icons/Icon-maskable-512.png": "5f40e3b4d8c7daf0a2d393f79ebb938d",
"version.json": "b4267b04f6f804d6bd1400bff22f9347",
"main.dart.js_5.part.js": "1f5d7d6c5b7746015721680bec5d8633",
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
"main.dart.js_8.part.js": "761e9883161f8cf68641e392b8ac1edd",
"favicon.png": "9bc99b1d4c8fe3673c554c34bb0a10c9",
"assets/NOTICES": "f63092cb55701ef02bf29aeca4947289",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "53d06009e0cd389576346e375964cf01",
"assets/FontManifest.json": "19e8daa5e860fae13c9724a22c870292",
"assets/AssetManifest.bin.json": "bcb99ac2c01957417abb623a6962a5bc",
"assets/AssetManifest.bin": "5a4512b6ffcf85dbf7944817f616ada4",
"assets/assets/translations/pt.json": "2a4ca35c9060e7eff775d956d18591f6",
"assets/assets/translations/fr.json": "4079a5a1d1dd3670225766b398f6f633",
"assets/assets/translations/ar.json": "65f89b7ca0106dcd8685dd3fff5323c1",
"assets/assets/translations/ko.json": "42bbb2be9943ab59e8be170ea6a6fad6",
"assets/assets/translations/ja.json": "4be559556a4b3587110b0acd7e580b0c",
"assets/assets/translations/it.json": "2abbd469fa21e9a62c406ddea7c96215",
"assets/assets/translations/my.json": "ecb7bbd3f8964fc17709e6e5217c435c",
"assets/assets/translations/ru.json": "47c12a3f3d74a02a6bb8a5f7a610818b",
"assets/assets/translations/es.json": "372c81bc40e64ef6ada52621839a948b",
"assets/assets/translations/zh.json": "e2ddfb8e3459297b3d4bb6987b3289fe",
"assets/assets/translations/th.json": "0fc20ad9cfaf70544d36673a0c351390",
"assets/assets/translations/de.json": "105b7839a48d4983b7ccaf64b63e9ffc",
"assets/assets/translations/he.json": "d6b0ad065fe021230c41e4fa43ba7f84",
"assets/assets/translations/hi.json": "1f2bf435b0435049b6b99ac3da6c1c16",
"assets/assets/translations/vi.json": "af7bd1acb30295626079ddb5f35e5a6c",
"assets/assets/translations/en.json": "705049884934011fda265ece81330e2f",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/logo.png": "9cbb72f1697080500080523f81f22624",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "f6abfebd027ef4ee74772a3f427fbac0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "075a828a93e5b5a5496a35c8fd1c9c62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"manifest.json": "9ab6bdd19a5790e7745bb2742d27af6b",
"main.dart.js_11.part.js": "84de6fba36cb1c279be8949b1fd64f85",
"main.dart.js_9.part.js": "ea06c6a055f1671597e9049df6393a12",
"main.dart.js": "6036a3e40e506bfcb5ef94ec6c8bb7da",
"main.dart.js_10.part.js": "7351fef60223c0cd9105e3e04f874cb7",
"main.dart.js_6.part.js": "6b0cce1a9dae5065398babbd390b7c60",
"main.dart.js_7.part.js": "caa5d7d48af3b7b32065bac9d092a9fd",
"index.html": "9d2db4c301ef0c1c4649b624b2361531",
"/": "9d2db4c301ef0c1c4649b624b2361531",
"main.dart.js_3.part.js": "b033d8cd1831a0847459f56d50a46ccd"};
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
