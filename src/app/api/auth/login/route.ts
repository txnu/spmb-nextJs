/** @format */

import { LoginUseCase } from "@/application/use-cases/auth.use-case";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  try {
    const { token } = await LoginUseCase(username, password);

    const res = NextResponse.json({ status: true });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60,
    });

    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}
