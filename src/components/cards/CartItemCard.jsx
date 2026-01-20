"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { deleteCartItem, updateCartQuantity } from "@/actions/server/cart";
import { toast } from "sonner";

const CartItemCard = ({ item }) => {
  const { title, image, price, quantity, productId, _id } = item;
  const [isPending, startTransition] = React.useTransition();

  const handleIncrease = () => {
    startTransition(async () => {
      const res = await updateCartQuantity({ productId, type: "plus" });
      if (res.success) {
        toast.success("Increased Quantity");
      }
    });
  };

  const handleDecrease = () => {
    if (quantity <= 1) return;
    startTransition(async () => {
      const res = await updateCartQuantity({ productId, type: "minus" });
      if (res.success) {
        toast.success("Decreased Quantity");
      }
    });
  };

  const handleDelete = async (id) => {
    const result = await deleteCartItem(id);
    if (result) {
      toast.success("Deleted Cart Item");
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all duration-300 p-4 mb-4 group">
      <figure className="relative h-24 w-24 min-w-24 rounded-lg overflow-hidden bg-base-200">
        <Link href={`/products/${productId}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </figure>
      <div className="card-body p-0 pl-4 flex-row justify-between items-center w-full gap-4">
        <div className="flex-1 min-w-0">
          <Link
            href={`/products/${productId}`}
            className="text-lg font-bold text-base-content hover:text-primary transition-colors line-clamp-1"
            title={title}
          >
            {title}
          </Link>
          <div className="text-primary font-bold mt-1">৳{price}</div>
        </div>

        <div className="flex items-center gap-3">
          {/* Quantity Controls */}
          <div className="join border border-base-300 rounded-lg">
            <button
              onClick={handleDecrease}
              disabled={quantity <= 1 || isPending}
              className="join-item btn btn-sm btn-ghost px-2 hover:bg-base-200 disabled:bg-base-100 disabled:text-base-content/30"
            >
              <Minus size={14} />
            </button>
            <span className="join-item btn btn-sm btn-ghost px-3 pointer-events-none bg-base-100 font-medium min-w-[40px]">
              {isPending ? <span className="loading loading-spinner loading-xs"></span> : quantity}
            </span>
            <button
              onClick={handleIncrease}
              disabled={isPending}
              className="join-item btn btn-sm btn-ghost px-2 hover:bg-base-200 disabled:bg-base-100 disabled:text-base-content/30"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-sm text-error hover:bg-error/10 btn-square rounded-lg transition-colors"
            title="Remove from cart"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
