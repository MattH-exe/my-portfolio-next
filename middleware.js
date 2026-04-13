import { NextResponse } from "next/server";

const PROTECTED_ROUTES = [
  "/work/puckboard/logging",
  "/work/puckboard/mydocs",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (!isProtected) return NextResponse.next();

  const authCookie = request.cookies.get("portfolio_auth");
  if (authCookie?.value === "authenticated") {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/work/puckboard/logging/:path*",
    "/work/puckboard/mydocs/:path*",
  ],
};
