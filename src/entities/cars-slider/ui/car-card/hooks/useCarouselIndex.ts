import { EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";

interface Props {
  emblaApi?: EmblaCarouselType;
}

export const useCarouselIndex = ({ emblaApi }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function onSelect() {
      setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
    }

    emblaApi?.on("select", onSelect);

    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, [emblaApi]);

  return {
    slideIndex: currentIndex + 1,
  };
};
