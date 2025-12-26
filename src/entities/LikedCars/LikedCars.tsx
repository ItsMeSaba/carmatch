import { removeLikedPosting } from "@/shared/lib/liked-postings/remove-liked-posting";
import { getLikedPostings } from "@/shared/lib/liked-postings/get-liked-postings";
import { LikedCarCard } from "./ui/LikedCarCard/LikedCarCard";
import { LikedCarsHeader } from "./ui/LikedCarsHeader";
import { NoLikedCars } from "./ui/NoLikedCars";
import { CarListing } from "@/types/global";
import { useState } from "react";

export function LikedCars() {
  const [likedCars, setLikedCars] = useState<CarListing[]>(
    typeof window !== "undefined" ? getLikedPostings() : []
  );

  const removeFromLikedCars = (carId: number) => {
    setLikedCars((prev) => prev.filter((car) => car.car_id !== carId));
    removeLikedPosting(carId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <LikedCarsHeader likedCarsCount={likedCars.length} />

      {likedCars.length === 0 && <NoLikedCars />}

      <div className="space-y-6 pb-[30vh] pr-6 overflow-y-auto max-h-screen">
        {likedCars.map((car) => (
          <LikedCarCard
            onRemove={() => removeFromLikedCars(car.car_id)}
            key={car.car_id}
            car={car}
          />
        ))}
      </div>
    </div>
  );
}
