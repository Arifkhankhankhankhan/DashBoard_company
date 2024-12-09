import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SalesChart = () => {
  // Chart Data
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Target",
        data: [70, 80, 60, 40, 50, 70, 90, 60, 50],
        backgroundColor: "#FC8C4D",
        borderRadius: 5,
      },
      {
        label: "Achieved",
        data: [60, 70, 50, 30, 40, 60, 80, 50, 40],
        backgroundColor: "#87CEEB",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          font: {
            size: 12,
          },
        },
        grid: {
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "20px auto", padding: "10px" }}>
      {/* <h3 style={{ textAlign: "center" }}>Sales Snapshot</h3> */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
