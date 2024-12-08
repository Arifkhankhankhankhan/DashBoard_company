import React from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import video from "../../assets/Group134.png"
import notification from "../../assets/notification.png";
import account from "../../assets/Group 1.png";
import option from "../../assets/Vector.png";
import line from "../../assets/Line 15.png";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      
      <FaBars onClick={toggleSidebar} className="menu-icon" />
      <div className="navbar-right">
        <div className="nav-right flex-div">
          <img className="video" src={video} alt="video icon" />
          <img className="notification" src={notification} alt="notification icon" />
          <div className="nav-right flex2">
            <img className="account" src={account} alt="account icon" />
          <p>Paddy Avate</p>
          <img className="option" src={option} alt="options" />
          <img className="line" src={line} alt="line separator" /></div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;





















