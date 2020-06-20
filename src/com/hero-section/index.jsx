/**
 * @file com/hero-section/index.jsx
 */

import React from "react";
import ImageIntro from "../../img/illustration-intro.svg";
import "./index.scss";

const HeroSection = () => (
  <section className="section hero">
    <div className="container hero__container">
      <img
        src={ImageIntro}
        alt="Build Better Products"
        className="hero__image"
      />
      <div className="hero__caption">
        <h1 className="heading heading--large heading--align-left-on-desktop hero__heading">
          Bring everyone together to build better products.
        </h1>
        <p className="text text--align-left-on-desktop hero__text">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="button button--orange hero__button">
          Get Started
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
