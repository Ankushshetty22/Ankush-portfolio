import "./Skill.css";

function Skill() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Git & GitHub", level: 80 },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-subtitle">
          Here are the technologies I use to build responsive and modern web
          applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;