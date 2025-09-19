/** @format */
"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isView, setIsView] = useState(false);

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Username atau password salah");
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Kesalahan saat login: ", error);
      throw new Error("Kesalahan pada server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {});
  const tooglePasswordVisibility = () => {
    setIsView(!isView);
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-100 px-6'>
      <div className='w-full max-w-sm bg-white shadow-lg rounded-xl p-6'>
        <div className='flex items-center justify-center py-4 my-2'>
          <Image
            src='/images/image1.png'
            alt='Logo'
            width={150}
            height={50}></Image>
        </div>
        {error ? <p className='text-red-500 mb-4 text-center'>{error}</p> : ""}
        <form
          className='flex flex-col space-y-4'
          onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
          <div className='relative'>
            <input
              type={isView ? "text" : "password"}
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <button
              className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600'
              type='button'
              onClick={tooglePasswordVisibility}>
              {isView ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition '
            disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className='text-center text-sm text-gray-500 mt-4'>
          Belum punya akun?{" "}
          <a
            href='/register'
            className='text-blue-500 hover:underline'>
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}
