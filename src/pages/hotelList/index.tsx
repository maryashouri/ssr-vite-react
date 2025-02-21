import Layout from "../../layout/index";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HotelMap } from "../../components/Map";
import { fetchHotels } from "../../hooks/useHotels";
import { HotelDataType } from "../../types";

export const HotelListPage = () => {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });

  const [search, setSearch] = useState("");

  if (isLoading) return <p>Loading hotels...</p>;
  if (error) return <p>Failed to load hotels.</p>;

  const filteredHotels = hotels?.filter(
    (hotel: HotelDataType) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h3>Hotel List</h3>
      <input
        type="text"
        placeholder="Search hotels..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <HotelMap />
      <ul>
        {filteredHotels?.map((hotel: HotelDataType) => (
          <li key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <a href={`/hotel/${hotel.id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
