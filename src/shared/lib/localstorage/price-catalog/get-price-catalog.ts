export interface PriceCatalogData {
  minPrice: number;
  maxPrice: number;
}

export function getPriceCatalog(): PriceCatalogData | null {
  const priceCatalog = localStorage.getItem("priceCatalog");

  return priceCatalog ? JSON.parse(priceCatalog) : null;
}
