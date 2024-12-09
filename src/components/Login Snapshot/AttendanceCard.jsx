import React from "react";
import "./css/AttendanceCard.css";

const AttendanceCard = () => {
  const totalAttendance = 200;
  const liveAttendance = 70;
  const offlineAttendance = 130;

  return (
    <div className="attendance-card">
      <div className="attendance-header">
        <span className="attendance-count">{totalAttendance}</span>
        <span className="attendance-label">Attendance</span>
      </div>
      <hr className="divider" />
      <div className="attendance-details">
        <div className="attendance-row">
          <span className="attendance-type">Live:</span>
          <div className="progress-bar live">
            <div
              className="progress-fill"
              style={{ width: `${(liveAttendance / totalAttendance) * 100}%` }}
            ></div>
          </div>
          <span className="attendance-value">{liveAttendance}</span>
        </div>
        <div className="attendance-row">
          <span className="attendance-type">Offline:</span>
          <div className="progress-bar offline">
            <div
              className="progress-fill"
              style={{
                width: `${(offlineAttendance / totalAttendance) * 100}%`,
              }}
            ></div>
          </div>
          <span className="attendance-value">{offlineAttendance}</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
