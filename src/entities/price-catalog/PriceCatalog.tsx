"use client";

import { setPriceCatalog } from "@/shared/lib/localstorage/price-catalog/set-price-catalog";
import { getPriceCatalog } from "@/shared/lib/localstorage/price-catalog/get-price-catalog";
import { PRICE_OPTIONS } from "./model/data/price-options";
import { PriceOption } from "./ui/PriceOption";
import { PriceInput } from "./ui/PriceInput";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function PriceCatalog() {
  const router = useRouter();

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const handleOptionSelect = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleSave = () => {
    setPriceCatalog({ minPrice, maxPrice });
    router.push("/");
  };

  useEffect(() => {
    const savedPriceCatalog = getPriceCatalog();
    if (savedPriceCatalog) {
      // eslint-disable-next-line
      setMinPrice(savedPriceCatalog.minPrice);
      setMaxPrice(savedPriceCatalog.maxPrice);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-2 md:p-6">
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Price Range</h2>
          <div className="grid grid-cols-2 gap-4">
            <PriceInput
              label="Min Price"
              value={minPrice}
              onChange={setMinPrice}
            />
            <PriceInput
              label="Max Price"
              value={maxPrice}
              onChange={setMaxPrice}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRICE_OPTIONS.map((option) => (
              <PriceOption
                key={option.label}
                label={option.label}
                isSelected={
                  minPrice === option.minPrice && maxPrice === option.maxPrice
                }
                onClick={() =>
                  handleOptionSelect(option.minPrice, option.maxPrice)
                }
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={minPrice == 0 || maxPrice == 0}
          className="w-full cursor-pointer bg-main hover:bg-main-darker disabled:opacity-30 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
}
