import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Skill />
     <Projects />
     <Contact />
     <Footer />
    </>
)}

export default App
