"use client";

import { updateSeenPostingIds } from "../../shared/lib/localstorage/seen-postings/update-seen-posting-ids";
import { updateLikedPostings } from "../../shared/lib/localstorage/liked-postings/update-liked-postings";
import { getSwipedCardAnimation } from "./ui/car-card/utils/get-swiped-card-animation";
import { ReactionPanel } from "./ui/reaction-panel/ReactionPanel";
import { usePostings } from "../../shared/model/hooks/usePostings";
import { CarCard } from "./ui/car-card/CarCard";
import { useState } from "react";

export function CarsSlider() {
  const { leftCard, rightCard, getNextPosting, leadingCard, allPostings } =
    usePostings();
  const [swipingDirection, setSwipingDirection] = useState<
    "left" | "right" | null
  >(null);

  console.log("======================");
  console.log("allPostings", allPostings);
  console.log("leftCard", leftCard);
  console.log("rightCard", rightCard);
  console.log("======================");

  const chosenCard = leftCard;

  if (!chosenCard) {
    return null;
  }

  const handleVisual = (direction: "left" | "right") => {
    setSwipingDirection(direction);

    setTimeout(() => {
      getNextPosting();
      setSwipingDirection(null);
    }, 400);
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
    <div className="relative w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] mx-auto bg-white rounded-xl lg:rounded-4xl overflow-hidden">
      {/* left */}
      {chosenCard && (
        <CarCard
          className={
            leadingCard === "left"
              ? getSwipedCardAnimation(swipingDirection)
              : "absolute! top-0 left-0 z-20!"
          }
          car={chosenCard}
        />
      )}

      {/* right */}
      {rightCard && (
        <CarCard
          className={
            leadingCard === "right"
              ? getSwipedCardAnimation(swipingDirection)
              : "absolute! top-0 left-0 z-20!"
          }
          car={rightCard}
          isForPreloading
        />
      )}

      <ReactionPanel
        onDecline={handleDecline}
        onLike={handleLike}
        onOpen={handleOpen}
      />
    </div>
  );
}
