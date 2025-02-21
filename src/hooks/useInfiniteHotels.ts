import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { fetchHotels } from "../api/hotelApi";
import type { HotelDataType } from "../types";

export const useInfiniteHotels = (initialLimit = 1) => {
  const [page, setPage] = useState(initialLimit);
  const [hasMore, setHasMore] = useState(true);
  const [hotels, setHotels] = useState<HotelDataType[]>([]);

  const { data, isLoading, error } = useQuery(
    ["hotels", page],
    () => fetchHotels(page),
    {
      keepPreviousData: true,
    }
  );
  useEffect(() => {
    if (data) {
      setHotels((prevHotels) => [...prevHotels, ...data]);
    }
    if (data && data.length < 5) {
      setHasMore(false);
    }
  }, [data, page]);

  const loadMoreHotels = useCallback(() => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore]);

  return { hotels, isLoading, error, loadMoreHotels, hasMore, setHotels };
};
