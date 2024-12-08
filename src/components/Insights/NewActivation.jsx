import React from "react";

function NewActivation() {
  const activations = [
    { name: "Verma Enterprises", lastOrder: "5L", achieved: 2 },
    { name: "SK Enterprises", lastOrder: "5L", achieved: 2 },
    { name: "SP Traders", lastOrder: "5L", achieved: 1 },
    { name: "Gupta Enterprises", lastOrder: "5L", achieved: 1 },
    { name: "YS Traders", lastOrder: "5L", achieved: 1 },
  ];

  return (
    <div className="card">
      <h3>New Activation</h3>
      <ul>
        {activations.map((activation, index) => (
          <li key={index}>
            <span>{index + 1}. {activation.name}</span>
            <span>Last Order: {activation.lastOrder}</span>
            <span>Achieved: {activation.achieved}</span>
          </li>
        ))}
      </ul>
      <button>View All</button>
    </div>
  );
}

export default NewActivation;