import React from "react";

const groupInfo = {
  groupName: "Code Catalysts Studio",
  tagline: "Student-led Digital Solutions Team",
  motto: "Transforming Ideas into Intelligent Systems",
  about: `
    We are a fast-moving development team building next-gen web solutions.
    Our focus is on creating clean, scalable, and user-centric applications
    with modern full-stack technologies.
  `,
  logoUrl: "https://cdn.dribbble.com/userupload/15965592/file/original-6804ef87175c01b613e79d80d570de9a.jpg",
};

const members = [
  {
    name: "Md Rasel Bhuyan",
    role: "Team Lead / Full-Stack Developer",
    profileUrl: "https://www.linkedin.com/in/rasel-bhuyan/",
    profileImg: "/images/rasel.jpeg",
  },
  {
    name: "Shahnaz Raihan Summy",
    role: "Frontend Engineer (React)",
    profileUrl: "https://your-profile-link-2.com",
    profileImg: "/images/male.png",
  },
  {
    name: "Yasin Shams Chowdhury",
    role: "Backend Engineer (Node.js + MongoDB)",
    profileUrl: "https://your-profile-link-3.com",
    profileImg: "/images/male.png",
  },
  {
    name: "Sumaiya Nasrin",
    role: "UI/UX & Quality Assurance",
    profileUrl: "https://your-profile-link-4.com",
    profileImg: "/images/female.png",
  },
];

const project = {
  name: "CampusConnect – Smart Student Task & Event Manager",
  objectives: [
    "Provide a single dashboard to manage tasks, events, and deadlines.",
    "Include status tracking, updates, and reminders for students.",
    "Use a Node.js + Express API with MongoDB database.",
    "Deliver a responsive React frontend deployed on Netlify.",
  ],
  expectedOutput:
    "A full-stack productivity web app designed to improve task management and campus event tracking.",
};

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const getInitials = (name) => {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <h1 className="group-name">{groupInfo.groupName}</h1>
          <p className="slogan">{groupInfo.tagline}</p>
          <p className="motto">“{groupInfo.motto}”</p>
        </div>

        {groupInfo.logoUrl && (
          <div className="logo-box">
            <img src={groupInfo.logoUrl} alt="Group Logo" />
          </div>
        )}
      </header>

      <section className="card">
        <h2>Who We Are</h2>
        <p className="intro-text">{groupInfo.about}</p>
      </section>

      <section className="card">
        <h2>What We Do</h2>
        <ul className="objective-list">
          <li>Develop modern, scalable web applications.</li>
          <li>Design intuitive, user-focused interfaces.</li>
          <li>Build RESTful APIs and integrate databases.</li>
          <li>Deploy and maintain projects using GitHub & Netlify.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Our Team</h2>
        <p className="hint">Click a member to view their profile page.</p>

        <div className="team-grid">
          {members.map((m, index) => (
            <a
              key={index}
              href={m.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="member-card-link"
            >
              <div className="member-card">
                <div className="member-avatar">
                  {m.profileImg ? (
                    <img src={m.profileImg} alt={m.name} />
                  ) : (
                    <span>{getInitials(m.name)}</span>
                  )}
                </div>
                <div className="member-info">
                  <h3>{m.name}</h3>
                  <p className="member-role">{m.role}</p>
                  <button className="profile-btn">View Profile</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="card two-column">
        <div>
          <h2>Flagship Project</h2>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-output">
            <strong>Expected Output:</strong> {project.expectedOutput}
          </p>
        </div>
        <div>
          <h3>Project Objectives</h3>
          <ul className="objective-list">
            {project.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Technology Stack</h2>
        <ul className="tech-list">
          {techStack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="hosting-text">
          Frontend: React (Hosted on Netlify) <br />
          Backend: Node.js + Express.js <br />
          Database: MongoDB <br />
          Version Control: GitHub
        </p>
      </section>

      <section className="card">
        <h2>Our Work Culture</h2>
        <ul className="objective-list">
          <li>We collaborate using Git branches and pull requests.</li>
          <li>We care about clean code and clean UI.</li>
          <li>We document features and APIs like a real dev team.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>{groupInfo.groupName} © 2025 • All Rights Reserved</p>
        <p>
          Repository:{" "}
          <a
            href="https://github.com/0xrasel/Code-Catalysts-Studio"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/0xrasel/Code-Catalysts-Studio
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
