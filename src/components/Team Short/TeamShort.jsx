import React from "react";
import TeamPerformance from "./TeamPerformance";

const TeamShort = () => {
  return (
    <div
      style={{
        padding: "15px 0px",
        fontFamily: "Arial, sans-serif",
        paddingRight: "15px",
        border: "2px solid #87CEEB",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <div style={{ backgroundColor: "#87CEEB", padding: "10px 40px" }}>
            <p style={{ margin: 0, color: "#ffffff", fontSize: "25px" }}>
              Team Snapshot
            </p>
          </div>
        </div>
      </div>

      <div style={{ margin: "20px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TeamPerformance />
          <TeamPerformance />
          <TeamPerformance />
        </div>
      </div>
    </div>
  );
};

export default TeamShort;
