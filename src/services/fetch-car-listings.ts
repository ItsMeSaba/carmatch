"use server";

import { dummyContent } from "../shared/data/dummy-content";

const API_ENDPOINT =
  "https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&CurrencyID=3";

export async function fetchCarListings() {
  const res = await fetch(API_ENDPOINT);
  // const data = await res.json();

  console.log("data", res);

  return dummyContent.data.items;
}
