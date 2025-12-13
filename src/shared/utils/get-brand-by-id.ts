import { brands } from "@/shared/data/brands";

export function getBrandById(id: number) {
  return brands.find((brand) => brand.id === id);
}
