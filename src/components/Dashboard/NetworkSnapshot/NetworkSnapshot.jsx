import React from 'react';
import './NetworkSnapshot.css';

const primaryData = [
  { label: "Total CP", value: 500, color: "red" },
  { label: "Active CP", value: 100, color: "green" },
  { label: "Zero Order CP", value: 400, color: "purple" },
  { label: "New CP", value: 100, color: "orange" },
  { label: "Orders", value: 300, color: "cyan" },
];

const secondaryData = [
  { label: "Total Retailers", value: 50000, color: "red" },
  { label: "Active Retailers", value: 10000, color: "green" },
  { label: "Zero Order Retailers", value: 40000, color: "purple" },
  { label: "New Retailers", value: 10000, color: "orange" },
  { label: "Orders", value: 30000, color: "cyan" },
];

const DataBlock = ({ data }) => (
  <div className="data-block">
    {data.map((item, index) => (
      <div className="data-row" key={index}>
        <span className="label">{item.label}:</span>
        <div className="bar" style={{ backgroundColor: item.color }}></div>
        <span className="value">{item.value}</span>
      </div>
    ))}
  </div>
);

const NetworkSnapshot = () => {
  return (
    <div className="network-snapshot">
      <h3>Network Snapshot</h3>
      <div className="snapshot-container">
        <div className="snapshot-card">
          <h4>Primary (Channel Partner)</h4>
          <DataBlock data={primaryData} />
        </div>
        <div className="snapshot-card">
          <h4>Secondary (Retailers)</h4>
          <DataBlock data={secondaryData} />
        </div>
      </div>
    </div>
  );
};

export default NetworkSnapshot;
