import React from "react";

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary scale-150"></span>
                <h2 className="text-xl font-bold text-base-content/70 animate-pulse mt-4">
                    Loading Hero Kidz...
                </h2>
            </div>
        </div>
    );
};

export default Loading;
