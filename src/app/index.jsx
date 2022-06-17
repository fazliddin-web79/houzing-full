import React from "react";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../components/NotFound";

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map((item) => {
            return (
              <Route key={item.id} path={item.path} element={<Navbar />} />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};

export default App;
