if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"526034c08362650081cb710017347ea2","url":"index.html"},{"revision":"8f83b52e6f2dcc311115eb26995ffbfc","url":"precache-manifest.8f83b52e6f2dcc311115eb26995ffbfc.js"},{"revision":"c57af33966dd830329184d6b7cc4ba62","url":"static/js/0.a77ea0de.chunk.js"},{"revision":"638282144d54facf951b749ecdcceb88","url":"static/js/1.4136b3b1.chunk.js"},{"revision":"05dc9ea2a49bf42d1dfd64bd78231faf","url":"static/js/10.b6314479.chunk.js"},{"revision":"ecaa0fbfc60728aca777db1816ddec08","url":"static/js/11.c3c187ba.chunk.js"},{"revision":"80f8d48a0a93b4e30814b412a0e46812","url":"static/js/12.f5287ec5.chunk.js"},{"revision":"bfceb2a0dd12c5f6b2df0a51edeaf292","url":"static/js/13.061bae4b.chunk.js"},{"revision":"898741570d2e990eb414984bd56f1aa5","url":"static/js/14.e627597d.chunk.js"},{"revision":"3c4dccbd856912f22d392adaebb61a33","url":"static/js/15.a8a13573.chunk.js"},{"revision":"de6595bef1a8e39b573e43ccc45e1af8","url":"static/js/4.4083db49.chunk.js"},{"revision":"d75fc2652099c0e2e63bf06b22ad173a","url":"static/js/5.df470b3b.chunk.js"},{"revision":"42091ed93d51b9fa96097d3ca1fd8091","url":"static/js/6.dc8681fc.chunk.js"},{"revision":"2e184cb3232ac6a6ceabdab3028d5dd6","url":"static/js/7.56886d16.chunk.js"},{"revision":"4e8dd1688e039e39021dcb47d83919bc","url":"static/js/8.08fe08f9.chunk.js"},{"revision":"7d6b8d1f64597b9b52a75ab6ff689153","url":"static/js/9.2b12a1a0.chunk.js"},{"revision":"2f1551c57540bcb0356b7cbac2d8c48a","url":"static/js/main.0acc6f56.chunk.js"},{"revision":"85a9d359955c7ea6447351ed178c11a3","url":"static/js/runtime-main.406afe9c.js"}]);

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