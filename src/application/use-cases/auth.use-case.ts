/** @format */

import { AuthRepository } from "@/infrastructure/dummy-data/repositories/auth.repository";

export async function LoginUseCase(username: string, password: string) {
  const repo = new AuthRepository();

  return await repo.login(username, password);
}

export async function LogoutUseCase() {
  const repo = new AuthRepository();

  return await repo.logout();
}
