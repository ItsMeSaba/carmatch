import { getFuelTypeLabel } from "@/entities/CarsSlider/ui/CarCard/utils/getFuelTypeLabel";
import { getGearTypeLabel } from "@/entities/CarsSlider/ui/CarCard/utils/getGearTypeLabel";
import { formatMileage } from "@/entities/CarsSlider/ui/CarCard/utils/formatMileage";
import { CarListing } from "@/types/global";

interface Props {
  car: CarListing;
}

export function SpecificationsSection({ car }: Props) {
  const specs = [
    getGearTypeLabel(car.gear_type_id),
    getFuelTypeLabel(car.fuel_type_id),
    `${formatMileage(car.car_run_km)} km`,
    `${car.engine_volume / 1000}L`,
    car.prod_year,
  ].filter(Boolean);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {specs.map((spec, index) => (
        <span
          key={index}
          className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700"
        >
          {spec}
        </span>
      ))}
    </div>
  );
}
