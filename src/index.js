import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reactToWebComponent from "react-to-webcomponent";
import HelpCenter from "./HelpCenter/HelpCenter";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const HelpCenterWebComponent = reactToWebComponent(HelpCenter, React, ReactDOM);

customElements.define("help-center-widget", HelpCenterWebComponent);

window.onload = () => {
  if (!document.querySelector("help-center-widget")) {
    const helpCenter = document.createElement("help-center-widget");
    document.body.appendChild(helpCenter);
  }
};
