/**
 * @file com/cta-section/index.jsx
 */

import React from "react";
import "./index.scss";

const CtaSection = () => (
  <section className="section cta">
    <div className="container cta__container">
      <h2 className="heading heading--large heading--align-left-on-desktop cta__heading">
        Simplify how your team works today.
      </h2>
      <button className="button button--white cta__button">Get Started</button>
    </div>
  </section>
);

export default CtaSection;
