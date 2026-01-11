"use client";

export interface PriceCatalogData {
  minPrice: number;
  maxPrice: number;
}

export function getPriceCatalog(): PriceCatalogData | null {
  const priceCatalog = localStorage.getItem("priceCatalog");

  try {
    return priceCatalog ? JSON.parse(priceCatalog) : null;
  } catch (e) {
    console.error("Error parsing priceCatalog from localStorage:", e);
    return null;
  }
}
