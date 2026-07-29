import "./Hero.css";

function Hero() {

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };


  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <h1>
          {getGreeting()} 
        </h1>
        
        <h1>
         I'm <span>Ankush R Shetty 👋</span>
        </h1>

        <h2>
          Web Developer & AIML Student
        </h2>

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
        <img 
          src="/Profilepic.jpeg" 
          alt="Ankush R Shetty" 
        />
      </div>

    </section>
  );
}

export default Hero;