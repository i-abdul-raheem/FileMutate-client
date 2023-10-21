import { Route, Routes } from "react-router-dom";
import { CompressImage, Home, Page404 } from "../pages";

export const DefaultRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/compress-image" element={<CompressImage />} />
    <Route path="/*" element={<Page404 />} />
  </Routes>
);
