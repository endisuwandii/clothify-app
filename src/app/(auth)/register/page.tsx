"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { RegisterResponse } from "@/types/user";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const registerBody = {
      username: formData.get("username")?.toString(),
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
      fullName: formData.get("fullName")?.toString(),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(registerBody),
        },
      );

      if (!response.ok) {
        throw new Error("Gagal register, periksa kembali data lu.");
      }

      const registerResponse: RegisterResponse = await response.json();
      console.log(registerResponse);

      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat registrasi.");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Register
        </h1>

        <form onSubmit={handleRegister}>
          <div className="space-y-2 mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              required
              placeholder="Enter your username"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

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

          <div className="space-y-2 mb-4">
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              type="text"
              name="fullName"
              required
              placeholder="Your full name"
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
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?
          <Link href="/login" className="text-primary hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
