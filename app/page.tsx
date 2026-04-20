import MatrixCanvas from "@/components/MatrixCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <MatrixCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer
        className="py-8 text-center border-t"
        style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}
      >
        <p className="text-lg font-mono font-medium mb-1">
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          SMA
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </p>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Designed &amp; built by Sakka Mohamed Anis · Montréal, Canada
        </p>
        <p className="text-xs mt-1 font-mono" style={{ color: "var(--accent)", opacity: 0.6 }}>
          AI · Security · Networks
        </p>
      </footer>
    </>
  );
}
