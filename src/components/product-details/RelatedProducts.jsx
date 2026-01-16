import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";
import { epilogue } from "@/app/layout";

const RelatedProducts = async ({ currentProductId }) => {
    const allProducts = await getProducts();
    const related = allProducts
        .filter((p) => p._id !== currentProductId)
        .slice(0, 4);

    if (related.length === 0) return null;

    return (
        <div className="mt-20">
            <h2 className={`text-2xl lg:text-3xl font-bold mb-8 ${epilogue.className}`}>
                You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
