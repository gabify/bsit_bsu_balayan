import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import HomeLayout from "./layout/HomeLayout";
import AreaLayout from "./layout/AreaLayout";

import Homepage from "./pages/Homepage";
import AreaPage from "./pages/AreaPages";
import ProgramActivities from "./pages/bsit/ProgramActivities";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      {/* route for homepage */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/activities" element={<ProgramActivities />} />
      </Route>

      {/* route for areas */}
      <Route element={<AreaLayout />}>
        <Route path="/areas/:slug" element={<AreaPage />} />
      </Route>

      {/* 404: redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>,
);
