"use client";

import { updateSeenPostingIds } from "../../shared/lib/localstorage/seen-postings/update-seen-posting-ids";
import { updateLikedPostings } from "../../shared/lib/localstorage/liked-postings/update-liked-postings";
import { getSwipedCardAnimation } from "./ui/car-card/utils/get-swiped-card-animation";
import { ReactionPanel } from "./ui/reaction-panel/ReactionPanel";
import { usePostings } from "../../shared/model/hooks/usePostings";
import { SwipingDirection } from "@/types/global";
import { CarCard } from "./ui/car-card/CarCard";
import { useState } from "react";

export function CarsSlider() {
  const { leftCard, rightCard, getNextPosting, leadingCard, allPostings } =
    usePostings();
  const [swipingDirection, setSwipingDirection] =
    useState<SwipingDirection>(null);

  const chosenCard = leadingCard === "left" ? leftCard : rightCard;

  if (!chosenCard) {
    return null;
  }

  const handleVisual = (direction: SwipingDirection) => {
    setSwipingDirection(direction);

    setTimeout(() => {
      getNextPosting();
      setSwipingDirection(null);
    }, 400);
  };

  const handleDecline = () => {
    if (swipingDirection) return;

    updateSeenPostingIds([chosenCard.car_id]);

    handleVisual("left");
  };

  const handleLike = () => {
    if (swipingDirection) return;

    updateSeenPostingIds([chosenCard.car_id]);
    updateLikedPostings([chosenCard]);

    handleVisual("right");
  };

  const handleOpen = () => {
    window.open(`https://myauto.ge/ka/pr/${chosenCard.car_id}`, "_blank");
  };

  const getCardStylings = (card: "left" | "right") =>
    card === leadingCard
      ? getSwipedCardAnimation(swipingDirection)
      : "absolute! top-0 left-0 z-20!";

  console.log("allPostings", allPostings);

  return (
    <div className="grid grid-rows-[1fr_auto] relative w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] mx-auto bg-white rounded-xl lg:rounded-4xl overflow-hidden min-h-[525px]">
      {allPostings.length === 0 && (
        <p className="bg-white p-2 text-center text-2xl flex items-center justify-center h-full">
          No postings found 😢
        </p>
      )}

      {allPostings.length > 0 && (
        <>
          <div>
            {leftCard && (
              <CarCard className={getCardStylings("left")} car={leftCard} />
            )}

            {rightCard && (
              <CarCard className={getCardStylings("right")} car={rightCard} />
            )}
          </div>
          <ReactionPanel
            onDecline={handleDecline}
            onLike={handleLike}
            onOpen={handleOpen}
          />
        </>
      )}
    </div>
  );
}
