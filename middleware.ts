import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protect only the /files route
const isProtectedRoute = createRouteMatcher(["/files(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect(); // Protect the /files route
  }
});

export const config = {
  matcher: ["/files(.*)", "/(api|trpc)(.*)"], // Match only the /files route and API routes
};
