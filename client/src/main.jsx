import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ContextAPI from "./ContextAPI.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextAPI>
      <App />
    </ContextAPI>
  </BrowserRouter>,
);
