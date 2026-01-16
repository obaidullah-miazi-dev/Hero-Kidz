import React from "react";
import { getSingleProduct } from "@/actions/server/product";
import ProductImageGallery from "@/components/product-details/ProductImageGallery";
import ProductInfo from "@/components/product-details/ProductInfo";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product || !product.title) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.title,
    description: product.description?.slice(0, 160) || "Product details",
    openGraph: {
      title: `${product.title} | Hero Kidz`,
      description: product.description?.slice(0, 160) || "Product details",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product || !product.title) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <Link href="/products" className="btn btn-primary mt-4">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-8 lg:py-12">
      <div>
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-8 text-base-content/60">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li className="text-primary font-medium">{product.title}</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <ProductImageGallery
            image={product.image}
            title={product.title}
            discount={product.discount}
          />

          {/* Right: Product Info */}
          <ProductInfo product={product} />
        </div>

        {/* Related Products */}
        <RelatedProducts currentProductId={id} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
