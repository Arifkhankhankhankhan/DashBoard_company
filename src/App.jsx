import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Btn from "./components/Btn/Btn";
import Dashboard from "./components/Dashboard/Dashboard";
import TeamShort from "./components/Team Short/TeamShort";
import SalesSnapshot from "./components/Sales Snapshot/SalesSnapshot";
import LoginSnapshot from "./components/Login Snapshot/LoginSnapshot";
import NetworkSnapshot from './components/NetworkSnapshot/NetworkSnapshot';
import Secondarycourag from "./components/SecondaryCourage/Sales Snapshot/Secondarycourag";
import Product from "./components/Product/Product";
import GapSub from "./components/GapSub/GapSub";
import SecondarySnapshot from "./components/Secondary Snapshot/SecondarySnapshot";
import PaymentSnapshot from "./components/Paymentsnap/PaymentSnapshot";
import GapAnalysis from "./components/GapAnalysis/GapAnalysis";

import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <Btn />

        <Dashboard />

        <div style={{ margin: "30px 0" }}>
          <SalesSnapshot />
        </div>

        <div style={{ margin: "30px 0" }}>
        <TeamShort />
        </div>

        <div style={{ margin: "30px 0" }}>
        <LoginSnapshot />
        </div>
         
        <div style={{ margin: "30px 0" }}>
        <NetworkSnapshot />
        </div>
       
        <div style={{ margin: "30px 0" }}>
        <Product />
        </div>
        <div style={{ margin: "30px 0" }}>
        <GapSub />
        </div>

        <div style={{ margin: "30px 0" }}>
        <SecondarySnapshot />
        </div>

        <div style={{ margin: "30px 0" }}>

         <Secondarycourag/>
         
          </div>
    

        <GapAnalysis />

        <PaymentSnapshot />
      </div>
    </div>
  );
};

export default App;
