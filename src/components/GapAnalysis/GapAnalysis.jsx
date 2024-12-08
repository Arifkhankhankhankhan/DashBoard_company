import React from "react";
import "./GapAnalysis.css";

const GapAnalysis = () => {
  const gapData = [
    { name: "Arjun Kumar (MD)", order: 100, dispatch: 20, gap: -80 },
    { name: "Ravi Mehta (MD)", order: 120, dispatch: 30, gap: -90 },
    { name: "Anil Joshi (ASM)", order: 110, dispatch: 40, gap: -70 },
    { name: "Rajesh Singh (ASM)", order: 100, dispatch: 20, gap: -80 },
    { name: "Deepak Patel (ASM)", order: 120, dispatch: 30, gap: -90 },
  ];

  return (
    <div className="gap-analysis">
      <h2>GAP ANALYSIS (TEAM)</h2>
      <table className="gap-table">
        <thead>
          <tr>
            <th>Sales Team Name</th>
            <th>Order</th>
            <th>Dispatch</th>
            <th>Gap Analysis</th>
          </tr>
        </thead>
        <tbody>
          {gapData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.order}</td>
              <td>{row.dispatch}</td>
              <td>{row.gap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GapAnalysis;
