"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleLogin from "./GoogleLogin";
import Link from "next/link";
import { toast } from "sonner";

const LoginForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callbackurl = params.get("callbackUrl") || "/";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    console.log(result);
    if (!result.ok) {
      toast.error("Invalid Credentials");
    } else {
      toast.success("Logged In successfully");
      router.push(callbackurl);
    }
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="input input-bordered w-full focus:input-primary"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-primary">
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
        <GoogleLogin />
      </div>

      <p className="text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link
          href={`/Register?callbackUrl=${callbackurl}`}
          className="text-primary font-bold hover:underline"
        >
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
