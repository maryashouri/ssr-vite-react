import { Routes, Route } from "react-router-dom";

import {
  HotelListPage,
  HotelDetailPage,
  AboutPage,
  NotFoundPage,
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<HotelListPage />} />
      <Route path="/hotels" element={<HotelListPage />} />
      <Route path="/hotels/:id" element={<HotelDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
