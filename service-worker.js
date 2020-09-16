if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"fe30e4236659c3266839ae76c15bdcd3","url":"index.html"},{"revision":"18a5f584da943d15f7f3c2302c694762","url":"precache-manifest.18a5f584da943d15f7f3c2302c694762.js"},{"revision":"c57af33966dd830329184d6b7cc4ba62","url":"static/js/0.a77ea0de.chunk.js"},{"revision":"638282144d54facf951b749ecdcceb88","url":"static/js/1.4136b3b1.chunk.js"},{"revision":"05dc9ea2a49bf42d1dfd64bd78231faf","url":"static/js/10.b6314479.chunk.js"},{"revision":"ecaa0fbfc60728aca777db1816ddec08","url":"static/js/11.c3c187ba.chunk.js"},{"revision":"80f8d48a0a93b4e30814b412a0e46812","url":"static/js/12.f5287ec5.chunk.js"},{"revision":"a608c4bd9d64f3e7ec3a4df06830cdd3","url":"static/js/13.141255ed.chunk.js"},{"revision":"e5a77fa6abcab84080ab8a969fbaf2b8","url":"static/js/14.754e15bf.chunk.js"},{"revision":"3c4dccbd856912f22d392adaebb61a33","url":"static/js/15.a8a13573.chunk.js"},{"revision":"de6595bef1a8e39b573e43ccc45e1af8","url":"static/js/4.4083db49.chunk.js"},{"revision":"f6b37af37f642d3a937bf733aebb7e8d","url":"static/js/5.d85feae9.chunk.js"},{"revision":"42091ed93d51b9fa96097d3ca1fd8091","url":"static/js/6.dc8681fc.chunk.js"},{"revision":"2e184cb3232ac6a6ceabdab3028d5dd6","url":"static/js/7.56886d16.chunk.js"},{"revision":"4e8dd1688e039e39021dcb47d83919bc","url":"static/js/8.08fe08f9.chunk.js"},{"revision":"38653831fdc5cd2b5e605a7c7a12bc6e","url":"static/js/9.0cbd08df.chunk.js"},{"revision":"9370c622c84241a8b113fdb747dbb583","url":"static/js/main.d143efb2.chunk.js"},{"revision":"b26308e1b2eab36623e937db4f650fcf","url":"static/js/runtime-main.7f605af3.js"}]);

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