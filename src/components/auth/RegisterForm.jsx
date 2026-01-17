"use client";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import GoogleLogin from "./GoogleLogin";
import Link from "next/link";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  // const router = useRouter();
  const params = useSearchParams();
  const callbackurl = params.get("callbackUrl") || "/";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postUser(formData);
    if (result.acknowledged) {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        callbackUrl: callbackurl,
      });
      alert("Registration successfully");
    }
    else{
      alert('something went wrong')
    }
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="input input-bordered w-full focus:input-primary"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            name="email"
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
            name="password"
            placeholder="••••••••"
            className="input input-bordered w-full focus:input-primary"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary w-full text-white text-lg">
          Register
        </button>
      </form>

      <div className="divider">OR</div>

      <div className="space-y-3">
        <GoogleLogin />
      </div>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href={`/login?callbackUrl=${callbackurl}`}
          className="text-primary font-bold hover:underline"
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
