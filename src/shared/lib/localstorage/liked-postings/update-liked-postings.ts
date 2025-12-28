import { getLikedPostings } from "./get-liked-postings";
import { CarListing } from "@/types/global";

export function updateLikedPostings(postings: CarListing[]) {
  const likedPostings = getLikedPostings();

  localStorage.setItem(
    "likedPostings",
    JSON.stringify([...postings, ...likedPostings])
  );
}
