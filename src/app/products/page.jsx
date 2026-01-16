import React from "react";
import ProductCard from "@/components/cards/ProductCard";
import { epilogue } from "../layout";
import { getProducts } from "@/actions/server/product";

export const metadata = {
    title: "All Products",
    description:
        "Browse our complete collection of high-quality toys, costumes, and educational kits for children of all ages.",
    openGraph: {
        title: "All Products | Hero Kidz",
        description:
            "Browse our complete collection of high-quality toys, costumes, and educational kits for children of all ages.",
        images: [
            {
                url: "https://i.ibb.co.com/vxkR3bgR/image.png",
                width: 1200,
                height: 630,
                alt: "Hero Kidz Products Collection",
            },
        ],
    },
};
const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-base-100 py-12 lg:py-20">
            <div>
                <div className="text-center mb-12 space-y-2">
                    <h1
                        className={`text-3xl lg:text-5xl font-extrabold text-base-content ${epilogue.className}`}
                    >
                        All <span className="text-primary">Products</span>
                    </h1>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Browse our complete collection of high-quality toys, costumes, and
                        educational kits.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
