import React from "react";
import airbnb from "../../Images/airbnb.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={airbnb} alt="Airbnb Logo" className="nav--logo" />
    </nav>
  );
};

export default Navbar;
