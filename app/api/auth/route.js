import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { password, next } = body;
  const correctPassword = process.env.PORTFOLIO_PASSWORD || "preview2026";

  if (password === correctPassword) {
    const redirectUrl = next || "/";
    const response = NextResponse.json({ success: true, redirect: redirectUrl });
    response.cookies.set("portfolio_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
}
