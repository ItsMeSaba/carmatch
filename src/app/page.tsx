"use client";

import Link from "next/link";

import { CarsSlider } from "@/entities/CarsSlider/CarsSlider";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-linear-to-br py-6 px-2 flex items-center justify-center">
      <Link
        className="absolute top-4 right-6 bg-white py-2 px-5 rounded-xl font-semibold"
        href="/likes"
      >
        Liked Cars
      </Link>

      <CarsSlider />
    </div>
  );
}
