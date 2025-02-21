import React from "react";
import { HotelDataType } from "../../types";
import styles from "./card.module.scss";

interface HotelCardProps {
  hotel: HotelDataType;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {!hotel.image ? (
          <img
            alt={hotel.name}
            src={`https://placehold.co/800x200?text=Hotel`}
          />
        ) : (
          <img alt={hotel.name} src={`/images/${hotel.image}`} loading="lazy" />
        )}
      </div>
      <div className={styles.cardContent}>
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <div className={styles.stars}>
          <p>{"⭐".repeat(hotel.stars)}</p>
        </div>
        <a href={`/hotels/${hotel.id}`} className={styles.viewDetails}>
          View Details
        </a>
      </div>
    </div>
  );
};

export default HotelCard;
