import React from "react";
import { Route, Routes } from "react-router-dom";
import YourCards from "./Components/YourCards";
import CreditCard from "./Components/CreditCard";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<YourCards />} />
      <Route path="/newuser" element={<CreditCard />} />
    </Routes>
  );
};

export default RouterPage;
