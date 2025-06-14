import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    // ✅ Correct: use auth.protect() — no parentheses!
    auth.protect();
  }
});

export const config = {
  matcher: [
    // Protect everything except static files and Next internals
    '/((?!_next|.*\\..*).*)',
  ],
};