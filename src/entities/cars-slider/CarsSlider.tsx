"use client";

import { updateSeenPostingIds } from "../../shared/lib/localstorage/seen-postings/update-seen-posting-ids";
import { updateLikedPostings } from "../../shared/lib/localstorage/liked-postings/update-liked-postings";
import { getSwipedCardAnimation } from "./ui/CarCard/utils/get-swiped-card-animation";
import { ReactionPanel } from "./ui/ReactionPanel/ReactionPanel";
import { usePostings } from "../../shared/model/hooks/usePostings";
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

  const handleOpen = () => {
    window.open(`https://myauto.ge/ka/pr/${chosenCard.car_id}`, "_blank");
  };

  return (
    <div className="w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] mx-auto bg-white rounded-xl lg:rounded-4xl overflow-hidden">
      <CarCard
        car={chosenCard}
        className={getSwipedCardAnimation(swipingDirection)}
      />

      {/* Preloading next one */}
      <CarCard car={nextPosting} className={"invisible absolute!"} />

      <ReactionPanel
        onDecline={handleDecline}
        onLike={handleLike}
        onOpen={handleOpen}
      />
    </div>
  );
}
