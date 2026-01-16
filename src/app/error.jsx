"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { epilogue } from "./layout";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-base-100 px-4">
            <div className="text-center space-y-6 max-w-lg mx-auto">
                {/* Icon */}
                <div className="relative w-32 h-32 mx-auto bg-red-50 rounded-full flex items-center justify-center animate-pulse">
                    <AlertTriangle size={64} className="text-error" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                    <h1 className={`text-4xl lg:text-5xl font-black text-base-content ${epilogue.className}`}>
                        Something went wrong!
                    </h1>
                    <p className="text-base-content/70 text-lg">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => reset()}
                        className="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group"
                    >
                        <RefreshCcw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="btn btn-outline btn-lg rounded-full px-8"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
