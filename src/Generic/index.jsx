import React from "react";
import { useLocation } from "react-router-dom";

export const Generic = () => {
  // const location = useLocation();
  const location = useLocation();
  return <h1>This page {location.pathname} coming soon ...</h1>;
};

export default Generic;
