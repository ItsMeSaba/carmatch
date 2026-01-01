import { removeLikedPosting } from "@/shared/lib/localstorage/liked-postings/remove-liked-posting";
import { getLikedPostings } from "@/shared/lib/localstorage/liked-postings/get-liked-postings";
import { LikedCarCard } from "./ui/liked-car-card/LikedCarCard";
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
      <div className="h-[8vh]">
        <LikedCarsHeader likedCarsCount={likedCars.length} />
      </div>

      <div className="space-y-6 md:pr-3 overflow-y-auto max-h-[88vh]">
        {likedCars.length === 0 && <NoLikedCars />}

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
