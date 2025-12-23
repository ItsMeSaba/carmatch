"use client";

import { updateSeenPostingIds } from "./lib/localstorage/seen-postings/update-seen-posting-ids";
import { updateLikedPostings } from "./lib/localstorage/liked-postings/update-liked-postings";
import { getSwipedCardAnimation } from "./ui/CarCard/utils/get-swiped-card-animation";
import { ReactionPanel } from "./ui/ReactionPanel/ReactionPanel";
import { usePostings } from "./model/hooks/usePostings";
import { CarCard } from "./ui/CarCard/CarCard";
import { useState } from "react";

export function CarsSlider() {
  const { currentPosting, nextPosting, getNextPosting } = usePostings();
  const [swipingDirection, setSwipingDirection] = useState<
    "left" | "right" | null
  >(null);

  const chosenCard = currentPosting;

  if (!chosenCard) {
    return null;
  }

  const handleVisual = (direction: "left" | "right") => {
    setSwipingDirection(direction);

    setTimeout(() => {
      getNextPosting();

      setTimeout(() => {
        setSwipingDirection(null);
      }, 150);
    }, 500);
  };

  const handleDecline = () => {
    updateSeenPostingIds([chosenCard.car_id]);

    handleVisual("left");
  };

  const handleLike = () => {
    updateSeenPostingIds([chosenCard.car_id]);
    updateLikedPostings([chosenCard]);

    handleVisual("right");
  };

  return (
    <div className="w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] mx-auto px-2 sm:px-0 bg-white rounded-4xl overflow-hidden">
      <CarCard
        car={chosenCard}
        className={getSwipedCardAnimation(swipingDirection)}
      />

      {/* Preloading next one */}
      <CarCard car={nextPosting} className={"invisible absolute!"} />

      <ReactionPanel onDecline={handleDecline} onLike={handleLike} />
    </div>
  );
}
