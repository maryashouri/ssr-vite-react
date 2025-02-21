import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { useHotels } from "../../hooks/useHotels";
import type { HotelDetail } from "../../types";

export const HotelMap = () => {
  const [leafletModule, setLeafletModule] = useState<any>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  const { data: hotels, isLoading, error } = useHotels();

  if (isLoading) return <p>Loading map...</p>;
  if (error) return <p>Failed to load hotels.</p>;
  useEffect(() => {
    setIsBrowser(true);

    import("react-leaflet")
      .then((module) => {
        console.log("Leaflet module loaded", module); // Add this line for debugging
        setLeafletModule(module);
      })
      .catch((error) => {
        console.error("Error loading Leaflet module:", error); // Log any import errors
      });
  }, []);

  if (!isBrowser || !leafletModule) {
    return <p>Loading map...</p>; // Render a loading message or placeholder
  }

  const { MapContainer, TileLayer, Marker, Popup } = leafletModule;
  const bounds = [
    [35.5, 51.3], // Southwest corner of Tehran
    [35.9, 51.6], // Northeast corner of Tehran
  ];

  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
      maxBounds={bounds}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {hotels?.map((hotel: HotelDetail) => (
        <Marker
          key={hotel.id}
          position={[hotel.location.lat, hotel.location.long]}
        >
          <Popup>
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <a href={`/hotels/${hotel.id}`}>View Details</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
