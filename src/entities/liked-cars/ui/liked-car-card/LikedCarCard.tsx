import { generateImageUrls } from "@/shared/model/utils/generate-image-urls";
import { formatPrice } from "@/shared/model/utils/format-price";
import { getBrandById } from "@/shared/model/helpers/get-brand-by-id";
import { getModelById } from "@/shared/model/helpers/get-model-by-id";
import { SpecificationsSection } from "./ui/SpecificationsSection";
import { ActionButtonsSection } from "./ui/ActionButtonsSection";
import { TitlePriceSection } from "./ui/TitlePriceSection";
import { ImageSection } from "./ui/ImageSection";
import { CarListing } from "@/types/global";

interface Props {
  onRemove: () => void;
  car: CarListing;
}

export function LikedCarCard({ car, onRemove }: Props) {
  const model = getModelById(car.model_id);
  const brand = getBrandById(car.man_id);
  const images = generateImageUrls(car);

  const onViewDetails = () => {
    window.open(`https://myauto.ge/ka/pr/${car.car_id}`, "_blank");
  };

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

            <SpecificationsSection car={car} />

            <ActionButtonsSection
              onViewDetails={onViewDetails}
              onRemove={onRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
