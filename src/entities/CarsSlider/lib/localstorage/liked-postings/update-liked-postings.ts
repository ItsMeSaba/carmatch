import { getLikedPostings } from "./get-liked-postings";

export function updateLikedPostings(ids: number[]) {
  const likedPostings = getLikedPostings();

  localStorage.setItem(
    "likedPostings",
    JSON.stringify([...likedPostings, ...ids])
  );
}
