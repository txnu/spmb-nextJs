/** @format */

export class AuthRepository {
  async login(username: string, password: string): Promise<{ token: string }> {
    if (username === "admin" && password === "admin123") {
      return { token: "dummy-token-123" };
    }

    throw new Error("Username atau password salah");
  }

  async logout(): Promise<void> {
    return;
  }
}
