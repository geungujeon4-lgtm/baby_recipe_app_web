'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "810b4a68f29b0616a6b3953800e14761",
".git/config": "35183770469fddcbb8b3ce4d2d6ccdfa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e6729f8b835a90d79effbae4a0cd74d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6fe964194e2829446602d8453b23a7e2",
".git/logs/refs/heads/main": "6fe964194e2829446602d8453b23a7e2",
".git/logs/refs/remotes/origin/main": "0493f95baec7f33b4c3e7dce0b1159fd",
".git/objects/01/98a1727ecbdd2c2a7d940993eaa5b6b5800de2": "1fc246fc6418a2c7acd6446dcd294bcb",
".git/objects/01/d0ab80a656f5267eea8fcbd035f05df753da92": "8a1dbd784fc2ef9e2ecc0f515cda79bf",
".git/objects/03/272bc83c967ac3d6ad4088bd8d942dac24b083": "d38c9232d8b2ccf2c3093be97e506e94",
".git/objects/05/76d5ad4132a198706f1c09d5a620e764327a59": "17cb3f3fdb53d0dd8605f12093094828",
".git/objects/0e/0a45dd207dff08130b2e77767e57dd99db0b1e": "decd32ad141f647b2c4538d5e05f71e3",
".git/objects/14/4312773d4b278b6a02763b544daa93c4287c18": "8156592875d5834e3f83a96fac7386d9",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/2f/481ba383b0f9f8baef5bd117d09919eeca055b": "34268e40b441db20005e3233ad9c83bf",
".git/objects/2f/d5d8da38cee72186b169e1b14eda631b5c9fca": "f52e01674ddca10e78af8f2d2431a42e",
".git/objects/33/fd81e8316aac288193dc2526175059001e638f": "69c754c6f3df336401783bd4210c206a",
".git/objects/34/05e80904f463936a48d24c0a3d4dca430362dd": "4008537bb6fb88ee6b2822d55cb4d1a8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/d806406acd429b2b08229cb960b42463f2cb26": "3d3d82218a0f52e5ca4e24f625aedaae",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/86e75c4edb5feb31d4a25e29061ac698b4f791": "a1523094939c989b38438bb378dee012",
".git/objects/5d/0e35e778376a43a274c52181e33f8b2923c1d7": "b30cc5ba1183996da995ae0eaf9e5b4c",
".git/objects/5e/e3829e88b792d85f65e76451f4541d358906b9": "5ca29e891bc2334a7311d882f3dff3a7",
".git/objects/61/f0cd4a09f3eaa6d078003caca89fb234793f5c": "92185750ce81f0913553ecfcb396cc50",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/1a2f80fde17d6cb9cf57e9a4b2c7de8b173575": "1e63f8ed3791d70eb0c756797dbe0f35",
".git/objects/90/6ad36c192262c44692a8079fc0c9c19d7ec993": "22af104473d1c2f00fc57a70a6aeafba",
".git/objects/99/c0196c032e175645a41f2e910d17f0cb91744a": "8f016904c540b4ab7e2c9bf435bbf34f",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a4/99c1dda48bd997d636679c8d5379d022186e7b": "f86aaff118cf32b0c2b1e9ed8b9b69b3",
".git/objects/ab/6282993b89275b6270ba9f2b0d7d0ff92f487e": "3d3b477b5aad2f4520b9c460a8238a14",
".git/objects/ad/09fef52b65ee2d84cb1b2f7be8ce668338a6a1": "7a165ea3fc566cf046ca4d3f80203562",
".git/objects/ad/e1ffd8a29f76770380ba0112416c2a7b9eb823": "9f082c1c16f4bf789d0c75a0cf1008f5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/dfdeedcc2e77e1320313caa30485455841f00f": "3fdd58238016e37232070b86312b9ae1",
".git/objects/c1/68984e6d7d5dbc0a023331200940872a201e75": "0e4baef583c6930a46ff790369f944ae",
".git/objects/c7/cb0417a182a76605740a8a0b7bbf5d799fc1f1": "c329e95d2b383c3fff83388337ba457c",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/0fa13582582983bbcb234339e5ccd99a203450": "a45b1e88b13cb3093a961974b809f9dd",
".git/objects/de/737ed88b5ea0ab76f4c26ccedf85fedbadee34": "a8673c0554a696658044dd42c0efd34e",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/7a91c7813d5d9f6fbd8ef24977420fbbe7ff98": "b5bbb5fa0180c254b5d5054f350bbb07",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e6bcb7ed536dcb697da95b1841deece6248a6d": "ac25e8afb4a12347b4d0eb08926463d2",
".git/objects/ef/7ff85c16b2821f86a422cbaba7df54840e8858": "04bc37e69f85e142124250df88727d2d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/0653aa6595f9dd396daa0d226da88c5402e66b": "f36513a94df9cdc39e73417241b22036",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/bc5f0367775ce05453f767cbf3ca940fbeee7b": "034b3a8fb0d220d5eacd5426e7cf7686",
".git/objects/fb/73c5c89ff51f7782ce2a3f27d7b4b48bd4d393": "d36548dd91fb9d14217da1a8df645bda",
".git/refs/heads/main": "3e145ca712507ff613c84df028443a67",
".git/refs/remotes/origin/main": "3e145ca712507ff613c84df028443a67",
"assets/AssetManifest.bin": "07d5cd6ab3f30296e47167f93c8c3ac3",
"assets/AssetManifest.bin.json": "9a913970039d9766d3ba9fb5cdc3c353",
"assets/AssetManifest.json": "df2e36b6f832901af8942f65f28c2294",
"assets/assets/icon/app_icon.png": "5e0cbc3cff5dae1c6a9fd6d8d75ec581",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2beac93ee965203f7a9685931c481704",
"assets/NOTICES": "c47256c367ac8d4ab72211ebc4d20dff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "176eb5634ff84c172a018a97ba54bf1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7637e8e1d50954183a788baab187e2d4",
"/": "7637e8e1d50954183a788baab187e2d4",
"main.dart.js": "960246b483d11b7da60e5e7e90f5857b",
"manifest.json": "5b911145927657cec98cdef019d9de7b",
"version.json": "162e16c878498cc697455bbb7ff85e8e"};
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
