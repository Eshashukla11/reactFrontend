import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="navbar-wrap">
      <div className="img-wrap">
        <img src="/Img-15.png" alt="" />
      </div>
      <div className="nav-menu">
        <p className="nav-menu-item">Services</p>
        <GiHamburgerMenu className="hamburger-menu" />
      </div>
    </div>
  );
}

export default Navbar;
