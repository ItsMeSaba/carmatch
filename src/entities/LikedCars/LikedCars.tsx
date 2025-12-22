import { getLikedPostings } from "@/entities/CarsSlider/lib/localstorage/liked-postings/get-liked-postings";
import { LikedCarCard } from "./ui/LikedCarCard/LikedCarCard";
import { LikedCarsHeader } from "./ui/LikedCarsHeader";
import { NoLikedCars } from "./ui/NoLikedCars";
import { CarListing } from "@/types/global";
import { useState } from "react";

export function LikedCars() {
  const [likedCars] = useState<CarListing[]>(
    typeof window !== "undefined" ? getLikedPostings() : []
  );

  return (
    <div className="max-w-4xl mx-auto">
      <LikedCarsHeader likedCarsCount={likedCars.length} />

      {likedCars.length === 0 && <NoLikedCars />}

      <div className="space-y-6 pb-[30vh] overflow-y-auto max-h-screen">
        {likedCars.map((car) => {
          return <LikedCarCard key={car.car_id} car={car} />;
        })}
      </div>
    </div>
  );
}
