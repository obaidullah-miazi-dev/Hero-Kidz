import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/assets/logo.png"}
        width={60}
        height={40}
        alt="Logo-herokidz"
      />
      <h2 className="text-primary font-bold text-xl">Hero Kidz</h2>
    </Link>
  );
};

export default Logo;
