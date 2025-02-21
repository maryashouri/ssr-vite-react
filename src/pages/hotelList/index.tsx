import Layout from "../../layout/index";
import { useState } from "react";
import { HotelMap } from "../../components/Map";
import { HotelDataType } from "../../types";
import HotelCard from "../../components/Card";
import styles from "./hotelList.module.scss";
import { useInfiniteHotels } from "../../hooks/useInfiniteHotels";

export const HotelListPage = () => {
  const { hotels, isLoading, error, loadMoreHotels, hasMore } =
    useInfiniteHotels();

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
          <HotelMap hotels={hotels} isLoading={isLoading} />
        </div>
      </div>

      <div className={styles.moreButton}>
        {hasMore && (
          <button onClick={loadMoreHotels} className={styles.loadMoreButton}>
            Load More
          </button>
        )}
      </div>
    </Layout>
  );
};
