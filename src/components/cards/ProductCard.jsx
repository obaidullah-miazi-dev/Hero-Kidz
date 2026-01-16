import React from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, reviews } = product;

  // Calculate discounted price
  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 group border border-base-200 overflow-hidden">
      <figure className="relative h-64 w-full bg-base-200 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 badge badge-secondary font-bold shadow-md">
            -{discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-base-100/80 hover:bg-base-100 text-base-content/70 hover:text-red-500 transition-colors shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
          <Heart size={18} />
        </button>
      </figure>

      <div className="card-body p-5 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h2
            className="card-title text-lg font-bold leading-snug mb-1 line-clamp-2 min-h-14"
            title={title}
          >
            {title}
          </h2>

          <div className="flex items-center justify-between mt-4">
            {/* Price */}
            <div className="flex items-baseline-last gap-2 ">
              <span className="text-2xl font-extrabold text-primary">
                ৳{discountedPrice}
              </span>
              {discount > 0 && (
                <span className="text-sm text-base-content/40 line-through font-medium">
                  ৳{price}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-base-content">{ratings}</span>
              <span className="text-base-content/50 text-xs">
                ({reviews} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4 flex items-center gap-2">
          <button className="btn btn-primary flex-1 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group-hover:-translate-y-1 text-white text-sm px-2">
            <ShoppingCart size={16} className="mr-1 text-white" />
            Add to Cart
          </button>

          <button className="btn btn-primary btn-outline flex-1 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group-hover:-translate-y-1 hover:text-white text-sm px-2">
            <Eye size={16} className="mr-1" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
