import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { generateImageUrls } from "@/shared/model/utils/generate-image-urls";
import { useIsMobile } from "../../../../../shared/model/hooks/useIsMobile";
import { useCarouselIndex } from "../hooks/useCarouselIndex";
import { CarouselButtons } from "./CarouselButtons";
import { CarListing } from "@/types/global";
import { useEffect } from "react";
import { Pill } from "./Pill";

interface Props {
  car: CarListing;
}

export function ImageCarousel({ car }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { slideIndex } = useCarouselIndex({ emblaApi });
  // const isMobile = useIsMobile();

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
            {/* <Image
              priority={index === 0}
              preload={index > 0 && index < 3}
              className="w-full h-full object-cover"
              height={isMobile ? 600 * 0.6 : 600}
              width={isMobile ? 900 * 0.6 : 900}
              alt={"car image"}
              quality={95}
              src={image}
            /> */}

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
