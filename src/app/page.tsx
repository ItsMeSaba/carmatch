import { fetchCarListings } from "@/services/fetch-car-listings";
import { CarsSlider } from "@/entities/CarsSlider/CarsSlider";

export default async function DemoPage() {
  const carListings = await fetchCarListings();

  return (
    <div className="min-h-screen bg-linear-to-br py-6 px-2 flex items-center justify-center">
      <CarsSlider carListings={carListings} />
    </div>
  );
}
