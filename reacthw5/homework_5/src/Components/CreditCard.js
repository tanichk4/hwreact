import React from "react";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { BackArrow } from "./Styles";

const CreditCard = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <div>
      <BackArrow onClick={handleClick} />
    </div>
  );
};
export default CreditCard;
