import React from "react";
import products from "@/data/toys.json";
import ProductCard from "@/components/cards/ProductCard";
import { epilogue } from "../layout";

const ProductsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

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
