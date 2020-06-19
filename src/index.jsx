/**
 * @file index.jsx
 */

import React from "react";
import { render } from "react-dom";
import App from "./com/app";
import "./index.scss";

const mountNode = document.querySelector(".app-root");
render(<App />, mountNode);
