"use client";

import { ReactionPanel } from "./ui/ReactionPanel/ReactionPanel";
import { CarCard } from "./ui/CarCard/CarCard";
import { useEffect, useState } from "react";

interface Props {
  carListings: unknown[];
}

export function CarsSlider({ carListings }: Props) {
  const [chosenCard, setChosenCard] = useState<unknown | null>(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * carListings.length);
    const chosenCard = carListings[randomNumber];

    setChosenCard(chosenCard);
  }, [carListings.length]);

  if (!chosenCard) {
    return null;
  }

  return (
    <div className="max-w-[60vw] mx-auto">
      <CarCard car={chosenCard} />

      <ReactionPanel onDecline={() => {}} onLike={() => {}} />
    </div>
  );
}
