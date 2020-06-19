/**
 * @file com/app.jsx
 */

import React from "react";
import Header from "./header";
import HeroSection from "./hero-section";
import WhySection from "./why-section";
import TestimonialsSection from "./testimonials-section";
import CtaSection from "./cta-section";
import Footer from "./footer";

const App = () => (
  <main className="main">
    <Header />
    <HeroSection />
    <WhySection />
    <TestimonialsSection />
    <CtaSection />
    <Footer />
  </main>
);

export default App;
