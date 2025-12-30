import { PriceCatalogData } from "./get-price-catalog";

export function setPriceCatalog(data: PriceCatalogData): void {
  localStorage.setItem("priceCatalog", JSON.stringify(data));
}
