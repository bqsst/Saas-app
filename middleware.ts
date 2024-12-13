import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRoutes = ['/sign-in', '/sign-up', '/'];

export default clerkMiddleware((auth, req) => {
  if (publicRoutes.some(route => req.nextUrl.pathname.includes(route))) {
    return new Response(null);
  }
  return new Response("Auth required", { status: 401 });
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)/', '/', '/api(.*)'],
};
