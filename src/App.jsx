import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Btn from "./components/Btn/Btn";
import Dashboard from "./components/Dashboard/Dashboard"
import GapAnalysis from "./components/GapAnalysis/GapAnalysis"
import "./App.css";
import PaymentSnapshot from "./components/Paymentsnap/PaymentSnapshot";
import Insights from "./components/Insights/Insights";
import SecondaryCoverage from "./components/SecondaryCoverage/SecondaryCoverage";
import DropSize from "./components/SecondaryCoverage/DropSize";
import SecondarySnapshot from "./components/SecondaryCoverage/SecondarySnapshot";
import GapSub from "./components/GapSub/GapSub";



const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {}
      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        { <Btn />}
        { <Dashboard /> }
        <Insights/>
        <GapSub/>
        <SecondarySnapshot/>
        <DropSize />
      
      <SecondaryCoverage />
       
        <GapAnalysis/>
        <PaymentSnapshot/>
      </div>
    </div>
  );
};

export default App;
