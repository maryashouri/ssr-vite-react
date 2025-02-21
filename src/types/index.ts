// src/types/hotel.ts

export interface Location {
  lat: number;
  long: number;
}

export interface HotelDataType {
  id: number;
  name: string;
  description: string;
  location: Location;
  stars: number;
  image: string;
}

export type HotelList = HotelDataType[];

export interface HotelDetail extends HotelDataType {
  comments?: { user: string; text: string }[] | [];
}
