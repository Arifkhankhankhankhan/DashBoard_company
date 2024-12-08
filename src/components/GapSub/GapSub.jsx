import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './GapSub.css';

const data = [
  { name: 'Classic Salted', Order: 10, Dispatch: 20 },
  { name: 'Tingling Tomato', Order: 20, Dispatch: 30 },
  { name: 'Masti Masala', Order: 15, Dispatch: 15 },
  { name: 'Cream Onion', Order: 40, Dispatch: 50 },
];

const GapSub = () => {
  return (
    <div className="gap-sub-card">
      <div className="header">
        <h3>Gap Analysis (Sub Category)</h3>
        <div className="filters">
          <button>Sub Category</button>
          <button>MRP</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Products', position: 'insideBottom', dy: 10 }} />
          <YAxis label={{ value: 'No. of Boxes', angle: -90, position: 'insideLeft', dx: -10 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Order" fill="#8884d8" name="Order" />
          <Bar dataKey="Dispatch" fill="#ffc658" name="Dispatch" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GapSub;
