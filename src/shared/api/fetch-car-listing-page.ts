import { CarListing } from "@/types/car-listing";

const API_ENDPOINT = "https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0";

interface Params {
  minPrice?: number;
  maxPrice?: number;
  page?: number;
}

export async function fetchCarListings(params: Params) {
  const { page = 1, minPrice, maxPrice } = params || {};

  const url = new URL(API_ENDPOINT);

  url.searchParams.set("Page", page.toString());
  url.searchParams.set("CurrencyID", "1"); // Set to USD

  if (minPrice) url.searchParams.set("PriceFrom", minPrice.toString());
  if (maxPrice) url.searchParams.set("PriceTo", maxPrice.toString());

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data?.data?.items as CarListing[];
  } catch (error) {
    console.error("Error fetching car listings:", error);
    return [];
  }
}
