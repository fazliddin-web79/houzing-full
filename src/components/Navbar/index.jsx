import React from "react";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>NavBar</div>
      <Outlet />
    </>
  );
};

export default Navbar;
