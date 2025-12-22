import { generateImageUrls } from "@/entities/CarsSlider/ui/CarCard/utils/generateImageUrls";
import { getGearTypeLabel } from "@/entities/CarsSlider/ui/CarCard/utils/getGearTypeLabel";
import { getFuelTypeLabel } from "@/entities/CarsSlider/ui/CarCard/utils/getFuelTypeLabel";
import { formatMileage } from "@/entities/CarsSlider/ui/CarCard/utils/formatMileage";
import { formatPrice } from "@/entities/CarsSlider/ui/CarCard/utils/formatPrice";
import { SpecificationsSection } from "./ui/SpecificationsSection";
import { ActionButtonsSection } from "./ui/ActionButtonsSection";
import { getBrandById } from "@/shared/utils/get-brand-by-id";
import { getModelById } from "@/shared/utils/get-model-by-id";
import { TitlePriceSection } from "./ui/TitlePriceSection";
import { ImageSection } from "./ui/ImageSection";
import { CarListing } from "@/types/global";

interface Props {
  car: CarListing;
}

export function LikedCarCard({ car }: Props) {
  const model = getModelById(car.model_id);
  const brand = getBrandById(car.man_id);
  const images = generateImageUrls({
    picCount: car.pic_number,
    photoVer: car.photo_ver,
    photo: car.photo,
    carId: car.car_id,
  });

  const specs = [
    getGearTypeLabel(car.gear_type_id),
    getFuelTypeLabel(car.fuel_type_id),
    `${formatMileage(car.car_run_km)} km`,
    `${car.engine_volume / 1000}L`,
    car.prod_year,
  ].filter(Boolean);

  return (
    <div
      key={car.car_id}
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="flex flex-col md:flex-row">
        <ImageSection
          imageUrl={images[0]}
          alt={`${brand?.title} ${model?.title}`}
        />

        <div className="md:w-3/5 p-6">
          <div className="flex flex-col h-full justify-between">
            <TitlePriceSection
              title={`${brand?.title} ${model?.title}`}
              price={formatPrice(car.price_usd)}
            />

            <SpecificationsSection specs={specs} />

            <ActionButtonsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
