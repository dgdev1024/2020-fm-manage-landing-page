/**
 * @file com/hero-section/why-section.jsx
 */

import React from "react";
import "./index.scss";

const WhySection = () => (
  <section className="section why">
    <div className="container why__container">
      <div className="why__whats-different">
        <h2 className="heading heading--medium heading--align-left-on-desktop">
          What's different about Manage?
        </h2>
        <p className="text text--small text--align-left-on-desktop">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="why__feature-cards">
        <div className="why__feature-card">
          <div className="why__feature-heading">
            <span className="why__feature-heading-badge">01</span>
            <h3 className="heading heading--align-left why__feature-heading-text">
              Track company-wide progress
            </h3>
          </div>
          <p className="text text--smaller text--align-left why__feature-text">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="why__feature-card">
          <div className="why__feature-heading">
            <span className="why__feature-heading-badge">02</span>
            <h3 className="heading heading--align-left why__feature-heading-text">
              Advanced built-in reports
            </h3>
          </div>
          <p className="text text--smaller text--align-left why__feature-text">
            Set internal delivery estimates and track progress toward company
            goals. Our customizable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="why__feature-card">
          <div className="why__feature-heading">
            <span className="why__feature-heading-badge">03</span>
            <h3 className="heading heading--align-left why__feature-heading-text">
              Everything you need in one place
            </h3>
          </div>
          <p className="text text--smaller text--align-left why__feature-text">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-ole
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhySection;
