import { getGearTypeLabel } from "@/shared/model/utils/get-gear-type-label";
import { getFuelTypeLabel } from "@/shared/model/utils/get-fuel-type-label";
import { formatMileage } from "@/shared/model/utils/format-mileage";
import { CarListing } from "@/types/global";

export function getCarDataItems(car: CarListing) {
  const engineVolume = car.engine_volume
    ? (car.engine_volume / 1000).toFixed(1)
    : null;

  const milage = formatMileage(car.car_run_km);

  return [
    engineVolume ? `${engineVolume}L` : null,
    getGearTypeLabel(car.gear_type_id),
    getFuelTypeLabel(car.fuel_type_id),
    milage ? `${milage} km` : null,
    car.prod_year,
  ];
}
