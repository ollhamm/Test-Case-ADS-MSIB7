import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  const tokenFromHeader = authHeader ? authHeader.split("Bearer ")[1] : null;

  const cookieToken = request.cookies.get("authToken");

  const token = tokenFromHeader || cookieToken;

  console.log("Token from header:", tokenFromHeader); // Debug log
  console.log("Token from cookie:", cookieToken); // Debug log
  console.log("Token received in middleware:", token);

  if (!token) {
    console.log("No token provided");
    return NextResponse.redirect(new URL("/signIn", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
