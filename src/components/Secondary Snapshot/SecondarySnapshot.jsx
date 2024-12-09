

import React, { useState } from "react";
import "./css/Secondary.css"; // Add your CSS for custom styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./css/DonutDashboard.css";
import DonutChartWithLegend from "./DonutChartWithLegend";

const DonutChart = ({ percentage, color, size = 180 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: color,
          pathColor: color,
          trailColor: "#e0e0e0",
        })}
      />
    </div>
  );
};

const SecdarySnapshot = () => {
  // Data for Drop Size
  const [timeSlots, setTimeSlots] = useState([
    {
      label: "Before 10:30AM",
      percentage: 40,
      color: "#00c1f4",
      count: 250,
    },
    {
      label: "9:30-10:00 AM",
      percentage: 64,
      color: "#fcb900",
      count: 85,
    },
    {
      label: "10:00-10:30 AM",
      percentage: 79,
      color: "#9b59b6",
      count: 80,
    },
    {
      label: "After 10:30AM",
      percentage: 97,
      color: "#32cd32",
      count: 42,
    },
  ]);

  return (
    <div
      style={{
        padding: "15px 0px",
        fontFamily: "Arial, sans-serif",
        paddingRight: "15px",
        border: "2px solid #87CEEB",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "40%" }}>
          <div style={{ backgroundColor: "#87CEEB", padding: "10px 40px" }}>
            <p style={{ margin: 0, color: "#ffffff", fontSize: "25px" }}>
              Secondary Snapshot
            </p>
          </div>

          <div>
            <DonutChartWithLegend />
          </div>
        </div>

        <div style={{ width: "58%" }}>
          <div style={{ backgroundColor: "#87CEEB", padding: "10px 40px" }}>
            <p style={{ margin: 0, color: "#ffffff", fontSize: "25px" }}>
              Drop Size (AOV)
            </p>
          </div>
          <div className="dashboard-container">
            <div className="charts-row">
              {timeSlots.map((slot, index) => (
                <div key={index} className="chart-container">
                  <div className="count-text">{slot.count}</div>
                  <DonutChart
                    percentage={slot.percentage}
                    color={slot.color}
                    size={90}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecdarySnapshot;
