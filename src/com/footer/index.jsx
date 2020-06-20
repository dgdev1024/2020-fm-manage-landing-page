/**
 * @file com/footer/index.jsx
 */

import React, { useState, useRef } from "react";
import Logo from "../svg/logo";
import IconFacebook from "../svg/icon-facebook";
import IconYoutube from "../svg/icon-youtube";
import IconTwitter from "../svg/icon-twitter";
import IconPinterest from "../svg/icon-pinterest";
import IconInstagram from "../svg/icon-instagram";
import "./index.scss";

const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Footer = () => {
  const [inputError, setInputError] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const emailInputBox = useRef(null);

  const setErrorMessage = (text) => {
    const { classList } = emailInputBox.current;
    if (typeof text !== "string" || text === "") {
      classList.remove("footer__input--error");
      setInputError(" ");
    } else {
      classList.add("footer__input--error");
      setInputError(text);
    }
  };

  const onInputSubmit = (ev) => {
    ev.preventDefault();

    if (typeof emailInput !== "string" || emailInput === "") {
      setErrorMessage("Please insert an email.");
    } else if (emailregex.test(emailInput) === false) {
      setErrorMessage("Please insert a valid email.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo">
          <Logo
            className="footer__logo-svg logo-svg logo-svg--footer"
            viewBox="0 0 146 24"
          />
        </div>
        <form onSubmit={onInputSubmit} className="footer__subscribe">
          <input
            ref={emailInputBox}
            type="text"
            className="footer__input"
            id="email-address"
            name="email-address"
            aria-label="Email Address"
            placeholder="Updates in your inbox..."
            value={emailInput}
            onChange={(ev) => setEmailInput(ev.target.text)}
          />
          <button
            className="button button--orange footer__submit"
            type="submit"
          >
            GO
          </button>
          <p className="text text--smaller text--align-left-on-desktop footer__error">
            {inputError}
          </p>
        </form>
        <div className="footer__links">
          <a href="#" className="footer__link">
            Home
          </a>
          <a href="#" className="footer__link">
            Pricing
          </a>
          <a href="#" className="footer__link">
            Products
          </a>
          <a href="#" className="footer__link">
            About Us
          </a>
          <a href="#" className="footer__link">
            Careers
          </a>
          <a href="#" className="footer__link">
            Community
          </a>
          <a href="#" className="footer__link">
            Privacy Policy
          </a>
        </div>
        <div className="footer__social">
          <a
            href="#"
            className="footer__social-link footer__social-link--facebook"
            aria-label="Facebook"
            title="Facebook"
          >
            <IconFacebook
              className="footer__social-link-svg"
              viewBox="0 0 20 20"
            />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--youtube"
            aria-label="YouTube"
            title="YouTube"
          >
            <IconYoutube
              className="footer__social-link-svg"
              viewBox="0 0 20 20"
            />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--twitter"
            aria-label="Twitter"
            title="Twitter"
          >
            <IconTwitter
              className="footer__social-link-svg"
              viewBox="0 0 20 20"
            />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--pinterest"
            aria-label="Pinterest"
            title="Pinterest"
          >
            <IconPinterest
              className="footer__social-link-svg"
              viewBox="0 0 20 20"
            />
          </a>
          <a
            href="#"
            className="footer__social-link footer__social-link--instagram"
            aria-label="Instagram"
            title="Instagram"
          >
            <IconInstagram
              className="footer__social-link-svg"
              viewBox="0 0 20 20"
            />
          </a>
        </div>
        <p className="footer__copyright text text--smaller text--align-right-on-desktop">
          Copyright &copy; 2020 Manage. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
