import React from "react";
import CalendarIcon from "../../../assets/Vector (6).png";
import AttendanceCard from "./AttendanceCard";
import DonutChartDashboard from "./DonutChartDashboard";

const LoginSnapshot = () => {
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
          <div style={{ backgroundColor: "#007bff", padding: "10px 40px" }}>
            <p style={{ margin: 0, color: "#ffffff", fontSize: "25px" }}>
              Login Snapshot
            </p>
          </div>
        </div>

        <div
          style={{
            border: "2px solid #87CEEB",
            width: "140px",
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 5px",
          }}
        >
          <p style={{ color: "#87CEEB" }}>Today</p>
          <img
            src={CalendarIcon}
            alt="Description"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          marginLeft: "15px",
          marginRight: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "35%" }}>
          <AttendanceCard />
        </div>
        <div style={{ width: "65%" }}>
          <DonutChartDashboard />
        </div>
      </div>
    </div>
  );
};

export default LoginSnapshot;
