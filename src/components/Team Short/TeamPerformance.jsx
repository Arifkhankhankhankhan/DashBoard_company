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
    avatar: "https://th.bing.com/th/id/OIP.ZkjhmazMTGzrA6nDA2VjSgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Ravi Mehta",
    role: "MD",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://th.bing.com/th/id/OIP.SNkWYkSADjE4SnqNyxClVAHaJS?w=816&h=1024&rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Anil Joshi",
    role: "ASM",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://th.bing.com/th/id/OIP.opTPZVt7IZneP6gomi3TLgHaHI?w=626&h=603&rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Rajesh Singh",
    role: "ASM",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://img.freepik.com/premium-photo/happy-female-male-accountant-looking-camera_927165-1613.jpg",
  },
  {
    id: 5,
    name: "Deepak Patel",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=",
  },
  {
    id: 5,
    name: "Deepak Patel",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://www.collegeadvisor.com/wp-content/uploads/2021/12/Abdalla-Osman-1024x830.jpeg",
  },
  {
    id: 6,
    name: "hgbh nhyu",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://th.bing.com/th/id/OIP.4pm6d2oc6tewmmG8RMEwIAHaHa?w=768&h=768&rs=1&pid=ImgDetMain",
  },

  {
    id: 7,
    name: "skjd skmd",
    role: "SO",
    target: "1 L",
    achieved: "80k",
    progress: "80%",
    avatar: "https://th.bing.com/th/id/OIP.FDHFBSBQY-4CZWH5zr3iKAHaH5?w=563&h=600&rs=1&pid=ImgDetMain",
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
