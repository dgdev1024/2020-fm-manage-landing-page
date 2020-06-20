/**
 * com/testimonial/index.jsx
 */

import React from "react";
import "./index.scss";

const Testimonial = ({ active, image, name, quote }) => (
  <div
    className="testimonial"
    style={{
      left: `${active * -100}%`,
    }}
  >
    <img src={image} alt={name} className="testimonial__image" />
    <h3 className="heading heading--small testimonial__heading">{name}</h3>
    <p className="text text--small testimonial__text">&ldquo;{quote}&rdquo;</p>
  </div>
);

export default Testimonial;
