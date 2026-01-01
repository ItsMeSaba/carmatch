import { CarListing } from "@/types/global";

export function getLikedPostings(): CarListing[] {
  const likedPostings = localStorage.getItem("likedPostings");

  try {
    return likedPostings ? JSON.parse(likedPostings) : [];
  } catch (error) {
    console.error("Error parsing likedPostings from localStorage:", error);
    return [];
  }
}
