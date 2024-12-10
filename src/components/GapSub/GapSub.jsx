import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const GapSub = () => {
  // Chart Data
  const data = {
    labels: ["Classic Salted", "Tingling Tomato", "Masti Masala", "Cream Onion"],
    datasets: [
      {
        label: "Order",
        data: [10, 20, 15, 40],
        backgroundColor: "#937CFF",
      },
      {
        label: "Dispatch",
        data: [15, 30, 10, 50],
        backgroundColor: "#F4A43A",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000",
        },
        title: {
          display: true,
          text: "Products",
          color: "#000",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000",
        },
        title: {
          display: true,
          text: "No. of Boxes",
          color: "#000",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div
      style={{
        border: "1px solid #00C1F4",
        borderRadius: "8px",
        padding: "15px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Title Section */}
        <div
          style={{
            backgroundColor: "#00C1F4",
            padding: "10px 15px",
            marginLeft:"-15.5px"
          }}
        >
          <p
            style={{
              color: "#FFFFFF",
              margin: 0,
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            GAP ANALYSIS (SUB CATEGORY)
          </p>
        </div>

        {/* Filters Section */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              border: "1px solid #00C1F4",
              background: "transparent",
              padding: "5px 10px",
              borderRadius: "4px",
              color: "#00C1F4",
              cursor: "pointer",
            }}
          >
            Sub Category
          </button>
          <button
            style={{
              border: "1px solid #00C1F4",
              background: "transparent",
              padding: "5px 10px",
              borderRadius: "4px",
              color: "#00C1F4",
              cursor: "pointer",
            }}
          >
            MRP
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div
        style={{
          width: "100%",
          height: "400px", // Adjust height as needed
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GapSub;
