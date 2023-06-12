import { defineMiddleware, sequence } from "astro/middleware";

const buffer = defineMiddleware(async (context, next) => {
  const response = await next();
  if (response.status !== 200) {
    return response;
  }

  try {
    const html = await response.text();

    return new Response(html, {
      status: 200,
      headers: response.headers,
    });
  } catch (e) {
    console.log("error while rendering the page", e);
    return new Response(null, { status: 500 });
  }
});

export const onRequest = sequence(buffer);
