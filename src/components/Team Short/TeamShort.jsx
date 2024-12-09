import React from "react";
import TeamPerformance from "./TeamPerformance";

const TeamShort = () => {
  return (
    <div
    style={{
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      border: "2px solid #D3E4F3",
      borderRadius: "8px",
      backgroundColor: "#F9FAFB",
    }}
  >
    <div
      style={{
        backgroundColor: "#1DC4E9",
        padding: "15px 30px",
        marginBottom: "20px",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "flex-start", 
        width: "fit-content", 
       marginLeft:"-20px"
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#ffffff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        TEAM SNAPSHOT
      </p>
    </div>
  

      {/* Flexbox layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "space-between",
        }}
      >
        <TeamPerformance title="TEAM PERFORMANCE" />
        <TeamPerformance title="NEW ACTIVATION" />
        <TeamPerformance title="SKU PERFORMANCE (SET)" />
      </div>
    </div>
  );
};

export default TeamShort;
