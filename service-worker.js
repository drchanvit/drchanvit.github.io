if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"d71285f3a361ba0abec3906d4062f223","url":"index.html"},{"revision":"0051e6a2056c8c509e62217d3a2b15a0","url":"precache-manifest.0051e6a2056c8c509e62217d3a2b15a0.js"},{"revision":"f65733ce9a0ad19e1034b37bb253f456","url":"static/js/0.05f8161d.chunk.js"},{"revision":"a38ad33442ad43c770b305bcf838ff23","url":"static/js/1.63397d49.chunk.js"},{"revision":"58a15a7dc203cf63c418a5c9b105886e","url":"static/js/10.0c9c8c5d.chunk.js"},{"revision":"2f2991fc07f4f02e183f66bad7dde3af","url":"static/js/11.1d931ec7.chunk.js"},{"revision":"d86d847260d7b3dae7a3f8a95fa68e54","url":"static/js/12.ab89fb5e.chunk.js"},{"revision":"3728f8955c3a32d50b8f22c112593ebf","url":"static/js/13.88189368.chunk.js"},{"revision":"ae87097335212e7d411ef8fc46eb2993","url":"static/js/14.b87fb67d.chunk.js"},{"revision":"b45220e0c5ddf887a1c01de53162df01","url":"static/js/15.5d07b8f8.chunk.js"},{"revision":"da6d57a7666df5c7070c49bd7ee2079a","url":"static/js/4.5ae22960.chunk.js"},{"revision":"c09bd913b86ea305dfe811bc04207862","url":"static/js/5.7ac626b8.chunk.js"},{"revision":"20ddc48f889baca11c1b2da91041ecdf","url":"static/js/6.7c8b47ba.chunk.js"},{"revision":"e725f9121714dd2bf765b253cc6627d7","url":"static/js/7.7b74da18.chunk.js"},{"revision":"7dd08817a2a131e5bd6d48beeeb0f5ea","url":"static/js/8.65eb6062.chunk.js"},{"revision":"2dbc5bb94346c716e88a470e588a4086","url":"static/js/9.12562505.chunk.js"},{"revision":"57e0c4f01f31717f4cf323f180fba471","url":"static/js/main.813fba2b.chunk.js"},{"revision":"c73e9d40e0886f049fa5ca1a1093d665","url":"static/js/runtime-main.d12d594d.js"}]);

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