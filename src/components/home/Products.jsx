import React from "react";
import ProductCard from "../cards/ProductCard";
import { epilogue } from "@/app/layout";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <section className="py-12 lg:py-26">
      <div className="text-center mb-12 space-y-2">
        <h2
          className={`text-3xl lg:text-4xl font-extrabold text-base-content ${epilogue.className}`}
        >
          Featured <span className="text-primary">Products</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto">
          Explore our hand-picked collection of top-rated toys and gear for your
          little heroes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
        {products.slice(0, 8).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
