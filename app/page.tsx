import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Education from "../components/education";
import Contact from "../components/contact";
import Footer from "../components/footer";
import PageEffects from "../components/pageEffects";

export default function Home() {
  return (
    <>
      <PageEffects />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
