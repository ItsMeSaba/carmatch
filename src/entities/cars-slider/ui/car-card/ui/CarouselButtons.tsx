import CarouselArrow from "../assets/carousel-arrow.svg";

import { EmblaCarouselType } from "embla-carousel";

interface Props {
  emblaApi?: EmblaCarouselType;
}

export function CarouselButtons({ emblaApi }: Props) {
  return (
    <>
      <CarouselButton
        className="hidden md:block left-2 sm:left-4 top-1/2 -translate-y-1/2"
        onClick={() => emblaApi?.scrollPrev()}
        direction="prev"
      />

      <CarouselButton
        className="hidden md:block right-2 sm:right-4 top-1/2 -translate-y-1/2"
        onClick={() => emblaApi?.scrollNext()}
        direction="next"
      />
    </>
  );
}

interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}

function CarouselButton({
  direction,
  className,
  onClick,
}: CarouselButtonProps) {
  return (
    <button
      className={`absolute rounded-full z-10 bg-white cursor-pointer border-2 hover:scale-105 transition-all ${className}`}
      aria-label={direction === "prev" ? "Previous image" : "Next image"}
      onClick={onClick}
    >
      <CarouselArrow
        className={`text-black w-12 h-12 ${
          direction === "prev" ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}
