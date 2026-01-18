"use client";
import { add2Cart } from "@/actions/server/cart";
import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const AddToCart = ({ product }) => {
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const [isLoading, setIsloading] = useState(false);
  const addToCart = async () => {
    if (session.status === "authenticated") {
      setIsloading(true);
      const result = await add2Cart({ product, inc: true });
      if (result) {
        setIsloading(false);
        toast.success(`added to cart : ${product.title}`);
      }
    } else {
      setIsloading(false);
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <>
      <button
        disabled={session.status === "loading" || isLoading === true}
        onClick={addToCart}
        className="btn btn-primary flex-1 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group-hover:-translate-y-1 text-white text-sm px-2"
      >
        <ShoppingCart size={16} className="mr-1 text-white" />
        Add to Cart{" "}
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          ""
        )}
      </button>
    </>
  );
};

export default AddToCart;
