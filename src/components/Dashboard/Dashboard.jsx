import React from "react";
import "./Dashborad.css";
import TeamShort from "./Team Short/TeamShort";
import SalesSnapshot from "./Sales Snapshot/SalesSnapshot";
import LoginSnapshot from "./Login Snapshot/LoginSnapshot";
import NetworkSnapshot from './NetworkSnapshot/NetworkSnapshot';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div style={{ margin: "30px 0px" }}>
      <SalesSnapshot />
      </div>

      <div style={{ margin: "30px 0px" }}>
        <TeamShort />

      </div>
      
      <div style={{ margin: "30px 0px" }}>
        <LoginSnapshot />
      </div><div style={{ margin: "30px 0px" }}>
      <NetworkSnapshot />
      </div>
     
   
    </div>
  );
};

export default Dashboard;
