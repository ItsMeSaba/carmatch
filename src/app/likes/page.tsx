"use client";

import { getLikedPostings } from "@/entities/CarsSlider/lib/localstorage/liked-postings/get-liked-postings";
import { getBrandById } from "@/shared/utils/get-brand-by-id";
import { getModelById } from "@/shared/utils/get-model-by-id";
import { generateImageUrls } from "@/entities/CarsSlider/ui/CarCard/utils/generateImageUrls";
import { formatPrice } from "@/entities/CarsSlider/ui/CarCard/utils/formatPrice";
import { formatMileage } from "@/entities/CarsSlider/ui/CarCard/utils/formatMileage";
import { getFuelTypeLabel } from "@/entities/CarsSlider/ui/CarCard/utils/getFuelTypeLabel";
import { getGearTypeLabel } from "@/entities/CarsSlider/ui/CarCard/utils/getGearTypeLabel";
import { CarListing } from "@/types/global";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function HeartIcon({
  className,
  filled,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      className={className}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

export default function LikesPage() {
  const [likedCars] = useState<CarListing[]>(
    typeof window !== "undefined" ? getLikedPostings() : []
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-[#FF5A1F] via-[#FF8A5C] to-[#FFF3ED] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <ArrowLeftIcon className="w-6 h-6 text-[#FF5A1F]" />
            </Link>
            <h1 className="text-4xl font-bold text-white text-shadow flex items-center gap-3">
              <HeartIcon className="w-8 h-8 fill-white" filled />
              Liked Cars
            </h1>
          </div>
          <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg">
            <span className="font-bold text-[#FF5A1F]">
              {likedCars.length} {likedCars.length === 1 ? "Car" : "Cars"}
            </span>
          </div>
        </div>

        {/* Empty State */}
        {likedCars.length === 0 && (
          <div className="bg-white/90 rounded-3xl shadow-xl p-12 text-center">
            <HeartIcon className="w-20 h-20 mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No liked cars yet
            </h2>
            <p className="text-gray-600 mb-6">
              Start swiping right to add cars to your favorites!
            </p>
            <Link
              href="/"
              className="inline-block bg-[#FF5A1F] hover:bg-[#ff4d0d] text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Start Browsing
            </Link>
          </div>
        )}

        {/* Liked Cars List */}
        <div className="space-y-6 overflow-y-auto max-h-screen">
          {likedCars.map((car) => {
            const brand = getBrandById(car.man_id);
            const model = getModelById(car.model_id);
            const images = generateImageUrls({
              picCount: car.pic_number,
              photoVer: car.photo_ver,
              photo: car.photo,
              carId: car.car_id,
            });

            const specs = [
              getGearTypeLabel(car.gear_type_id),
              getFuelTypeLabel(car.fuel_type_id),
              `${formatMileage(car.car_run_km)} km`,
              `${car.engine_volume / 1000}L`,
              car.prod_year,
            ].filter(Boolean);

            return (
              <div
                key={car.car_id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative">
                    <div className="w-full h-64 md:h-full relative">
                      <Image
                        src={images[0]}
                        alt={`${brand?.title} ${model?.title}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg">
                      <HeartIcon
                        className="w-5 h-5 fill-[#FF5A1F] text-[#FF5A1F]"
                        filled
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6">
                    <div className="flex flex-col h-full justify-between">
                      {/* Title and Price */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {brand?.title} {model?.title}
                        </h3>
                        <p className="text-3xl md:text-4xl font-bold text-[#FF5A1F] mb-4">
                          {formatPrice(car.price_usd)}
                        </p>
                      </div>

                      {/* Specifications */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {specs.map((spec, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-[#FF5A1F] hover:bg-[#ff4d0d] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                          View Details
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
