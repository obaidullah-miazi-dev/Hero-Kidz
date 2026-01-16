"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = ({ href, children }) => {
  const path = usePathname();
  const isActive = href === "/" ? path === "/" : path.startsWith(href);
  return (
    <Link
      href={href}
      className={`font-medium text-lg hover:bg-primary hover:text-white ${
        isActive ? "text-primary" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlinks;
