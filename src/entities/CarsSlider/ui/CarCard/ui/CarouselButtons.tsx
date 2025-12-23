import CarouselArrow from "../assets/carousel-arrow.svg";

interface Props {
  emblaApi: any;
}

export function CarouselButtons({ emblaApi }: Props) {
  return (
    <>
      <CarouselButton
        className="left-2 sm:left-4 top-1/2 -translate-y-1/2"
        onClick={() => emblaApi?.scrollPrev()}
        direction="prev"
      />

      <CarouselButton
        className="right-2 sm:right-4 top-1/2 -translate-y-1/2"
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
      className={`absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10 ${className}`}
      aria-label={direction === "prev" ? "Previous image" : "Next image"}
      onClick={onClick}
    >
      <CarouselArrow className={direction === "prev" ? "" : "rotate-180"} />
    </button>
  );
}
