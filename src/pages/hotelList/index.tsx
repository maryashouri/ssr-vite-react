import Layout from "../../layout/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HotelMap } from "../../components/Map";
import { fetchHotels } from "../../hooks/useHotels";

export const HotelList = () => {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
    suspense: true, // Enable Suspense
  });

  const [search, setSearch] = useState("");

  if (isLoading) return <p>Loading hotels...</p>;
  if (error) return <p>Failed to load hotels.</p>;

  const filteredHotels = hotels?.filter(
    (hotel: any) =>
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
      <div
        className="havij"
        style={{ width: "550px", height: "600px", backgroundColor: "red" }}
      >
        <HotelMap />
      </div>
      <ul>
        {filteredHotels.map((hotel: any) => (
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
