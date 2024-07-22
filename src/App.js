import logo from "./logo.svg";
import "./App.css";
import HelpCenter from "./HelpCenter/HelpCenter";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCategories } from "./HelpCenter/HelpCenterApi";
// import "../node_modules/blueprint-css/mm-business/mm-business.bundle.css";
function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
    console.log(categories);
  }, []);

  return (
    <Container>
      <HelpCenter categories={categories} />
    </Container>
  );
}

export default App;
