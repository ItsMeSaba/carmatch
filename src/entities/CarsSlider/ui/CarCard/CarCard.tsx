"use client";

import useEmblaCarousel from "embla-carousel-react";

import { generateImageUrls } from "./utils/generateImageUrls";
import { getBrandById } from "@/shared/utils/get-brand-by-id";
import { getModelById } from "@/shared/utils/get-model-by-id";
import { getGearTypeLabel } from "./utils/getGearTypeLabel";
import { useCarouselIndex } from "./hooks/useCarouselIndex";
import { getFuelTypeLabel } from "./utils/getFuelTypeLabel";
import { CarouselButtons } from "./ui/CarouselButtons";
import { formatMileage } from "./utils/formatMileage";
import { ImageCarousel } from "./ui/ImageCarousel";
import { formatPrice } from "./utils/formatPrice";
import { CarListing } from "@/types/global";
import { Pill } from "./ui/Pill";

interface CarCardProps {
  className?: string;
  car: CarListing;
}

export function CarCard({ car, className }: CarCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { slideIndex } = useCarouselIndex({ emblaApi });

  const images = generateImageUrls({
    picCount: car.pic_number,
    photoVer: car.photo_ver,
    photo: car.photo,
    carId: car.car_id,
  });

  const data = [
    getGearTypeLabel(car.gear_type_id),
    getFuelTypeLabel(car.fuel_type_id),
    `${formatMileage(car.car_run_km)} km`,
    `${car.engine_volume / 1000}L`,
    car.prod_year,
  ];

  const brand = getBrandById(car.man_id);
  const model = getModelById(car.model_id);

  return (
    <div
      className={`relative w-full max-w-[90vw] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden select-none ${className}`}
    >
      <div className="relative overflow-hidden" ref={emblaRef}>
        <ImageCarousel images={images} />

        <CarouselButtons emblaApi={emblaApi} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white z-10 flex justify-between items-end">
        <div>
          <div className="mb-2 sm:mb-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-shadow">
              {brand?.title} {model?.title}
            </h2>
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-shadow">
              {formatPrice(car.price_usd)}
            </span>
          </div>

          <div className="flex gap-1.5 sm:gap-2 flex-wrap">
            {data.map((value) => {
              if (!value) return null;

              return <Pill key={value}>{value}</Pill>;
            })}
          </div>
        </div>

        <div>
          <Pill>
            {slideIndex} / {car.pic_number}
          </Pill>
        </div>
      </div>
    </div>
  );
}
