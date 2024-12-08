import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "./PaymentSnapshot.css";

const PaymentSnapshot = () => {
  const [openWeek, setOpenWeek] = useState(null);

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  const weekData = {
    week1: [
      { date: "01/09/2024", planned: "5,00,000", received: "4,50,000" },
      { date: "02/09/2024", planned: "5,00,000", received: "4,00,000" },
      { date: "03/09/2024", planned: "4,00,000", received: "3,20,000" },
      { date: "04/09/2024", planned: "5,00,000", received: "4,40,000" },
      { date: "05/09/2024", planned: "3,50,000", received: "2,10,000" },
      { date: "06/09/2024", planned: "4,00,000", received: "3,50,000" },
    ],
    week2: [
        { date: "07/09/2024", planned: "6,00,000", received: "5,00,000" },
        { date: "08/09/2024", planned: "5,50,000", received: "4,80,000" },
        { date: "09/09/2024", planned: "4,50,000", received: "4,00,000" },
        { date: "10/09/2024", planned: "6,00,000", received: "5,00,000" },
        { date: "11/09/2024", planned: "5,50,000", received: "4,80,000" },
        { date: "12/09/2024", planned: "4,50,000", received: "4,00,000" },
      ],
      week3: [
        { date: "13/09/2024", planned: "4,00,000", received: "3,80,000" },
        { date: "14/09/2024", planned: "3,50,000", received: "3,00,000" },
        { date: "15/09/2024", planned: "6,00,000", received: "5,50,000" },
        { date: "16/09/2024", planned: "4,00,000", received: "3,80,000" },
        { date: "17/09/2024", planned: "3,50,000", received: "3,00,000" },
        { date: "18/09/2024", planned: "6,00,000", received: "5,50,000" },
      ],
      week4: [
        { date: "19/09/2024", planned: "7,00,000", received: "6,80,000" },
        { date: "20/09/2024", planned: "5,50,000", received: "5,20,000" },
        { date: "21/09/2024", planned: "6,50,000", received: "6,00,000" },
        { date: "22/09/2024", planned: "7,00,000", received: "6,80,000" },
        { date: "23/09/2024", planned: "5,50,000", received: "5,20,000" },
        { date: "24/09/2024", planned: "6,50,000", received: "6,00,000" },
      ],
   
  };

  return (
    <div className="payment-snapshot">
      <h2>PAYMENT SNAPSHOT</h2>
      {["week1", "week2", "week3", "week4"].map((week, index) => (
        <div key={index} className="week-container">
          <div className="week-header" onClick={() => toggleWeek(week)}>
            {`Week ${index + 1}`}
            <span>{openWeek === week ? "-" : "+"}</span>
          </div>
          {openWeek === week && weekData[week] && (
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Payment Planned (Rs)</th>
                  <th>Payment Received (Rs)</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {weekData[week].map((row, i) => (
                  <tr key={i}>
                    <td>{row.date}</td>
                    <td>{row.planned}</td>
                    <td>{row.received}</td>
                    <td><FaArrowCircleRight style={{backgroundColor: 'white', color:"#007BFF"}} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentSnapshot;
