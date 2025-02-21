import { useQuery } from "@tanstack/react-query";

import { HotelDetail, HotelList } from "../types"; // Import types
import axiosInstance from "../api/axiosInstance";

export const fetchHotels = async (): Promise<HotelList> => {
  try {
    const response = await axiosInstance.get("/hotels");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch hotels: Unknown error");
  }
};

export const fetchHotelDetail = async (id: number): Promise<HotelDetail> => {
  try {
    const response = await axiosInstance.get(`/hotels/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch hotel details: Unknown error");
  }
};

export function useHotels() {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });
}
