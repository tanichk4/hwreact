import React, { useState } from "react";

import styled from "styled-components";

// import Buttons from "./Buttons";
import CreditCardFront from "./CreditCardFront";

const userInfo = {
  user_id: 1,
  user_name: "Salvador Attwool",
  data: [
    {
      id: 1,
      card: {
        numbers: "4041374879773",
        type: "visa",
        expiry_date: "11/19/2021",
        cvv: 139,
      },
      statistic: [
        {
          id: 1,
          date: "10/5/2021",
          place: "Home",
          expense: 296.9,
          currency: "грн.",
        },
        {
          id: 2,
          date: "2/9/2021",
          place: "Health",
          expense: 411.28,
          currency: "грн.",
        },
        {
          id: 3,
          date: "10/12/2021",
          place: "Games",
          expense: 381.7,
          currency: "$",
        },
        {
          id: 4,
          date: "12/17/2021",
          place: "Electronics",
          expense: 135.25,
          currency: "грн.",
        },
        {
          id: 5,
          date: "11/22/2021",
          place: "Tools",
          expense: 167.75,
          currency: "грн.",
        },
        {
          id: 6,
          date: "4/15/2021",
          place: "Garden",
          expense: 208.64,
          currency: "€",
        },
        {
          id: 7,
          date: "7/31/2021",
          place: "Music",
          expense: 25.64,
          currency: "$",
        },
      ],
    },
    {
      id: 2,
      card: {
        numbers: "4041599164480",
        type: "visa",
        expiry_date: "4/7/2023",
        cvv: 597,
      },
      statistic: [],
    },
    {
      id: 3,
      card: {
        numbers: "5002353822226833",
        type: "mastercard",
        expiry_date: "4/3/2022",
        cvv: 801,
      },
      statistic: [
        {
          id: 1,
          date: "3/31/2021",
          place: "Movies",
          expense: 61.24,
          currency: "$",
        },
        {
          id: 2,
          date: "6/2/2021",
          place: "Grocery",
          expense: 311.43,
          currency: "$",
        },
        {
          id: 3,
          date: "3/19/2021",
          place: "Home",
          expense: 193.88,
          currency: "грн.",
        },
        {
          id: 4,
          date: "9/2/2021",
          place: "Tools",
          expense: 108.61,
          currency: "грн.",
        },
      ],
    },
  ],
  id: 123,
};

const CreditCard = () => {
  const [showButtons, setShowButtons] = useState(false);
  const handleClick = () => {
    setShowButtons((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleClick} />
      {showButtons && <Buttons />}
    </div>
  );
};

export default CreditCard;
