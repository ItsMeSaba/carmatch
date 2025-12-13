"use server";

import { dummyContent } from "../shared/data/dummy-content";

// const API_ENDPOINT =
//   "https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&CurrencyID=3";

export async function fetchCarListings() {
  // const res = await fetch(API_ENDPOINT);

  return dummyContent.data.items;
}
