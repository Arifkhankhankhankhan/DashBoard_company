import React from "react";

function TopDistributors() {
  const distributors = [
    { name: "Verma Enterprises", target: 10, achieved: 8 },
    { name: "SK Enterprises", target: 10, achieved: 8 },
    { name: "SP Traders", target: 10, achieved: 7 },
    { name: "Gupta Enterprises", target: 10, achieved: 6 },
    { name: "YS Traders", target: 10, achieved: 6 },
  ];

  return (
    <div className="card">
      <h3>Top 10 Distributors</h3>
      <ul>
        {distributors.map((distributor, index) => (
          <li key={index}>
            <span>{index + 1}. {distributor.name}</span>
            <span>Target: {distributor.target}</span>
            <span>Achieved: {distributor.achieved}</span>
          </li>
        ))}
      </ul>
      <button>View All</button>
    </div>
  );
}

export default TopDistributors;