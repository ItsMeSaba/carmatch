import Image from "next/image";

import { useIsMobile } from "../hooks/useIsMobile";

interface Props {
  images: string[];
}

export function ImageCarousel({ images }: Props) {
  const isMobile = useIsMobile();

  return (
    <div className="flex">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-[0_0_100%] min-w-0 relative aspect-3/5 sm:aspect-[5/3.5] md:aspect-[5/3.25]"
        >
          <Image
            src={image}
            alt={"car image"}
            className="w-full h-full object-cover"
            height={isMobile ? 400 : 600}
            width={isMobile ? 200 : 900}
            quality={80}
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-black/30" />
        </div>
      ))}
    </div>
  );
}
