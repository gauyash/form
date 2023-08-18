import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="container-custom mx-auto">
      <Header />

      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
