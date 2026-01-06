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
  url.searchParams.set(
    "Locs",
    "2.3.4.7.15.30.113.53.39.38.37.36.40.41.44.31.5.47.48.52.8.54.16.6.14.13.12.11.10.9.55.56.57.59.58.61.62.63.64.66.71.72.74.75.76.77.78.80.81.82.83.84.85.86.87.88.91.96.97.101.109.116.119.122.127.131.133.137.139.143"
  ); // Located in Georgia

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
