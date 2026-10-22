import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const AreaLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 min-h-[80vh] pt-6 md:pt-0">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AreaLayout;
