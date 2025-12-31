import { getSeenPostingIds } from "../../lib/localstorage/seen-postings/get-seen-posting-ids";
import { fetchCarListings } from "../../api/fetch-car-listing-page";
import { useCallback, useEffect, useState } from "react";
import { CarListing } from "@/types/global";
import { getPriceCatalog } from "@/shared/lib/localstorage/price-catalog/get-price-catalog";
import { useRouter } from "next/navigation";

export function usePostings() {
  const [postings, setPostings] = useState<CarListing[]>([]);
  const [page, setPage] = useState(1);
  const router = useRouter();

  // Fetching logic
  useEffect(() => {
    async function fetchPostings() {
      const priceRange = getPriceCatalog();

      if (!priceRange) {
        router.push("/catalog");

        return;
      }

      const carListings = await fetchCarListings({
        page,
        minPrice: priceRange.minPrice,
        maxPrice: priceRange.maxPrice,
      });

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
    if (postings.length <= 2) setPage((prev) => prev + 1);
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
