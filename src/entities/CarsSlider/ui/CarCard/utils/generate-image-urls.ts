import { CarListing } from "@/types/global";

export const generateImageUrls = (car: CarListing): string[] => {
  const urls: string[] = [];
  const baseUrl = `https://static.my.ge/myauto/photos/${car.photo}/large`;

  for (let i = 1; i <= car.pic_number; i++) {
    urls.push(`${baseUrl}/${car.car_id}_${i}.jpg?v=${car.photo_ver || 1}`);
  }

  return urls;
};
