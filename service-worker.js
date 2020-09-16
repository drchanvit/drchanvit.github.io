if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"c878a8cd551fd1f82513a735b65d8ab7","url":"index.html"},{"revision":"8db19dad2dd6a350ea9b7d05518315b2","url":"precache-manifest.8db19dad2dd6a350ea9b7d05518315b2.js"},{"revision":"c57af33966dd830329184d6b7cc4ba62","url":"static/js/0.a77ea0de.chunk.js"},{"revision":"638282144d54facf951b749ecdcceb88","url":"static/js/1.4136b3b1.chunk.js"},{"revision":"05dc9ea2a49bf42d1dfd64bd78231faf","url":"static/js/10.b6314479.chunk.js"},{"revision":"ecaa0fbfc60728aca777db1816ddec08","url":"static/js/11.c3c187ba.chunk.js"},{"revision":"80f8d48a0a93b4e30814b412a0e46812","url":"static/js/12.f5287ec5.chunk.js"},{"revision":"a608c4bd9d64f3e7ec3a4df06830cdd3","url":"static/js/13.141255ed.chunk.js"},{"revision":"e38504b6dab72c1ab21725254113f647","url":"static/js/14.dc0330b6.chunk.js"},{"revision":"3c4dccbd856912f22d392adaebb61a33","url":"static/js/15.a8a13573.chunk.js"},{"revision":"de6595bef1a8e39b573e43ccc45e1af8","url":"static/js/4.4083db49.chunk.js"},{"revision":"a7f092a6abe8327698185d62f360abdd","url":"static/js/5.2d1286fd.chunk.js"},{"revision":"42091ed93d51b9fa96097d3ca1fd8091","url":"static/js/6.dc8681fc.chunk.js"},{"revision":"2e184cb3232ac6a6ceabdab3028d5dd6","url":"static/js/7.56886d16.chunk.js"},{"revision":"171ce37b167263d6313f7ec5e7740c70","url":"static/js/8.a4f04805.chunk.js"},{"revision":"30f654eb6db3bf1978fab4d0af26f54b","url":"static/js/9.8bbd9f8c.chunk.js"},{"revision":"3f93fe3f3015ebe22f1c18dd6b8c33e0","url":"static/js/main.ad4d4c49.chunk.js"},{"revision":"468e0aec034238edd88cc4f733ed0d87","url":"static/js/runtime-main.4fa9f86c.js"}]);

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