import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Parallex from "@/components/Parallex";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <>
      <section className=" min-h-screen grid grid-rows-[auto,1fr] scroll-snap-y relative">
        <Navbar />
        <Hero />
      </section>
      <section id="about" className="min-h-screen scroll-snap-y">
        <Parallex type="services" />
      </section>
      <section className="min-h-screen scroll-snap-y">
        <About />
      </section>
      <section id="skills" className="min-h-screen scroll-snap-y">
        <Parallex type="portfolio" />
      </section>
      <section className="min-h-screen scroll-snap-y">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen scroll-snap-y">
        <Contact />
      </section>
    </>
  );
}
