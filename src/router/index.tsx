import { Routes, Route } from "react-router-dom";

import { HotelList, HotelDetail, About } from "../pages";

//import Error from "../components/Error";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<HotelList />} />
      <Route path="/hotels" element={<HotelList />} />
      <Route path="/hotel/:id" element={<HotelDetail />} />
      <Route path="/about" element={<About />} />

      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};
