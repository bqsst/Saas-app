import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = createRouteMatcher(['/sign-in', '/sign-up', '/'])

export default clerkMiddleware((auth, req) => {
  if (!publicRoutes(req)) {
    return auth().protect();
  }
})

export const config = {
  matcher: ['/((?!.*\\..*_next).*)/', '/', '/api[|trpc](.*)'],
};