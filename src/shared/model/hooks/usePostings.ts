import { getSeenPostingIds } from "../../lib/localstorage/seen-postings/get-seen-posting-ids";
import { fetchCarListings } from "../../api/fetch-car-listing-page";
import { useCallback, useEffect, useState } from "react";
import { CarListing } from "@/types/global";

export function usePostings() {
  const [postings, setPostings] = useState<CarListing[]>([]);
  const [page, setPage] = useState(1);

  // Fetching logic
  useEffect(() => {
    async function fetchPostings() {
      const carListings = await fetchCarListings({ page });

      const seenPostingIds = getSeenPostingIds();

      const filteredPostings = carListings.filter(
        (listing) => !seenPostingIds.includes(listing.car_id)
      );

      setPostings((prev) => [...prev, ...filteredPostings]);
    }

    fetchPostings();
  }, [page]);

  // Load next page when postings are almost empty
  useEffect(() => {
    // eslint-disable-next-line
    if (postings.length === 2) setPage((prev) => prev + 1);
  }, [postings]);

  // Get next posting and remove old one
  const getNextPosting = useCallback(() => {
    const nextPosting = postings[1];

    setPostings((prev) => [...prev.slice(1)]);

    return nextPosting;
  }, [postings]);

  return {
    allPostings: postings,
    currentPosting: postings[0],
    nextPosting: postings[1],
    getNextPosting,
  };
}
