if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"96cca2a50d858c33bd2db3c491db4a9f","url":"index.html"},{"revision":"402540f06082ccdad464ad9853e4e798","url":"precache-manifest.402540f06082ccdad464ad9853e4e798.js"},{"revision":"99a3e4cd4d2742cea31b09e3f1584057","url":"static/js/0.9e809d56.chunk.js"},{"revision":"e0f4871fc724fc2aaee19afa8d3d414e","url":"static/js/1.abd6d650.chunk.js"},{"revision":"f51a8011c8b99724d3eb0805f40096ee","url":"static/js/10.79bef091.chunk.js"},{"revision":"a2b3ba65cdb85ccd0be856f1d52eab9c","url":"static/js/11.c6832a43.chunk.js"},{"revision":"173f37116f45dc5127625dcc7180b320","url":"static/js/12.0b0bd473.chunk.js"},{"revision":"92d4b87ce0fa4c347102525fae916acc","url":"static/js/13.a01f2fcc.chunk.js"},{"revision":"65e5c84f45a90c88c418bdc50adfdb6f","url":"static/js/14.759e0a23.chunk.js"},{"revision":"fbb8216c5942f192aa73f856c2c6f343","url":"static/js/15.eb889155.chunk.js"},{"revision":"b52e65f816bd8091677cf757e300f205","url":"static/js/4.cc7ad0d5.chunk.js"},{"revision":"b2d92f76a4bf02bd83d8c4be4da3af4c","url":"static/js/5.7fba83f1.chunk.js"},{"revision":"9f29511dbdd579db73069d33609589db","url":"static/js/6.d693a94c.chunk.js"},{"revision":"44fad70de9b26f1dcf9df68f316ebec8","url":"static/js/7.ea7bf2bc.chunk.js"},{"revision":"bbdf695e24fb6cf1d99276312f1182d0","url":"static/js/8.3e9322a3.chunk.js"},{"revision":"6c2cc3b5865466d4b08a7829c7dac817","url":"static/js/9.8ade59b6.chunk.js"},{"revision":"786d66ef3fea3615ffcb977cb81b98bf","url":"static/js/main.fa85c0b1.chunk.js"},{"revision":"74229ecee7cdc42015e424c98d6c69e7","url":"static/js/runtime-main.19959719.js"}]);

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