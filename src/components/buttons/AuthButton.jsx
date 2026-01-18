"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const AuthButton = () => {
  const session = useSession();
  const handleLogOut = () => {
    signOut();
    toast.success(`Loged Out successfully`);
  };
  return (
    <>
      {session.status === "authenticated" ? (
        <>
          <button
            onClick={() => handleLogOut()}
            className="btn btn-primary text-white"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"}>
            <button className="btn btn-primary btn-outline hover:text-white">
              Login
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default AuthButton;
