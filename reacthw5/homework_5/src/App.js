import React from "react";
import CardWrapper from "./Components/CardWrapper";
import CardsProvider from "./Components/UseFetch";
import YourCards from "./Components/YourCards";
import CreditCard from "./Components/CreditCard";

const App = () => {
  return (
    <div>
      <CardsProvider>
        <YourCards />
      </CardsProvider>
    </div>
  );
};

export default App;

// header
// all pages
