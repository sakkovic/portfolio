import MatrixCanvas from "@/components/MatrixCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MatrixCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
