import { CarListing } from "@/types/global";

export function getLikedPostings(): CarListing[] {
  const likedPostings = localStorage.getItem("likedPostings");

  return likedPostings ? JSON.parse(likedPostings) : [];
}
