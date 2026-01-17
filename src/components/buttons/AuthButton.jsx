"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const session = useSession();
  // console.log(session);
  return (
    <>
      {session.status === "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn btn-primary text-white">
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
