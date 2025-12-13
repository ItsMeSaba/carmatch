interface Props {
  photoVer?: number;
  picCount: number;
  photo: string;
  carId: number;
}

export const generateImageUrls = ({
  picCount,
  photoVer,
  photo,
  carId,
}: Props): string[] => {
  const urls: string[] = [];
  const baseUrl = `https://static.my.ge/myauto/photos/${photo}/large`;

  for (let i = 1; i <= picCount; i++) {
    urls.push(`${baseUrl}/${carId}_${i}.jpg?v=${photoVer || 1}`);
  }

  return urls;
};
