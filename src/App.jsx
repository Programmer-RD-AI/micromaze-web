import React from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Awards from "./components/Awards";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import FAQ from "./components/FAQ";
import Merch from "./components/Merch";

const App = () => {
  return (
    <>
      <div className="container-inbuilt">
        <section className="section section-100">
          <Hero />
        </section>
        <section className="section section-100">
          <Intro />
        </section>
        <section className="section section-100">
          <About />
        </section>
        <section className="section section-75">
          <Countdown />
        </section>
        <section className="section section-75">
          <Timeline />
        </section>
        <section className="section section-50">
          <Awards />
        </section>
        <section className="section section-50">
          <FAQ />
        </section>
        <section className="section section-50">
          <Merch />
        </section>
        <section className="section section-50">
          <Partners />
        </section>
        <section className="section section-25">
          <Contact />
        </section>
        <section className="section section-25">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
