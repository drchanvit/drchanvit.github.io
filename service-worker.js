if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"19618670678a5f4aec793ee4be0194a4","url":"index.html"},{"revision":"77b05cebbb2f2712d7433ad44fc35cd1","url":"precache-manifest.77b05cebbb2f2712d7433ad44fc35cd1.js"},{"revision":"7d8d84ecf5426e1e2a13d3204cc88107","url":"static/js/0.cca4b5c7.chunk.js"},{"revision":"d85d07600f7351f421723ec13f9c13da","url":"static/js/1.b9cec6f8.chunk.js"},{"revision":"230c2fec5f358d2b0d5b6f4cbe213ffe","url":"static/js/10.cc02600e.chunk.js"},{"revision":"f5d0578180745d61c12511618d3edc05","url":"static/js/11.db4d23b8.chunk.js"},{"revision":"797dfbf0c8154d378dce09aa4dfff67e","url":"static/js/12.90ebfad6.chunk.js"},{"revision":"f6f6d8b91f0612411d7ea329c7700f48","url":"static/js/13.20a5afa8.chunk.js"},{"revision":"0eb49058e6eacf2c4319ec7d6404c51e","url":"static/js/14.a39b64c0.chunk.js"},{"revision":"698d6e96d5dbe7422e428e55a0e6611d","url":"static/js/15.49aeb1b7.chunk.js"},{"revision":"cc10ac1c95acd55dc019c632243d18ec","url":"static/js/4.213e7cf9.chunk.js"},{"revision":"70c93100b11e80bdb35c8270c1df2a12","url":"static/js/5.4add21e9.chunk.js"},{"revision":"17b0877db967cf4883e3744197e13e89","url":"static/js/6.14bd7c62.chunk.js"},{"revision":"6c9a14537f5fca8a88a2b55099f25d3e","url":"static/js/7.778d9f89.chunk.js"},{"revision":"6af704538e4ed66656877a0cd5bf5272","url":"static/js/8.d35f8e81.chunk.js"},{"revision":"561730201090f89fccf0640d1f45a1e1","url":"static/js/9.c32e612b.chunk.js"},{"revision":"f71841b7f235e42a897465ec8144d6a3","url":"static/js/main.0cb08b5f.chunk.js"},{"revision":"7730c6ef0bd3a3d10e5cff18b2d74f97","url":"static/js/runtime-main.7a6e1f87.js"}]);

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