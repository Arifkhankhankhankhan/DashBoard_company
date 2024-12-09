import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DonutChartWithLegend = () => {
  // Data for the chart
  const orderPercentage = 100; // Example: Orders are 60%
  const activityPercentage = 40; // Example: Activity is 40%

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        gap: "20px",
        boxShadow: "0 4px 4px #87CEEB",
        marginTop: 10,
        marginLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        padding: 10,
      }}
    >
      <div style={{ display: "flex", gap: "15px", alignItems: "left" }}>
        <div style={{ display: "flex", alignItems: "left", gap: "5px" }}>
          <div
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "#ffa500", // Orange for Orders
              borderRadius: "50%",
            }}
          ></div>
          <span>Orders</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "#9370db", // Purple for Activity
              borderRadius: "50%",
            }}
          ></div>
          <span>Activity</span>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "160px",
          height: "160px",
          // alignItems: "center",
          flex: 1,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <CircularProgressbarWithChildren
          value={orderPercentage}
          styles={buildStyles({
            pathColor: "#ffa500", // Orange for Orders
            trailColor: "#d3d3d3", // Light gray for the trail
          })}
        >
          {/* Inner Circular Progress Bar */}
          <CircularProgressbarWithChildren
            value={activityPercentage}
            styles={buildStyles({
              pathColor: "#9370db", // Purple for Activity
              trailColor: "transparent", // Transparent to avoid overlap
            })}
          />
          {/* Center Label */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <p style={{ fontSize: 10 }}>TC = Order + Activity</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      {/* Legend */}
    </div>
  );
};

export default DonutChartWithLegend;
