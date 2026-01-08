import { HeartIcon } from "@/entities/cars-slider/ui/reaction-panel/assets/HeartIcon";
import Image from "next/image";

interface Props {
  imageUrl: string;
  alt: string;
}

export function ImageSection({ imageUrl, alt }: Props) {
  return (
    <div className="md:w-2/5 relative">
      <div className="w-full h-64 md:h-full relative">
        <Image
          src={imageUrl}
          className="object-cover"
          unoptimized
          fill={true}
          alt={alt}
        />
      </div>

      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg">
        <HeartIcon className="w-5 h-5 fill-main text-main" />
      </div>
    </div>
  );
}
