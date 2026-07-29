import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">
          <h3 className="footer-logo">ARS</h3>

          <p className="footer-text">
            Building responsive and modern web experiences.
          </p>
        </div>


        {/* Middle Navigation */}
        <div className="footer-nav">
          <h2>NAVIGATION</h2>
          <a href="#home">Home</a><br></br>
          <a href="#about">About</a><br></br>
          <a href="#skills">Skills</a><br></br>
          <a href="#projects">Projects</a><br></br>
          <a href="#contact">Contact</a><br></br>
        </div>


        {/* Right Social Links */}
        <div className="social-links">
          <h2>CONNECT</h2>
          <a
            href="https://github.com/Ankushshetty22/Ankushshetty22"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ankush-shetty-92a80b3a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:ankush.rshetty22@gmail.com">
            Email
          </a>

        </div>

      </div>


      <p className="copyright">
        © {year} Ankush R Shetty. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;