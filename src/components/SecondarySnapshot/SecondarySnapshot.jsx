import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import './SecondarySnapshot.css';

const snapshotData = [
  { name: "Orders", value: 60, color: "#FFA500" }, // Orange
  { name: "Activity", value: 40, color: "#9370DB" }, // Purple
];

const dropSizeData = [
  { name: "<250", value: 40, color: "#B0C4DE" },
  { name: "250-500", value: 64, color: "#FFA500" },
  { name: "500-750", value: 79, color: "#9370DB" },
  { name: ">751", value: 97, color: "#ADFF2F" },
];

const SecondarySnapshot = () => {
  return (
    <div className="secondary-snapshot">
      <div className="section">
        <h3>Secondary Snapshot</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={snapshotData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {snapshotData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend layout="horizontal" align="center" verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section">
        <h3>Drop Size (AOV)</h3>
        <div className="drop-size-container">
          {dropSizeData.map((entry, index) => (
            <div key={index} className="drop-item">
              <div className="donut-chart" style={{ background: `conic-gradient(${entry.color} ${entry.value}%, #e0e0e0 0)` }}>
                <span>{entry.value}%</span>
              </div>
              <p>{entry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondarySnapshot;
