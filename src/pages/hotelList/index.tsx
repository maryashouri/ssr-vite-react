import Layout from "../../layout/index";
import { useEffect, useState } from "react";
import { HotelMap } from "../../components/Map";
import type { HotelDataType } from "../../types";
import HotelCard from "../../components/Card";
import { useInfiniteHotels } from "../../hooks/useInfiniteHotels";
import useDebounce from "../../hooks/useDebounce";

import styles from "./hotelList.module.scss";

export const HotelListPage = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const { hotels, isLoading, error, loadMoreHotels, hasMore } =
    useInfiniteHotels(1);

  const [filtered, setFiltered] = useState(hotels);

  useEffect(() => {
    const filteredHotels = debouncedSearch
      ? hotels.filter(
          (hotel: HotelDataType) =>
            hotel.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            hotel.description
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase())
        )
      : hotels;
    setFiltered(filteredHotels);
  }, [hotels, debouncedSearch]);

  if (isLoading) return <p>Loading hotels...</p>;
  if (error) return <p>Failed to load hotels.</p>;

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
          {filtered.map((item, index) => (
            <HotelCard hotel={item} key={index} />
          ))}
        </div>
        <div className={styles.mapContainer}>
          <HotelMap hotels={filtered} isLoading={isLoading} />
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
