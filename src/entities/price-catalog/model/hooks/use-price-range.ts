import { getPriceCatalog } from "@/shared/lib/localstorage/price-catalog/get-price-catalog";
import { useEffect, useState } from "react";

export function usePriceRange() {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    const savedPriceCatalog = getPriceCatalog();

    if (savedPriceCatalog) {
      // eslint-disable-next-line
      setMinPrice(savedPriceCatalog.minPrice);
      setMaxPrice(savedPriceCatalog.maxPrice);
    }
  }, []);

  return { minPrice, maxPrice, setMinPrice, setMaxPrice };
}
