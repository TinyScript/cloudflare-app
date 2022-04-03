import { handleRequest } from './handler'

addEventListener('fetch', (event) => {
  const { pathname } = new URL(event.request.url);
  console.log(pathname);
  if (pathname.startsWith("/api")) {
    return event.respondWith(new Response(JSON.stringify({ pathname }), {
      headers: { "Content-Type": "application/json" },
    }));
  }

  event.respondWith(handleRequest(event.request))
})
