import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Services";
import ContactForm from "./Components/ContactForm";
import Team from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Features />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Team />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
