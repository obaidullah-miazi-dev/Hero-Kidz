"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  const params = useSearchParams();
  const handleLogin = async () => {
    const result = await signIn("google", {
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };
  return (
    <>
      <button
        onClick={handleLogin}
        className="btn btn-outline w-full gap-2 hover:bg-base-200 hover:text-base-content"
      >
        <FaGoogle className="text-red-500 text-xl" />
        Continue with Google
      </button>
    </>
  );
};

export default GoogleLogin;
