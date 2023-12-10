import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[68px]" />
      <Outlet />
    </>
  );
};

export default Layout;
