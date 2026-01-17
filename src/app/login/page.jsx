import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";

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

          <form className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered w-full focus:input-primary"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:input-primary"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-primary"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            <button className="btn btn-primary w-full text-white text-lg">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          <div className="space-y-3">
            <button className="btn btn-outline w-full gap-2 hover:bg-base-200 hover:text-base-content">
              <FaGoogle className="text-red-500 text-xl" />
              Continue with Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/Register"
              className="text-primary font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
