"use client";

import Link from "next/link";

import { CarsSlider } from "@/entities/CarsSlider/CarsSlider";

export default function DemoPage() {
  return (
    <div className="h-screen bg-linear-to-br py-6 px-2 flex items-center justify-center">
      <Link
        className="absolute top-3 sm:top-4 right-3 sm:right-6 bg-white py-1.5 sm:py-2 px-3 sm:px-5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold"
        href="/likes"
      >
        Liked Cars
      </Link>

      <CarsSlider />
    </div>
  );
}
