import React from "react";
import CardsProvider from "./Components/UseFetch";
import RouterPage from "./RouterPage";

const App = () => {
  return (
    <div>
      <CardsProvider>
        <RouterPage />
      </CardsProvider>
    </div>
  );
};

export default App;

// header
// all pages
