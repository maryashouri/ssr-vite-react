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
}

export type HotelList = HotelDataType[];

export interface HotelDetail extends HotelDataType {
  // You can add more fields if necessary, for example:
  reviews?: string[]; // Optional reviews field
  amenities?: string[]; // Optional amenities field
}
