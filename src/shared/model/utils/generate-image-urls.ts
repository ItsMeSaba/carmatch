import { CarListing } from "@/types/global";

export const generateImageUrls = (car: CarListing): string[] => {
  const baseUrl = `https://static.my.ge/myauto/photos/${car.photo}/large`;

  return Array.from(
    { length: car.pic_number },
    (_, i) => `${baseUrl}/${car.car_id}_${i + 1}.jpg?v=${car.photo_ver || 1}`
  );
};
