import { CarListing } from "@/types/global";

const API_ENDPOINT = "https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0";

interface Params {
  page?: number;
}

export async function fetchCarListings(params: Params) {
  const { page = 1 } = params || {};

  const url = new URL(API_ENDPOINT);

  url.searchParams.set("page", page.toString());
  url.searchParams.set("CurrencyID", "3");

  const res = await fetch(url);
  const data = await res.json();

  return data?.data?.items as CarListing[];
}
