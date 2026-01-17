'use client'
import React, { useState } from "react";

const LoginForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
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
    </>
  );
};

export default LoginForm;
