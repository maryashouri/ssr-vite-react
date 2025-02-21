import { HotelDetail } from "../../types/index";
import { fetchHotelDetail } from "../../hooks/useHotels";
import Layout from "../../layout";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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
      <h1>{data?.name}</h1>
      <p>
        <strong>Description:</strong> {data?.description}
      </p>
      <p>
        <strong>Location:</strong> Latitude: {data?.location.lat}, Longitude:{" "}
        {data?.location.long}
      </p>
      <p>
        <strong>Stars:</strong> {data?.stars}
      </p>
    </Layout>
  );
};
