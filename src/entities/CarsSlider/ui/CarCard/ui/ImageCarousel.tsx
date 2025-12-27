import Image from "next/image";

import { useIsMobile } from "../hooks/useIsMobile";

interface Props {
  images: string[];
}

export function ImageCarousel({ images }: Props) {
  const isMobile = useIsMobile();

  return (
    <div className="flex relative">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-[0_0_100%] min-w-0 relative aspect-5/4 md:aspect-[4/2.75]"
        >
          <Image
            className="w-full h-full object-cover"
            height={isMobile ? 400 : 600}
            width={isMobile ? 200 : 900}
            alt={"car image"}
            quality={95}
            src={image}
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-black/30" />
        </div>
      ))}
    </div>
  );
}
