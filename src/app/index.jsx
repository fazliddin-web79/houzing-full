import React from "react";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";
import SignIn from "../components/signin";
import SignUp from "../components/signup";

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            {navbar.map((item) => {
              return (
                <Route key={item.id} path={item.path} element={item.element} />
              );
            })}
            <Route path={"/sign-in"} element={<SignIn />} />
            <Route path={"/sign-up"} element={<SignUp />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        1`q Az`
      </Routes>
    </>
  );
};

export default App;
