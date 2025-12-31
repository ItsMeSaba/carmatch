export function getSwipedCardAnimation(direciton?: "left" | "right" | null) {
  const base = `transition-transform duration-300 ease-in-out`;

  if (direciton === "left") {
    return (
      base + " translate-x-[-150vw] md:translate-x-[-100vw] rotate-[20deg]"
    );
  }

  if (direciton === "right") {
    return base + " translate-x-[150vw] md:translate-x-[100vw] rotate-[-20deg]";
  }

  return "";
}
