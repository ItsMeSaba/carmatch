import useEmblaCarousel from "embla-carousel-react";

import { generateImageUrls } from "@/shared/model/utils/generate-image-urls";
import { useCarouselIndex } from "../hooks/useCarouselIndex";
import { CarouselButtons } from "./CarouselButtons";
import { CarListing } from "@/types/car-listing";
import { useEffect } from "react";
import { Pill } from "./Pill";

interface Props {
  car: CarListing;
}

export function ImageCarousel({ car }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { slideIndex } = useCarouselIndex({ emblaApi });

  const images = generateImageUrls(car);

  useEffect(() => {
    emblaApi?.scrollTo(0, true);
  }, [car.car_id, emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex relative">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] min-w-0 relative aspect-5/4 md:aspect-[4/2.75]"
          >
            {/* eslint-disable-next-line */}
            <img
              src={image}
              alt="car image"
              className="w-full h-full object-cover"
              loading={index < 2 ? "eager" : "lazy"}
              fetchPriority={index < 2 ? "high" : "low"}
            />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-black/30" />
          </div>
        ))}
      </div>

      <CarouselButtons emblaApi={emblaApi} />

      <Pill className="absolute bottom-2 right-2">
        {slideIndex} / {car.pic_number}
      </Pill>
    </div>
  );
}
