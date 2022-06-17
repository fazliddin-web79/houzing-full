import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Container, Wrap } from "./style";
import { navbar } from "../../utils/navbar";
import logo from "../../assets/icons/logo.svg";
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
            <Wrap.Image src={logo} />
          </Wrap.Item>
          <Wrap.Item>
            {navbar.map((item) => {
              return (
                <NavLink style={styles(item.path)} to={item.path}>
                  {item.title}
                </NavLink>
              );
            })}
          </Wrap.Item>
          <Wrap.Item>
            <Wrap.Control src={login} />
          </Wrap.Item>
        </Wrap>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
