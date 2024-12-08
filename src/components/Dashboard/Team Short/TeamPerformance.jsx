import React from "react";
import "./css/TeamPerformance.css";

const teamData = [
  {
    id: 1,
    name: "Arjun Kumar",
    role: "MD",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: "Ravi Mehta",
    role: "MD",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Anil Joshi",
    role: "ASM",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Rajesh Singh",
    role: "ASM",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Deepak Patel",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Deepak Patel",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "hgbh nhyu",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 7,
    name: "skjd skmd",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TeamPerformance = () => {
  return (
    <div style={{ height: "380px" }}>
      <div className="team-performance-container">
        <div className="header">TEAM PERFORMANCE</div>
        <div className="team-list">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-rank">{member.id}</div>
              <img
                src={member.avatar}
                alt={`${member.name}`}
                className="member-avatar"
              />
              <div className="member-details">
                <div className="member-name">
                  {member.name}{" "}
                  <span className="member-role">({member.role})</span>
                </div>
                <div className="member-stats">
                  Target: {member.target} | Achieved: {member.achieved}
                </div>
              </div>
              <div className="member-progress">{member.progress}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="view-all">View All</div>
    </div>
  );
};

export default TeamPerformance;
