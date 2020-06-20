/**
 * @file com/testimonial-slider/index.jsx
 */

import React, { useState, useEffect } from "react";
import Testimonial from "../testimonial";
import { clamp } from "../../lib/clamp";
import "./index.scss";

const TestimonialSlider = ({ testimonials = [] } = {}) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      let next = page + 1;
      if (next >= testimonials.length) {
        next = 0;
      }

      gotoPage(next);
    }, 10000);

    return () => clearInterval(interval);
  }, [page]);

  const gotoPage = (pageNumber) => {
    pageNumber = clamp(pageNumber, 0, testimonials.length - 1);
    setPage(pageNumber);
  };

  return (
    <>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            active={page}
            image={testimonial.image}
            name={testimonial.name}
            quote={testimonial.quote}
          />
        ))}
      </div>
      <div className="testimonial-nav">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`
              button
              testimonial-nav__button
              ${index === page ? "testimonial-nav__button--active" : ""}
            `}
            aria-label={`Go to Testimonial Number ${index + 1}`}
            disabled={index === page}
            onClick={() => gotoPage(index)}
          />
        ))}
      </div>
    </>
  );
};

export default TestimonialSlider;
