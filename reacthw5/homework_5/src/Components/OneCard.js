import React, { useState } from "react";
import Buttons from "./Buttons.js";
import HideDigits from "./HideDigits.js";
import CardImg from "./CardImg.js";
import { CardContainer, OneCard } from "./Styles.js";
import CardFront from "./CardFront.js";
import { data } from "./Data.js";
import CardBack from "./CardBack.js";

const Card = ({ cardData, cardHolder }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    // ТУТ МАЄ БУТИ І ФРОНТ І БЕК ЗАПИСАНИЙ В ЯКОГО ПЕРЕДАВАТИМУТЬСЯ ПРОПСИ З ФАЙЛУ YourCards
    <div>
      <CardContainer>
        <OneCard flipped={flipped} onClick={handleClick}>
          <CardFront
            inputString={cardData.card.numbers}
            cardData={cardData}
            cardHolder={cardHolder}
          />
          <CardBack
            isBack
            cardCvv={cardData.card.cvv}
            cardExpiryDate={cardData.card.expiry_date}
          />
        </OneCard>
      </CardContainer>
    </div>
  );
};

export default Card;
