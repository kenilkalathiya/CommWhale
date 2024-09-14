import React from "react";
import "../CSS/Navbar/navbar.css";
import Dropdown from "./Dropdown";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav_logo"></div>
        <div className="left_nav">
          <ul className="nav_list">
            <li>Events</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="right_nav">
            

          {/* <Dropdown /> */}
            
          {/* <button className="cart btn"><FaCartShopping /></button> */}
          <button className="nav_login btn">Sign In</button>
          <button className="nav_signup btn">Sign Up</button>
        </div>
      </div>
    </>
  );
}
