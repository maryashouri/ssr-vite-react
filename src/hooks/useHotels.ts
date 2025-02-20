import { useQuery } from "@tanstack/react-query";

export const fetchHotels = async () => {
  const response = await fetch("http://localhost:5000/hotels");
  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }
  return response.json();
};

export function useHotels() {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });
}
