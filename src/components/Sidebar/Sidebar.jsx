import React from "react";
import { FaUser, FaChartPie, FaBullseye, FaHandshake } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
     
     
      <div className="sidebar-header">
      <h3>LOGO</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaChartPie /> {isSidebarOpen && "Dashboard"}
        </li>
        <li>
          <FaBullseye /> {isSidebarOpen && "Brands"}
        </li>
        <li>
          <FaUser /> {isSidebarOpen && "Sales Person"}
        </li>
        <li>
          <FaBullseye /> {isSidebarOpen && "Target"}
        </li>
        <li>
          <FaHandshake /> {isSidebarOpen && "Channel Partners"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;


