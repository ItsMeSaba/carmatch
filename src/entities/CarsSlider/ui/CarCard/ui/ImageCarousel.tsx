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
          <img
            src={image}
            alt={"car image"}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-black/30" />
        </div>
      ))}
    </div>
  );
}
