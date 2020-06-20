/**
 * @file com/header/index.jsx
 */

import React, { useState, useEffect } from "react";
import ImageLogo from "../../img/logo.svg";
import { clamp } from "../../lib/clamp";
import "./index.scss";

const Header = () => {
  const [shown, setShown] = useState(false);
  const [opacity, setOpacity] = useState(0.0);
  useEffect(() => {
    const onWindowScroll = () => {
      const pos = clamp(window.scrollY, 0, 160);
      setOpacity(pos / (160 * 1.1));
    };

    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [opacity]);

  const toggleNav = () => setShown(!shown);

  return (
    <header
      className="header"
      style={{ backgroundColor: `hsla(0, 0%, 100%, ${opacity})` }}
    >
      <div className="container header__container">
        <img src={ImageLogo} alt="Manage" className="header__image" />
        <button
          className="button header__button"
          aria-label="Toggle Navigation"
          onClick={toggleNav}
        ></button>
        <nav className={`header__nav ${shown ? "header__nav--shown" : ""}`}>
          <a href="#" className="link header__link">
            Pricing
          </a>
          <a href="#" className="link header__link">
            Product
          </a>
          <a href="#" className="link header__link">
            About Us
          </a>
          <a href="#" className="link header__link">
            Careers
          </a>
          <a href="#" className="link header__link">
            Community
          </a>
        </nav>
        <button className="button button--orange header__cta-button">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
