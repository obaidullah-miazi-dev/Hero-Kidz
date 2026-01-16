import React from "react";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";

const Loading = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 lg:py-20">
            <div>
                <div className="text-center mb-12 space-y-2">
                    <div className="h-10 w-64 bg-base-300 rounded mx-auto animate-pulse" />
                    <div className="h-4 w-96 bg-base-300 rounded mx-auto animate-pulse" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;
