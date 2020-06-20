/**
 * @file com/testimonials-section/index.jsx
 */

import React from "react";
import TestimonialSlider from "../testimonial-slider";
import Testimonials from "../../lib/testimonials";
import "./index.scss";

const TestimonialsSection = () => (
  <section className="section testimonials">
    <div className="container testimonials__container">
      <h2 className="heading heading--medium testimonials__heading">
        What they've said
      </h2>
      <TestimonialSlider testimonials={Testimonials} />
      <button className="button button--orange testimonials__button">
        Get Started
      </button>
    </div>
  </section>
);

export default TestimonialsSection;
