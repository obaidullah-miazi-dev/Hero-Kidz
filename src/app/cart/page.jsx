import { getCartData } from "@/actions/server/cart";
import CartItemCard from "@/components/cards/CartItemCard";
import Link from "next/link";
import React from "react";
import { ArrowLeft, ShoppingBag, CreditCard } from "lucide-react";

const CartPage = async () => {
  const cartItems = await getCartData();

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 60;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <ShoppingBag className="text-primary" />
          Shopping Cart
          <span className="text-lg font-normal text-base-content/60 ml-2">
            ({cartItems.length} items)
          </span>
        </h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="flex-1">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItemCard key={item._id.toString()} item={item} />
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/products"
                  className="btn btn-ghost gap-2 hover:text-white border-primary pl-0 w-full hover:bg-primary"
                >
                  <ArrowLeft size={18} />
                  Back To Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-96 h-fit">
              <div className="card bg-base-100 shadow-xl border border-base-200 sticky top-24">
                <div className="card-body">
                  <h2 className="card-title text-xl mb-4">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-base-content/70">
                      <span>Subtotal</span>
                      <span className="font-medium text-base-content">৳{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-base-content/70">
                      <span>Shipping</span>
                      <span className="font-medium text-base-content">৳{shipping}</span>
                    </div>

                    <div className="divider my-2"></div>

                    <div className="flex justify-between text-lg font-bold text-primary">
                      <span>Total</span>
                      <span>৳{total}</span>
                    </div>
                  </div>

                  <div className="card-actions mt-6">
                    <button className="btn btn-primary w-full text-white shadow-lg shadow-primary/20 hover:shadow-primary/40">
                      <CreditCard size={18} />
                      Proceed to Checkout
                    </button>
                  </div>

                  <p className="text-xs text-center text-base-content/50 mt-4">
                    Secure Checkout - 100% Money Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={48} className="text-base-content/30" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-base-content/60 mb-8">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <Link href="/products" className="btn btn-primary text-white">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
