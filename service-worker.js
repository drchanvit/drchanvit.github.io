if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"1349a7a2458d8c27050f00fe708bd260","url":"index.html"},{"revision":"00bdd65fc8215f44d18ff57c916cde8e","url":"precache-manifest.00bdd65fc8215f44d18ff57c916cde8e.js"},{"revision":"f65733ce9a0ad19e1034b37bb253f456","url":"static/js/0.05f8161d.chunk.js"},{"revision":"a38ad33442ad43c770b305bcf838ff23","url":"static/js/1.63397d49.chunk.js"},{"revision":"58a15a7dc203cf63c418a5c9b105886e","url":"static/js/10.0c9c8c5d.chunk.js"},{"revision":"2f2991fc07f4f02e183f66bad7dde3af","url":"static/js/11.1d931ec7.chunk.js"},{"revision":"d86d847260d7b3dae7a3f8a95fa68e54","url":"static/js/12.ab89fb5e.chunk.js"},{"revision":"3728f8955c3a32d50b8f22c112593ebf","url":"static/js/13.88189368.chunk.js"},{"revision":"0b21a4b6c14af6f2f934fedfd0cee970","url":"static/js/14.375ea89d.chunk.js"},{"revision":"b45220e0c5ddf887a1c01de53162df01","url":"static/js/15.5d07b8f8.chunk.js"},{"revision":"da6d57a7666df5c7070c49bd7ee2079a","url":"static/js/4.5ae22960.chunk.js"},{"revision":"a97290f5df5fd94436abebebbdbc1e96","url":"static/js/5.7955f50f.chunk.js"},{"revision":"20ddc48f889baca11c1b2da91041ecdf","url":"static/js/6.7c8b47ba.chunk.js"},{"revision":"e725f9121714dd2bf765b253cc6627d7","url":"static/js/7.7b74da18.chunk.js"},{"revision":"7dd08817a2a131e5bd6d48beeeb0f5ea","url":"static/js/8.65eb6062.chunk.js"},{"revision":"197a4a35866ed994ee13067c64404a11","url":"static/js/9.3a7d746e.chunk.js"},{"revision":"915e0d22aa52ebc90595ce17dbf166a6","url":"static/js/main.e2a11028.chunk.js"},{"revision":"5ed0c7353f16b180434ba1e3c5e7e08a","url":"static/js/runtime-main.cebc728c.js"}]);

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