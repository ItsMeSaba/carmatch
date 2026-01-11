import { getPriceCatalog } from "@/shared/lib/localstorage/price-catalog/get-price-catalog";
import { useEffect, useState } from "react";

export function useSavedPriceRange() {
  const [savedMinPrice, setSavedMinPrice] = useState<number>(0);
  const [savedMaxPrice, setSavedMaxPrice] = useState<number>(0);

  useEffect(() => {
    const savedPriceCatalog = getPriceCatalog();

    if (savedPriceCatalog) {
      // eslint-disable-next-line
      setSavedMinPrice(savedPriceCatalog.minPrice);
      setSavedMaxPrice(savedPriceCatalog.maxPrice);
    }
  }, []);

  return { savedMinPrice, savedMaxPrice };
}
