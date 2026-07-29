import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">APS</h3>

        <p className="footer-text">
          Building modern and responsive web experiences.
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ankush-shetty-92a80b3a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Ankushshetty22/Ankushshetty22"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:ankush.rshetty22@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © {year} Ankush R Shetty. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;