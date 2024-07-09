import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\.(?:js|css|svg|png|jpeg|jpg|gif|ico)$)(?!\/_next).*$)(/?|$)", "/", "/app/(.*)", "/(api|trpc)(.*)"],
};
