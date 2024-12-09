
import React, { useState } from "react";
import { IoOptionsOutline } from "react-icons/io5"; 
import { MdOutlineFileDownload } from "react-icons/md";
import "./style/Btn.css";

const Btn = () => {
  const [month, setMonth] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    console.log(`Selected Month: ${e.target.value}`);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    console.log(`Selected State: ${e.target.value}`);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    console.log(`Selected City: ${e.target.value}`);
  };

  const handleDownload = () => {
    console.log("Download Report");
  };

  return (
    <div className="btn-container">
      <select className="btn-select" value={month} onChange={handleMonthChange}>
        <option value="">Month <IoOptionsOutline/></option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        {/* Add more months */}
      </select>
      <select className="btn-select" value={state} onChange={handleStateChange}>
        <option value="">State</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
        <option value="New York">New York</option>
        {/* Add more states */}
      </select>
      <select className="btn-select" value={city} onChange={handleCityChange}>
        <option value="">City</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Houston">Houston</option>
        <option value="New York City">New York City</option>
        {/* Add more cities */}
      </select>
      <button className="btn-download" onClick={handleDownload}>
      <MdOutlineFileDownload/> Target Report
      </button>
    </div>
  );
};

export default Btn;





