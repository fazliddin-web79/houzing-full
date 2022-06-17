import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./style";

export const Footer = () => {
  return (
    <>
      <Outlet />
      <Container>Footer</Container>
    </>
  );
};

export default Footer;
