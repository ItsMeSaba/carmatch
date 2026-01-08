import { SwipingDirection } from "@/types/global";

export function getSwipedCardAnimation(direction?: SwipingDirection) {
  const base = `transition-transform duration-300 ease-in-out`;

  if (direction === "left") {
    return (
      base + " translate-x-[-150vw] md:translate-x-[-100vw] rotate-[20deg]"
    );
  }

  if (direction === "right") {
    return base + " translate-x-[150vw] md:translate-x-[100vw] rotate-[-20deg]";
  }

  return "";
}
