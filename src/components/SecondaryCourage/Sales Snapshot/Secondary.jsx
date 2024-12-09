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

const Secondary = () => {
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
    maintainAspectRatio: false, // Allow chart to grow in size
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 16, // Bigger font size for legend
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
            size: 16, // Bigger font size for x-axis
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          font: {
            size: 16, // Bigger font size for y-axis
          },
        },
        grid: {
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "800px", // Make the chart wider
        height: "500px", // Set a fixed height
        margin: "50px auto", // Center the chart and add margin
        padding: "20px",
        backgroundColor: "#f8f9fa", // Add a light background
        borderRadius: "10px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow for better visuals
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default Secondary;
