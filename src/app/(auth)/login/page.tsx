"use client"; // Penanda wajib di Next.js untuk halaman yang punya interaksi

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LoginResponse } from "@/types/user";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginBody = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    console.log(loginBody);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(loginBody),
        },
      );

      if (!response.ok) {
        throw new Error("Gagal login, cek kredensial lu");
      }

      const loginResponse: LoginResponse = await response.json();

      console.log(loginResponse);

      // Asumsi token ada di dalam object response
      //   Cookies.set("token", loginResponse.token);

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-zinc-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h1>
        <h3 className="text-sm flex justify-center space-y-2 mb-3">
          Please enter your e-mail and password:
        </h3>

        <form onSubmit={handleLogin}>
          <div className="space-y-2 mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2 mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Enter a strong password"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          <Button type="submit" className="w-full">
            Log In
          </Button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
