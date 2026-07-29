import "./Projects.css";
import Weatherapp from "../../assets/Weatherapp.png";
import picture from "../../assets/picture.webp";
import Todo from "../../assets/Todo.png";
import social from "../../assets/social.avif";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      image: Weatherapp,
      description:
        "A real-time weather application built using React and the OpenWeather API.",
      technologies: ["React", "API", "CSS"],
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: picture,
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information.",
      technologies: ["React", "JavaScript", "CSS"],
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Todo App",
      image: Todo,
      description:
        "A simple task management application with add, edit, delete, and search features.",
      technologies: ["React", "Local Storage"],
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Social media app",
      image: social,
      description:
        "A real-time communication platform connecting users across different locations.",
      technologies: ["React", "API"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>

        <p className="projects-subtitle">
          Here are some of the projects I have built using modern web
          technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;