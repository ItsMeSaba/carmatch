import { getCarDataItems } from "@/shared/model/helpers/get-car-data-items";
import { CarListing } from "@/types/car-listing";

interface Props {
  car: CarListing;
}

export function SpecificationsSection({ car }: Props) {
  const specs = getCarDataItems(car).filter(Boolean);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {specs.map((spec) => (
        <span
          key={spec}
          className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700"
        >
          {spec}
        </span>
      ))}
    </div>
  );
}
