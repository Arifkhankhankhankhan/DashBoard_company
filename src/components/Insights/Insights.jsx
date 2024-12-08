import React from "react";
import TopProducts from "./TopProducts";
import TopDistributors from "./TopDistributors";
import NewActivation from "./NewActivation";
import "./Insights.css";

function Insights() {
  return (
    <div className="insights">
      <h2>Insights Snapshot</h2>
      <div className="insights-cards">
        <TopProducts />
        <TopDistributors />
        <NewActivation />
      </div>
    </div>
  );
}

export default Insights;