import React from "react";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";

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
        {localStorage.getItem("key") && localStorage.getItem("secret") ? (
          <Route path="/" element={<Navigate to={"/properties"} />} />
        ) : (
          <Route>
            <Route path="/" element={<Navigate to={"/sign-up"} />} />
            <Route path="/properties" element={<Navigate to={"/sign-up"} />} />
          </Route>
        )}
      </Routes>
    </>
  );
};

export default App;
