import React from "react";
import { Doughnut } from "react-chartjs-2";

const Leftside = () => {
 
  const data = {
    labels: ["Orders", "Activity"],
    datasets: [
      {
        data: [60, 40], 
        backgroundColor: ["#FFA500", "#8A2BE2"], 
        hoverBackgroundColor: ["#FFB84D", "#A564E3"],
        borderWidth: 0,
      },
    ],
  };

  
  const options = {
    cutout: "70%", 
    plugins: {
      legend: {
        display: true,
        position: "left", 
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true, 
      },
    },
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h3 style={{ color: "#00aaff", marginBottom: "20px" }}>
        SECONDARY SNAPSHOT
      </h3>
      <div style={{ position: "relative" }}>
        <Doughnut data={data} options={options} />
        {/* Center Text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          TC = Order+Activity
        </div>
      </div>
    </div>
  );
};

export default Leftside;
