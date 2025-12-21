import Image from "next/image";

interface Props {
  images: string[];
}

export function ImageCarousel({ images }: Props) {
  return (
    <div className="flex">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-[0_0_100%] min-w-0 relative aspect-[5/3.25]"
        >
          <Image
            src={image}
            alt={"car image"}
            className="w-full h-full object-cover"
            height={600}
            width={900}
            quality={80}
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-black/30" />
        </div>
      ))}
    </div>
  );
}
