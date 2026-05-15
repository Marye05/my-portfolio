import Image from "next/image";
import Banner from "@/src/Banner";
import Contact from "@/src/Contact";
import Footer from "@/src/Footer";
import NavBar from "@/src/NavBar";
import Skills from "@/src/Skills";
import Projects from "@/src/Projects";

export default function Home() {
  return (
    <div className="page">
      <NavBar />
      <main className="page-content">
        <section className="hero">
          <div className="hero-text">
            <Banner />
            <p className="hero-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orb">
              <div className="hero-orb-inner" />
              <span className="hero-spark" />
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
