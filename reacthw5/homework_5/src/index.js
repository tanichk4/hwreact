import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardsProvider from "./Components/UseFetch";
import CreditCard from "./Components/CreditCard";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YourCards from "./Components/YourCards";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<YourCards />} />
          <Route path="/newuser" element={<CreditCard />} />
        </Routes>
      </Router>
    </CardsProvider>
  </React.StrictMode>
);
