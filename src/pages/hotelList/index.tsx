import Layout from "../../layout/index";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HotelMap } from "../../components/Map";
import { fetchHotels } from "../../hooks/useHotels";
import { HotelDataType } from "../../types";
import HotelCard from "../../components/Card";
import styles from "./hotelList.module.scss";

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
      <div className={styles.backgroundImageContainer} />
      <div className={styles.searchBoxContainer}>
        <div>
          <h1>Hotel List</h1>
          <input
            className={styles.searchBox}
            type="text"
            placeholder="Search hotels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.gridLayout}>
        <div className={styles.cardContainer}>
          <ul>
            {filteredHotels?.map((hotel: HotelDataType) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </ul>
        </div>
        <div className={styles.mapContainer}>
          <HotelMap />
        </div>
      </div>
    </Layout>
  );
};
