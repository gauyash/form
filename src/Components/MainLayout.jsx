import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="container-custom mx-auto rounded-2xl">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
