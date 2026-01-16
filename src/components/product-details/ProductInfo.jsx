import React from "react";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import { epilogue } from "@/app/layout";

const ProductInfo = ({ product }) => {
    const { title, price, discount, ratings, reviews, description, info } = product;

    const discountedPrice = discount
        ? Math.round(price - (price * discount) / 100)
        : price;

    return (
        <div className="space-y-6">
            <div>
                <h1 className={`text-3xl lg:text-4xl font-bold text-base-content ${epilogue.className}`}>
                    {title}
                </h1>
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={18} fill="currentColor" />
                        <span className="font-bold text-lg">{ratings}</span>
                    </div>
                    <span className="text-base-content/50">|</span>
                    <span className="text-base-content/70">{reviews} Reviews</span>
                    <span className="text-base-content/50">|</span>
                    <span className="text-green-600 font-medium">In Stock</span>
                </div>
            </div>

            <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-primary">
                    ৳{discountedPrice}
                </span>
                {discount > 0 && (
                    <span className="text-xl text-base-content/40 line-through font-medium">
                        ৳{price}
                    </span>
                )}
            </div>

            <p className="text-base-content/80 leading-relaxed whitespace-pre-line">
                {description}
            </p>

            {/* Key Features / Info */}
            {info && info.length > 0 && (
                <div className="bg-base-200/50 p-4 rounded-xl">
                    <h3 className="font-bold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70">
                        {info.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-base-200">
                <div className="flex-1 flex gap-3">
                    <button className="btn btn-primary flex-1 btn-lg text-white shadow-lg shadow-primary/20">
                        <ShoppingCart className="mr-2" />
                        Add to Cart
                    </button>
                    <button className="btn btn-outline btn-square btn-lg">
                        <Heart />
                    </button>
                </div>
                <button className="btn btn-ghost btn-lg">
                    <Share2 />
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
