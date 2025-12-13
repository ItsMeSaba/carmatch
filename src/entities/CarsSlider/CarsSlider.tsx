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
    (async () => {
      const res = await fetch(
        "https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&CurrencyID=3"
      );

      console.log("data", res);

      try {
        console.log("parsed", await res.json());
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

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
