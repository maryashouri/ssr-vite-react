import { HotelDetail } from "../../types/index";
import { fetchHotelDetail } from "../../api/hotelApi";
import Layout from "../../layout";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./hotelDetail.module.scss";

export const HotelDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const hotelId = parseInt(id || "0", 10);

  const { data, isLoading, error } = useQuery<HotelDetail, Error>({
    queryKey: ["hotel", hotelId],
    queryFn: () => fetchHotelDetail(hotelId),
  });

  if (isLoading) return <div>Loading hotel details...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img alt={data?.name} src={`/images/${data?.image}`} />
        </div>
        <h1>{data?.name}</h1>
        <p>
          <strong>Description:</strong> {data?.description}
        </p>
        <p>
          <strong>Location:</strong> Latitude: {data?.location.lat}, Longitude:
          {data?.location.long}
        </p>
        <p>
          <strong>Stars:</strong> {data?.stars}
        </p>
        <div className="hotel-comments">
          <h3>User Comments</h3>
          {data?.comments && data.comments.length > 0 ? (
            <ul>
              {data?.comments.map((comment, index) => (
                <li key={index}>
                  <p>
                    <strong>{comment?.user}</strong>: {comment.text}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments available.</p>
          )}
        </div>
        <Link to="/hotels">Back to Hotels List</Link>
      </div>
    </Layout>
  );
};
