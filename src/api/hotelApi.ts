import { HotelDetail, HotelList } from "../types";
import axiosInstance from "./axiosInstance";

export const fetchHotels = async (_page: number): Promise<HotelList> => {
  try {
    const response = await axiosInstance.get("/hotels", {
      params: {
        _limit: 5,
        _page,
      },
    });
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
