if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"22e7a9d81f58d1a33deba405018345d1","url":"index.html"},{"revision":"2b212b0ce1fdfd68ad6a4c25d4c6df2b","url":"precache-manifest.2b212b0ce1fdfd68ad6a4c25d4c6df2b.js"},{"revision":"99a3e4cd4d2742cea31b09e3f1584057","url":"static/js/0.9e809d56.chunk.js"},{"revision":"4045d4b5904eea232f9d811f8e094f30","url":"static/js/1.888b81ad.chunk.js"},{"revision":"771dc6a9be280c4d8a87767ff49b5d29","url":"static/js/10.9ed39124.chunk.js"},{"revision":"2d5a8b393b1cdc262d9a16b0cf4de4ae","url":"static/js/11.8d9398da.chunk.js"},{"revision":"0728fa136031c88b2fab522a30cf2fbb","url":"static/js/12.14f353b9.chunk.js"},{"revision":"edd39a1451916377dfb00379c86d8fdb","url":"static/js/13.8decd298.chunk.js"},{"revision":"2c022e03ef7b0a6f43e8669aba24fd10","url":"static/js/14.4622840c.chunk.js"},{"revision":"4366f63756eb7694f1485514d19498d4","url":"static/js/15.3f124d01.chunk.js"},{"revision":"b52e65f816bd8091677cf757e300f205","url":"static/js/4.cc7ad0d5.chunk.js"},{"revision":"3a0223234f30728a86a318db672baa27","url":"static/js/5.fa5cffa8.chunk.js"},{"revision":"a8c40c17798eb66fc61c9d00decde691","url":"static/js/6.10b6e2f8.chunk.js"},{"revision":"2b130b528339e2b9782c20df6c9cde76","url":"static/js/7.bf9848c1.chunk.js"},{"revision":"5806517f59e140dfc42292cd97c092ec","url":"static/js/8.a3d08b28.chunk.js"},{"revision":"68c1d9ae58e2e21fbd87c4903c026439","url":"static/js/9.886307fe.chunk.js"},{"revision":"1462f80db364fdcd8290eba1f9c0ed2c","url":"static/js/main.ab51ac81.chunk.js"},{"revision":"a3a730c10b12e3ce1eb1983d28b336fa","url":"static/js/runtime-main.7d8222f1.js"}]);

    /* custom cache rules */
     workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );
  } else {
    // console.log('Workbox could not be loaded. No Offline support');
  }
}