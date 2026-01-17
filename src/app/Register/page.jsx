import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* Left Side - Image */}
      <div className="hidden lg:block relative h-195 w-full  rounded-2xl overflow-hidden">
        <Image
          src="/assets/hero.png"
          alt="Register Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-10 left-10 text-white p-6 bg-black/30 backdrop-blur-sm rounded-xl max-w-md">
          <h2 className="text-3xl font-bold mb-2">Join the Adventure!</h2>
          <p className="text-lg">
            Create an account to unlock exclusive deals and track your orders.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 bg-base-100">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-2">Register</h1>
            <p className="text-gray-500">Create your new account</p>
          </div>

          <RegisterForm />

          <div className="divider">OR</div>

          <div className="space-y-3">
            <button className="btn btn-outline w-full gap-2 hover:bg-base-200 hover:text-base-content">
              <FaGoogle className="text-red-500 text-xl" />
              Sign up with Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
