import { getSeenPostingIds } from "../../lib/localstorage/seen-postings/get-seen-posting-ids";
import { getPriceCatalog } from "@/shared/lib/localstorage/price-catalog/get-price-catalog";
import { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { fetchCarListings } from "../../api/fetch-car-listing-page";
import { CarListing } from "@/types/car-listing";
import { useRouter } from "next/navigation";

export function usePostings() {
  const [postings, setPostings] = useState<CarListing[]>([]);
  const [page, setPage] = useState(1);
  const fetchTryCount = useRef(0);
  const router = useRouter();
  const leadingCard = useRef<"left" | "right">("left");

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
    if (fetchTryCount.current >= 30) {
      console.error("Infinite loop detected");
      return;
    }

    if (postings.length <= 2) {
      fetchTryCount.current++;

      setPage((prev) => prev + 1);
    } else fetchTryCount.current = 0;
  }, [postings]);

  // Get next posting and remove old one
  const getNextPosting = useCallback(() => {
    const nextPosting = postings[1];

    setPostings((prev) => [...prev.slice(1)]);

    leadingCard.current = leadingCard.current === "left" ? "right" : "left";

    return nextPosting;
  }, [postings]);

  const leftCard = useMemo(
    () => postings[leadingCard.current === "left" ? 0 : 1],
    [postings]
  );

  const rightCard = useMemo(
    () => postings[leadingCard.current === "right" ? 0 : 1],
    [postings]
  );

  return {
    leadingCard: leadingCard.current,
    allPostings: postings,
    getNextPosting,
    rightCard,
    leftCard,
  };
}
