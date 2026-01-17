"use client";
import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AddToCart = ({ product }) => {
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const addToCart = () => {
    if (session.status === "authenticated") {
      return alert(product._id);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <>
      <button
        onClick={addToCart}
        className="btn btn-primary flex-1 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group-hover:-translate-y-1 text-white text-sm px-2"
      >
        <ShoppingCart size={16} className="mr-1 text-white" />
        Add to Cart
      </button>
    </>
  );
};

export default AddToCart;
