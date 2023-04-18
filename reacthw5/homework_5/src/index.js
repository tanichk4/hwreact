import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import YourCards from "./Components/YourCards";
import Buttons from "./Components/Buttons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <YourCards />
{/* <Buttons /> */}
  </React.StrictMode>
);
