import React from "react";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import GoogleLogin from "@/components/auth/GoogleLogin";

const Login = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* Left Side - Image */}
      <div className="hidden lg:block relative h-195 w-full rounded-2xl overflow-hidden">
        <Image
          src="/assets/hero.png"
          alt="Login Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />{" "}
        {/* Overlay for better text contrast if needed, or just style */}
        <div className="absolute bottom-10 left-10 text-white p-6 bg-black/30 backdrop-blur-sm rounded-xl max-w-md">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-lg">
            Ready to continue your adventure? Login to access your gear.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 bg-base-100">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-2">Login</h1>
            <p className="text-gray-500">Enter your details to sign in</p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
