'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_2.part.js": "e3e782876a5c75e0718815bbd8e90bf3",
"main.dart.js_1.part.js": "d3d1313ab93755d47db0ec494af0292d",
"main.dart.js_4.part.js": "de03119e737a91014fcc0e6b6747a767",
"flutter_bootstrap.js": "ffa812f9e08eba81dee2ad3360144b9b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "5f40e3b4d8c7daf0a2d393f79ebb938d",
"icons/Icon-maskable-192.png": "aae7848fef6907e96d3c29887e818f18",
"icons/Icon-192.png": "aae7848fef6907e96d3c29887e818f18",
"icons/Icon-maskable-512.png": "5f40e3b4d8c7daf0a2d393f79ebb938d",
"version.json": "b4267b04f6f804d6bd1400bff22f9347",
"main.dart.js_5.part.js": "e36b4a28810797fcceab9b6c49c866de",
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
"main.dart.js_8.part.js": "e88670d35acbc19e10f6d0097bf294e3",
"favicon.png": "9bc99b1d4c8fe3673c554c34bb0a10c9",
"assets/NOTICES": "ff5013ca65d52ce9bcfbc04e155c6273",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "6565cc80724ff7eacaabe669736cb4dd",
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
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "ab86db9ce8c203fb020f0030682c262f",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "ccdedbcfcb910a7f52fd541dda681ce9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"manifest.json": "9ab6bdd19a5790e7745bb2742d27af6b",
"main.dart.js_9.part.js": "9ccf81e55cab7343ad3f0692318e7591",
"main.dart.js": "c030be4c394c144a76491e72f2950502",
"main.dart.js_10.part.js": "21f57bf7997681b85bf2dc3ef3de5c81",
"main.dart.js_6.part.js": "3dd32ba5d67f4227403da472917e5118",
"main.dart.js_7.part.js": "2cda206fe91c3b3bd1fe4c52ecf3f8d5",
"index.html": "9d2db4c301ef0c1c4649b624b2361531",
"/": "9d2db4c301ef0c1c4649b624b2361531",
"main.dart.js_3.part.js": "8c3faa6864e3b569f884269d68970e7d"};
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
