import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");

  console.log("Token from cookie:", token);

  if (!token) {
    console.log("No token provided");
    return NextResponse.redirect(new URL("/signIn", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
