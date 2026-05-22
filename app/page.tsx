import Image from "next/image";
import Banner from "@/src/components/Banner";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import NavBar from "@/src/components/NavBar";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";

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
