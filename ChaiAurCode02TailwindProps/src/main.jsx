import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AllCards from "./components/AllCards.jsx";
import "./index.css";
import DarkModeBtn from "./components/DarkModeBtn.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllCards/>
  </StrictMode>
);
