import Image from "next/image";
import React from "react";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { epilogue } from "@/app/layout";

const Banner = () => {
  return (
    <div className="relative bg-base-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="py-12 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm animate-fade-in-up">
              <Sparkles size={16} />
              <span>New Collection 2025</span>
            </div>

            <h1
              className={`${epilogue.className} text-4xl lg:text-6xl font-bold text-base-content leading-tight`}
            >
              Empowering the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-400">
                Next Generation
              </span>{" "}
              of Heroes
            </h1>

            <p className="text-lg text-base-content/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover the best toys, clothes, and gear for your little ones.
              Quality, comfort, and style designed to spark imagination and
              adventure in every child.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="btn btn-primary btn-lg rounded-full px-8 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group">
                <ShoppingBag className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Shop Now
              </button>
              <button className="btn btn-outline btn-secondary btn-lg rounded-full px-8 hover:bg-secondary hover:text-white transition-all duration-300 group">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-base-content/60 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Premium Quality
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 w-full aspect-square lg:aspect-auto lg:h-150 flex items-center justify-center">
              {/* Blob Background */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-primary/5 rounded-full blur-2xl transform scale-90 animate-pulse" />

              <Image
                src="/assets/hero.png"
                width={500}
                height={400}
                alt="Happy Kid Hero"
                className="object-contain relative z-10"
                priority
              />

              {/* Floating Cards (Decorative) */}
              <div
                className="absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-200 hidden sm:block animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">
                    ⭐
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60">Rating</p>
                    <p className="font-bold text-base-content">4.9/5.0</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-10 right-8 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-200 hidden sm:block animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    🎉
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60">Happy Kids</p>
                    <p className="font-bold text-base-content">10k+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
