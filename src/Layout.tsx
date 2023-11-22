import React from "react";
import Navbar from "./components/Navbar";
import Advertise from "./components/Advertise";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Advertise />
      <div className="min-h-[68px]" />
      <Outlet />
    </>
  );
};

export default Layout;
