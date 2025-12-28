import { getLikedPostings } from "./get-liked-postings";

export function removeLikedPosting(postingId: number) {
  const likedPostings = getLikedPostings();

  localStorage.setItem(
    "likedPostings",
    JSON.stringify(
      likedPostings.filter((posting) => posting.car_id !== postingId)
    )
  );
}
