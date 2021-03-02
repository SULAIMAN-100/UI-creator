import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbars.css";
import bootstrapNavImg from "./bootstrapNavImg.png";
import NavImage from "./NavImage.png";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

export const Navbars = () => {
  return (
    <div className="nav-main-container">
      <div className="navbar-nav">
        {" "}
        <a href="/select">
          {" "}
          <button className="back-btn">Back</button>
        </a>
        <h1 className="navbars-title">Select a Navbar</h1>
      </div>
      <div className="nav-list">
        <h2 className="nav-option">Bootstrap styled Navbars</h2>
        <a className="nav-container" href="BootstrapNav">
          <img className="nav-img" src={bootstrapNavImg}></img>
        </a>
        <h2 className="nav-option">Creat your own</h2>
        <a className="nav-container" href="NavDesign">
          <img className="nav-img" src={NavImage}></img>
        </a>
      </div>
    </div>
  );
};
