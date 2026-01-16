import React from "react";

const ProductDetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-base-100 py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs Skeleton */}
                <div className="flex gap-2 mb-8">
                    <div className="h-4 w-12 bg-base-300 rounded animate-pulse" />
                    <div className="h-4 w-4 bg-base-300 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-base-300 rounded animate-pulse" />
                    <div className="h-4 w-4 bg-base-300 rounded animate-pulse" />
                    <div className="h-4 w-32 bg-base-300 rounded animate-pulse" />
                </div>

                {/* Main Content Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Image Gallery Skeleton */}
                    <div className="w-full h-100 lg:h-125 bg-base-300 rounded-2xl animate-pulse" />

                    {/* Right: Product Info Skeleton */}
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="space-y-2">
                            <div className="h-8 lg:h-10 w-3/4 bg-base-300 rounded animate-pulse" />
                            <div className="h-8 lg:h-10 w-1/2 bg-base-300 rounded animate-pulse" />
                        </div>

                        {/* Rating & Stock */}
                        <div className="flex items-center gap-4">
                            <div className="h-6 w-24 bg-base-300 rounded animate-pulse" />
                            <div className="h-6 w-20 bg-base-300 rounded animate-pulse" />
                            <div className="h-6 w-16 bg-base-300 rounded animate-pulse" />
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-3">
                            <div className="h-10 w-32 bg-base-300 rounded animate-pulse" />
                            <div className="h-6 w-20 bg-base-300 rounded animate-pulse" />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-base-300 rounded animate-pulse" />
                            <div className="h-4 w-full bg-base-300 rounded animate-pulse" />
                            <div className="h-4 w-5/6 bg-base-300 rounded animate-pulse" />
                            <div className="h-4 w-4/5 bg-base-300 rounded animate-pulse" />
                        </div>

                        {/* Key Features */}
                        <div className="h-32 w-full bg-base-300 rounded-xl animate-pulse" />

                        {/* Actions */}
                        <div className="flex gap-4 pt-4">
                            <div className="h-14 flex-1 bg-base-300 rounded-lg animate-pulse" />
                            <div className="h-14 w-14 bg-base-300 rounded-lg animate-pulse" />
                            <div className="h-14 w-14 bg-base-300 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Related Products Skeleton */}
                <div className="mt-20">
                    <div className="h-8 w-48 bg-base-300 rounded mb-8 animate-pulse" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
                                <div className="h-64 w-full bg-base-300 animate-pulse" />
                                <div className="card-body p-5 space-y-3">
                                    <div className="h-4 w-1/2 bg-base-300 rounded animate-pulse" />
                                    <div className="h-6 w-3/4 bg-base-300 rounded animate-pulse" />
                                    <div className="h-8 w-1/3 bg-base-300 rounded animate-pulse" />
                                    <div className="h-10 w-full bg-base-300 rounded-lg animate-pulse mt-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;
