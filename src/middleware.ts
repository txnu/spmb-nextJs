/** @format */

import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("Middleware called on:", req.nextUrl.pathname);

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/spmb/:path*", "/siswa/:path*"],
};
