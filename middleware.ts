import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the routes that should be protected
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/files(.*)", // Add routes you want to protect
]);

export default clerkMiddleware((auth, req) => {
  // Protect the route if it matches the defined criteria
  if (isProtectedRoute(req)) {
    auth().protect(); // Automatically redirect to the sign-in page if not authenticated
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
