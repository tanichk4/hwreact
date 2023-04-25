import React, { useState } from "react";
import Buttons from "./Buttons.js";
import HideDigits from "./HideDigits.js";
import CardImg from "./CardImg.js";
import {
  ButtonContainer,

  CardItemsFront,
  CardHolderAndTypeContainer,
  CardHolder,
  CardType,
  CardChip,
  CardNumberContainer,
  CardNumber,
  SideBack,
  SideFront
} from "./Styles.js";

const CardFront = ({ cardData, cardHolder }) => {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleCardClick = () => {
    setIsCardClicked(true);
  };

  return (
    // ТУТ МАЄ БУТИ І ФРОНТ І БЕК ЗАПИСАНИЙ В ЯКОГО ПЕРЕДАЄВАТИМУТЬСЯ ПРОПСИ З ФАЙЛУ YourCards
    // ЩО НАПИСАНО ВНИЗУ МОЖЛИВО ПОТРІБНО ВИНЕСТИ В ОКРЕМИЙ КОМПОНЕНТ ДЕ ПРОПИСАНИЙ КАРД ФРОНТ (АЛЕ Я ОТ НЕ ЗНАЮ ЯК ІЗ ПЕРЕДАЧЕЮ ПРОПСІВ)
    <div>
      <SideFront onClick={handleCardClick}>
        <CardItemsFront>
          <CardChip />
          <CardNumberContainer>
            <CardNumber>
              <HideDigits
                inputString={cardData.card.numbers}
                showNumber={showCardNumber}
              />
            </CardNumber>
          </CardNumberContainer>
          <CardHolderAndTypeContainer>
            <CardHolder>{cardHolder}</CardHolder>
            <CardType>
              <CardImg cardData={cardData} />
            </CardType>
          </CardHolderAndTypeContainer>
        </CardItemsFront>
        <ButtonContainer>
          {isCardClicked && <Buttons bottom="" />}
        </ButtonContainer>
      </SideFront>
    </div>
  );
};

export default CardFront;
