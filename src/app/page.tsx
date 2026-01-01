"use client";

import { Navigation } from "@/entities/cars-slider/ui/navigation-test/Navigation";
import { CarsSlider } from "@/entities/cars-slider/CarsSlider";

export default function DemoPage() {
  return (
    <div className="h-screen bg-linear-to-br py-6 px-2 flex items-center justify-center">
      <Navigation />

      <CarsSlider />
    </div>
  );
}
