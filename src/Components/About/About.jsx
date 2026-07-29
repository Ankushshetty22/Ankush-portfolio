import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/Student.jpg" alt="Ankush R Shetty" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hello! I'm <strong>Ankush R Shetty</strong>, a passionate Full Stack
            Web Developer from Bengaluru. I enjoy creating responsive,
            user-friendly, and modern web applications that provide a great user
            experience.
          </p>

          <p>
            I have experience working with HTML, CSS, JavaScript, React, and
            Node.js. I enjoy learning new technologies and continuously
            improving my development skills.
          </p>

          <p>
            My goal is to build high-quality web applications that solve
            real-world problems while writing clean, maintainable, and efficient
            code.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;