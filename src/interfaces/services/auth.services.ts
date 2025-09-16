/** @format */

"use server";

import {
  LoginUseCase,
  LogoutUseCase,
} from "@/application/use-cases/auth.use-case";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function LoginService(username: string, password: string) {
  const { token } = await LoginUseCase(username, password);

  const res = NextResponse.json({ success: true });
  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60, // 1 jam
  });

  return res;
}

export async function LogoutService() {
  await LogoutUseCase();
  const cookieStore = await cookies();

  cookieStore.delete("token");
}
