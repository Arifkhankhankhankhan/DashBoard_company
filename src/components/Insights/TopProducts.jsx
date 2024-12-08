import React from "react";

function TopProducts() {
  const products = [
    { name: "Maggie", setCount: 100, value: "₹5000" },
    { name: "Nestle", setCount: 80, value: "₹4000" },
    { name: "CocaCola", setCount: 70, value: "₹3500" },
    { name: "Fanta", setCount: 60, value: "₹3000" },
    { name: "CreamBell", setCount: 50, value: "₹2500" },
  ];

  return (
    <div className="card">
      <h3>Top 10 Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <span>{index + 1}. {product.name}</span>
            <span>Set Count: {product.setCount}</span>
            <span>Value: {product.value}</span>
          </li>
        ))}
      </ul>
      <button>View All</button>
    </div>
  );
}

export default TopProducts;