/// import d from './global.d.ts';

function createResponse(data: string) {
  return new Response(data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": 'true',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  });
}

export async function handleRequest(request: Request): Promise<Response> {
  const { pathname, search } = new URL(request.url);
  if (pathname.startsWith("/api/KV-set-data")) {
    try {
      search.replace('?', '').split('&').forEach((pair) => {
        const [key, value] = pair.split('=');
        REDIS.put(key, value);
      }, {})
      return createResponse('设置成功');
    } catch(e) {
      return createResponse('设置失败');
    }
  }
  if (pathname.startsWith("/api/KV-get-data")) {
    return createResponse(JSON.stringify(await REDIS.get('value')));
  }
  if (pathname.startsWith("/api")) {
    return createResponse(JSON.stringify({ pathname }));
  }
  
  return new Response(`Hello world! Request method: ${request.method}`)
}
