import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import HelpCenter from "./HelpCenter/HelpCenter";

const HelpCenterWebComponent = reactToWebComponent(HelpCenter, React, ReactDOM);


customElements.define("help-center-widget", HelpCenterWebComponent);