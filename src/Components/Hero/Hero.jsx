import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Ankush R Shetty 👋</span>
        </h1>

        <h2>Full Stack Web Developer</h2>

        <p>
          I'm a passionate web developer from Bengaluru who enjoys building
          responsive, user-friendly, and modern web applications using HTML,
          CSS, JavaScript, React, and Node.js.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/XYZ.jpg" alt="Ankush R Shetty" />
      </div>
    </section>
  );
}

export default Hero;