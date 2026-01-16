import React from "react";

const ProductSkeleton = () => {
    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
            {/* Image Skeleton */}
            <div className="h-64 w-full bg-base-300 animate-pulse" />

            <div className="card-body p-5 flex flex-col justify-between">
                <div className="space-y-3">
                    {/* Rating Skeleton */}
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded bg-base-300 animate-pulse" />
                        <div className="h-4 w-12 bg-base-300 rounded animate-pulse" />
                        <div className="h-4 w-16 bg-base-300 rounded animate-pulse" />
                    </div>

                    {/* Title Skeleton */}
                    <div className="space-y-2">
                        <div className="h-5 w-full bg-base-300 rounded animate-pulse" />
                        <div className="h-5 w-2/3 bg-base-300 rounded animate-pulse" />
                    </div>

                    {/* Price Skeleton */}
                    <div className="flex items-baseline gap-2 mt-2">
                        <div className="h-8 w-24 bg-base-300 rounded animate-pulse" />
                        <div className="h-4 w-16 bg-base-300 rounded animate-pulse" />
                    </div>
                </div>

                {/* Button Skeleton */}
                <div className="mt-6">
                    <div className="h-12 w-full bg-base-300 rounded-lg animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
