"use client";

import { getCarDataItems } from "@/shared/model/helpers/get-car-data-items";
import { formatPrice } from "../../../../shared/model/utils/format-price";
import { getBrandById } from "@/shared/model/helpers/get-brand-by-id";
import { getModelById } from "@/shared/model/helpers/get-model-by-id";
import { ImageCarousel } from "./ui/ImageCarousel";
import { CarListing } from "@/types/global";
import { Pill } from "./ui/Pill";

interface CarCardProps {
  isForPreloading?: boolean;
  className?: string;
  car: CarListing;
  name?: string;
}

export function CarCard({
  car,
  className,
  isForPreloading,
  name,
}: CarCardProps) {
  const model = getModelById(car.model_id);
  const brand = getBrandById(car.man_id);
  const data = getCarDataItems(car);

  return (
    <div
      className={`relative z-30 w-full md:max-w-[90vw] mx-auto bg-white overflow-hidden select-none ${className}`}
    >
      {name && (
        <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 md:p-6 z-10 flex justify-between items-end border-2 text-white border-red-500">
          <h2 className="text-lg md:text-4xl font-medium md:text-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
            {name} - isForPreloading: {String(!!isForPreloading)}
          </h2>
        </div>
      )}

      <ImageCarousel isForPreloading={isForPreloading} car={car} />

      <div className="md:absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 md:text-white z-10 flex justify-between items-end">
        <div>
          <div className="sm:mb-3">
            <span className="text-2xl sm:text-4xl md:text-5xl font-bold md:text-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
              {formatPrice(car.price_usd)}
            </span>
          </div>

          <div className="mb-2 md:mb-6">
            <h2 className="text-lg md:text-4xl font-medium md:text-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
              {brand?.title} {model?.title}
            </h2>
          </div>

          <div className="flex gap-1 sm:gap-2 flex-wrap">
            {data.map((value) => {
              if (!value) return null;

              return (
                <Pill
                  className="text-black! bg-white! border-gray-500! md:text-white! md:bg-black/30! md:border-white/40!"
                  key={value}
                >
                  {value}
                </Pill>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
