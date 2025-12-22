"use client";

import { LikedCars } from "@/entities/LikedCars/LikedCars";

export default function LikesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#FF5A1F] via-[#FF8A5C] to-[#FFF3ED] py-8 px-4">
      <LikedCars />
    </div>
  );
}
