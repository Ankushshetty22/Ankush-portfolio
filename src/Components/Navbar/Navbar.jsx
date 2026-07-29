import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());


  // Live Clock
  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(timer);

  }, []);



  // Theme Toggle
  const toggleTheme = () => {

    document.body.classList.toggle("dark-mode");

    setDarkMode(!darkMode);

  };



  // Hamburger Toggle
  const toggleMenu = () => {

    setMenuOpen(!menuOpen);

  };



  // Close Menu
  const closeMenu = () => {

    setMenuOpen(false);

  };



  // Time Format
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });



  return (

    <header className="site-header">

      <nav className="navbar">


        {/* Logo */}
        <div className="logo">
          ARS
        </div>



        {/* Navigation Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>


          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>


          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>


          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>


          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>


        </ul>



        {/* Right Buttons */}
        <div className="nav-right">


          {/* Clock */}
          <div className="clock">
            {formattedTime}
          </div>



          {/* Dark Mode Button */}
          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>



          {/* Hamburger Button */}
          <button
            className="menu-btn"
            onClick={toggleMenu}
          >
            {menuOpen ? "✖" : "☰"}
          </button>


        </div>


      </nav>

    </header>

  );
}


export default Navbar;