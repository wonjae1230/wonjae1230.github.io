import Header from "../components/Header.jsx";
import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Experience from "../components/sections/Experience.jsx";
import Awards from "../components/sections/Awards.jsx";
import Skills from "../components/sections/Skills.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import useScrollMemory from "../hooks/useScrollMemory.js";

function Homepage() {
  useScrollMemory();

  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
