import React from "react";
import Image from "next/image";

const ProductImageGallery = ({ image, title, discount }) => {
    return (
        <div className="relative w-full h-full lg:h-full  rounded-2xl overflow-hidden border border-base-300">
            <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                priority
            />
            {discount > 0 && (
                <div className="absolute top-6 left-6 badge badge-secondary badge-lg font-bold shadow-md">
                    -{discount}%
                </div>
            )}
        </div>
    );
};

export default ProductImageGallery;
