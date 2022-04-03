export async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);
  console.log(pathname);
  if (pathname.startsWith("/api")) {
    return new Response(JSON.stringify({ pathname }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  
  return new Response(`request method: ${request.method}, 1111`)
}
