import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Select from "react-select";
import "./css/DonutChartDashboard.css";

const DonutChart = ({ percentage, color }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        textColor: color,
        pathColor: color,
        trailColor: "#e0e0e0",
      })}
    />
  );
};

const DonutChartDashboard = () => {
  const [timeSlots, setTimeSlots] = useState([
    {
      label: "Before 10:30AM",
      percentage: 40,
      color: "#00c1f4",
      count: 95,
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

  const options = timeSlots.map((slot) => ({
    value: slot.label,
    label: slot.label,
  }));

  return (
    <div className="dashboard-container">
      <div className="charts-row">
        {timeSlots.map((slot, index) => (
          <div key={index} className="chart-container">
            <Select
              defaultValue={{ value: slot.label, label: slot.label }}
              options={options}
              className="dropdown"
            />
            <DonutChart percentage={slot.percentage} color={slot.color} />
            <div className="count-text">{slot.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChartDashboard;
