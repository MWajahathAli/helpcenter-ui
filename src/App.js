import logo from "./logo.svg";
import "./App.css";
import HelpCenter from "./HelpCenter/HelpCenter";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCategories } from "./HelpCenter/HelpCenterApi";
import "./HelpCenterWebComponent";
// import "../node_modules/blueprint-css/mm-business/mm-business.bundle.css";
function App() {
  return (
    // <Container>
    //   <HelpCenter />
    // </Container>
    <div>
      <help-center-widget></help-center-widget>
    </div>
  );
}

export default App;
