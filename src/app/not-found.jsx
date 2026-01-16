import Link from "next/link";
import React from "react";
import { Home, AlertCircle } from "lucide-react";
import { epilogue } from "./layout";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-base-100 px-4">
            <div className="text-center space-y-6 max-w-lg mx-auto">
                {/* Icon / Illustration */}
                <div className="relative w-32 h-32 mx-auto bg-base-200 rounded-full flex items-center justify-center animate-bounce">
                    <AlertCircle size={64} className="text-primary" />
                    <div className="absolute -bottom-2 -right-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                        Oops!
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                    <h1 className={`text-6xl lg:text-8xl font-black text-base-content/20 ${epilogue.className}`}>
                        404
                    </h1>
                    <h2 className={`text-2xl lg:text-3xl font-bold text-base-content ${epilogue.className}`}>
                        Page Not Found
                    </h2>
                    <p className="text-base-content/70 text-lg">
                        It seems you've ventured into unknown territory. The page you are looking for might have been moved or deleted.
                    </p>
                </div>

                {/* Action Button */}
                <Link href="/" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group">
                    <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
