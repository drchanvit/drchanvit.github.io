if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"10e843608f1eca794bd912f9a0032be7","url":"index.html"},{"revision":"133c2544ad0359ac94471a8bc8fc8bd8","url":"precache-manifest.133c2544ad0359ac94471a8bc8fc8bd8.js"},{"revision":"c57af33966dd830329184d6b7cc4ba62","url":"static/js/0.a77ea0de.chunk.js"},{"revision":"638282144d54facf951b749ecdcceb88","url":"static/js/1.4136b3b1.chunk.js"},{"revision":"05dc9ea2a49bf42d1dfd64bd78231faf","url":"static/js/10.b6314479.chunk.js"},{"revision":"ecaa0fbfc60728aca777db1816ddec08","url":"static/js/11.c3c187ba.chunk.js"},{"revision":"80f8d48a0a93b4e30814b412a0e46812","url":"static/js/12.f5287ec5.chunk.js"},{"revision":"a608c4bd9d64f3e7ec3a4df06830cdd3","url":"static/js/13.141255ed.chunk.js"},{"revision":"21d91afc3f0fef10f8022bc33b805a40","url":"static/js/14.2a9f2227.chunk.js"},{"revision":"3c4dccbd856912f22d392adaebb61a33","url":"static/js/15.a8a13573.chunk.js"},{"revision":"de6595bef1a8e39b573e43ccc45e1af8","url":"static/js/4.4083db49.chunk.js"},{"revision":"bc11b3e151751364d1899d3c790a0622","url":"static/js/5.caba3d45.chunk.js"},{"revision":"42091ed93d51b9fa96097d3ca1fd8091","url":"static/js/6.dc8681fc.chunk.js"},{"revision":"2e184cb3232ac6a6ceabdab3028d5dd6","url":"static/js/7.56886d16.chunk.js"},{"revision":"d5721d445298cf7d60bb48300491e924","url":"static/js/8.469c95a5.chunk.js"},{"revision":"e536c7cd82f5cd1a3489d2f273abb71d","url":"static/js/9.dbfe1df5.chunk.js"},{"revision":"c56a91c0444819eae3b98ca0e16dae4e","url":"static/js/main.c50a655b.chunk.js"},{"revision":"caec1273e88156784b0e57e313d6311e","url":"static/js/runtime-main.c54ff0eb.js"}]);

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