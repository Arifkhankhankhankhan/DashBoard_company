import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";
import Dropdown from "./Dropdown";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const SalesSnapshot = () => {
  const [selectedBrand, setSelectedBrand] = useState("brand_a");

  // Mock Data
  const brands = [
    { label: "Brand A", value: "brand_a" },
    { label: "Brand B", value: "brand_b" },
    { label: "Brand C", value: "brand_c" },
    { label: "Brand D", value: "brand_d" },
  ];

  const salesData = {
    brand_a: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      target: [70, 80, 60, 40, 50, 70, 90, 60, 50],
      achieved: [60, 70, 50, 30, 40, 60, 80, 50, 40],
    },
    brand_b: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      target: [60, 70, 50, 40, 60, 80, 100, 70, 60],
      achieved: [50, 60, 40, 30, 50, 70, 90, 60, 50],
    },
    brand_c: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      target: [50, 60, 40, 20, 40, 60, 80, 40, 30],
      achieved: [40, 50, 30, 10, 30, 50, 70, 30, 20],
    },
    brand_d: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      target: [10, 60, 40, 20, 40, 50, 90, 20, 50],
      achieved: [40, 50, 30, 10, 50, 40, 60, 50, 30],
    },
  };

  const chartData = salesData[selectedBrand];

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Target",
        data: chartData.target,
        backgroundColor: "#FC8C4D",
      },
      {
        label: "Achieved",
        data: chartData.achieved,
        backgroundColor: "#87CEEB",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
        <div>
          <div style={{ backgroundColor: "#39CEF3", padding: "10px 40px" }}>
            <p style={{ margin: 0, color: "#ffffff", fontSize: "25px" }}>
              Sales Snapshot
            </p>
          </div>
        </div>
        <div>
          <Dropdown
            options={brands}
            onSelect={(value) => setSelectedBrand(value)}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          height: 280,
          margin: "10px 20px",
          maxWidth: "600px",
          boxShadow: "0px 2px 4px  #87CEEB",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "90%",
          }}
        >
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalesSnapshot;