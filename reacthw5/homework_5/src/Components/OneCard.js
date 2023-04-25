import React, { useState } from "react";
import Buttons from "./Buttons.js";
import HideDigits from "./HideDigits.js";
import CardImg from "./CardImg.js";
import {
  CardContainer,
  //   ButtonContainer,
  //   CardItems,
  //   CardHolderAndTypeContainer,
  Sides,
} from "./Styles.js";
import CardFront from "./CardFront.js";
import { data } from "./Data.js";
import CardBack from "./CardBack.js";

const Card = ({ cardData, cardHolder }) => {
  return (
    // ТУТ МАЄ БУТИ І ФРОНТ І БЕК ЗАПИСАНИЙ В ЯКОГО ПЕРЕДАВАТИМУТЬСЯ ПРОПСИ З ФАЙЛУ YourCards
    <div>
      <CardContainer>
        <CardFront
          inputString={cardData.card.numbers}
          cardData={cardData}
          cardHolder={cardHolder}
        />
        <CardBack
      cardCvv={cardData.card.cvv}
      cardExpiryDate={cardData.card.expiry_date}

      />
      </CardContainer>
    </div>
  );
};

export default Card;
