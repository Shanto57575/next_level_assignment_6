import { ExternalLink, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/icons/swiftDrops.png";
import { GridPattern } from "./grid-pattern";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray={"5 25"}
          className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] stroke-rose-600/50 dark:stroke-red-200/40"
        />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* === Content === */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center">
        {/* Logo with Enhanced Design */}
        <div className="relative mb-5 group">
          <div className="flex items-center justify-center w-28 h-20 rounded-xl">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-900 bg-clip-text text-transparent">
            Lightning-Fast
          </span>
          <span className="mt-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Zap className="w-10 h-10 md:w-12 md:h-12 text-red-500 animate-pulse" />
            SwiftDrop
          </span>
          <span className="text-red-700 bg-clip-text text-3xl md:text-5xl lg:text-6xl">
            Delivery
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed mb-8">
          Experience the future of parcel delivery with our cutting-edge
          logistics platform. From doorstep to destination in record time, with
          real-time tracking and
          <span className="text-red-600 font-semibold">
            {" "}
            99.9% delivery success rate
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-[22px] rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0">
            <Package className="h-5 w-5" />
            Start Delivery
          </Button>

          <Button
            variant="outline"
            size={"sm"}
            className="group border-2 border-red-200 hover:border-red-300 bg-white/80 backdrop-blur-sm text-red-600 hover:text-red-700 px-8 py-5 rounded-sm hover:bg-red-50 transition-all duration-300"
          >
            Track Package
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-sm text-gray-600 dark:text-gray-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
            Live Tracking
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            24/7 Support
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
            Insured Packages
          </div>
        </div>
      </div>
    </section>
  );
}
