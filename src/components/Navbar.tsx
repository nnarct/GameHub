import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const Menu = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    return (
      <Link to={to}>
        <li className="py-3 px-4 m-2 text-lg font-semibold rounded-xl hover:bg-[#535bf2] transition linear duration-400">
          {children}
        </li>
      </Link>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-screen bg-gray-900 flex justify-center">
        <ul className="container flex">
          <Menu to="/">Home</Menu>
          <Menu to="/about">About us</Menu>
          <Menu to="/contact">Contact us</Menu>
          <Menu to="/puzzle-house">Puzzle House</Menu>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
