import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Container, Wrap } from "./style";
import { navbar } from "../../utils/navbar";
import logo from "../../assets/icons/61f7cd1767553f0004c53e6e.png";
import login from "../../assets/icons/login.svg";

export const Navbar = () => {
  const location = useLocation();

  const styles = (name) => {
    const isactive = location.pathname.includes(name);
    return {
      fontWeight: isactive ? "800" : "500",
      color: isactive ? "teal" : "white",
      margin: "auto 32px",
      letterSpacing: "2px",
    };
  };
  return (
    <>
      <Container>
        <Wrap>
          <Wrap.Item>
            <NavLink style={styles("/home")} to={"/home"}>
              <Wrap.Image src={logo} />
            </NavLink>
          </Wrap.Item>
          <Wrap.Item>
            {navbar.map((item) => {
              return (
                <NavLink key={item.id} style={styles(item.path)} to={item.path}>
                  {item.title}
                </NavLink>
              );
            })}
          </Wrap.Item>
          {localStorage.getItem("key") && localStorage.getItem("secret") ? (
            ""
          ) : (
            <Wrap.Item>
              <NavLink to={"/sign-in"}>
                <Wrap.Control src={login} />
              </NavLink>
            </Wrap.Item>
          )}
        </Wrap>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
