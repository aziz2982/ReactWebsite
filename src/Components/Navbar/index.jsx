import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container } from "./style";
import { Utils } from "../../Utils/index";
import logo from "../../Assets/logo/logo.svg";
import poisk from "../../Assets/imgs/poisk.svg";

function Navbar() {
  return (
    <Container>
      <div className="imgLogo">
        <img src={logo} alt="logo bor" />
      </div>
      <div className="navRight">
        {Utils.map((v) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to={v.path}
          >
            {v.name}
          </NavLink>
        ))}
        <a href="#about" className="link">About</a>
        <Button>
          <p> Order Now </p>
        </Button>
        <a href="#search" className="Npoisk">
          <img src={poisk} alt="" />
        </a>
      </div>
    </Container>
  );
}

export default Navbar;
