import { handleRequest } from './handler'

addEventListener('fetch', (event) => {
  const { pathname } = new URL(event.request.url);
  console.log(pathname);
  if (pathname.startsWith("/api")) {
    return event.respondWith(new Response(JSON.stringify({ pathname }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": 'true',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      },
    }));
  }

  event.respondWith(handleRequest(event.request))
})
