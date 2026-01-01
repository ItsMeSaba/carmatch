"use client";

import useEmblaCarousel from "embla-carousel-react";

import { getCarDataItems } from "@/shared/model/helpers/get-car-data-items";
import { getBrandById } from "@/shared/model/helpers/get-brand-by-id";
import { getModelById } from "@/shared/model/helpers/get-model-by-id";
import { generateImageUrls } from "../../../../shared/model/utils/generate-image-urls";
import { useCarouselIndex } from "./hooks/useCarouselIndex";
import { CarouselButtons } from "./ui/CarouselButtons";
import { ImageCarousel } from "./ui/ImageCarousel";
import { formatPrice } from "../../../../shared/model/utils/format-price";
import { CarListing } from "@/types/global";
import { Pill } from "./ui/Pill";

interface CarCardProps {
  isForPreloading?: boolean;
  className?: string;
  car: CarListing;
}

export function CarCard({ car, className, isForPreloading }: CarCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { slideIndex } = useCarouselIndex({ emblaApi });

  const model = getModelById(car.model_id);
  const brand = getBrandById(car.man_id);
  const images = generateImageUrls(car);
  const data = getCarDataItems(car);

  return (
    <div
      className={`relative w-full md:max-w-[90vw] mx-auto bg-white md:shadow-2xl overflow-hidden select-none ${className}`}
    >
      <div className="relative overflow-hidden" ref={emblaRef}>
        <ImageCarousel isForPreloading={isForPreloading} images={images} />

        <CarouselButtons emblaApi={emblaApi} />

        <Pill className="absolute bottom-2 right-2 md:hidden">
          {slideIndex} / {car.pic_number}
        </Pill>
      </div>

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

        <Pill className="hidden! md:block!">
          {slideIndex} / {car.pic_number}
        </Pill>
      </div>
    </div>
  );
}
