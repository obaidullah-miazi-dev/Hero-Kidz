"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      className={`font-medium text-lg hover:bg-primary hover:text-white ${
        path.startsWith(href) && "text-primary"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Navlinks;
