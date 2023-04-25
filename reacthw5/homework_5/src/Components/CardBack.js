import React, { useState } from "react";
import Buttons from "./Buttons.js";
import HideDigits from "./HideDigits.js";
import CardImg from "./CardImg.js";
import {
  ButtonContainer,
  CardItemsBack,
  CardHolderAndTypeContainer,
  CardHolder,
  CardType,
  CardChip,
  CardNumberContainer,
  CardNumber,
  SideBack,
  CardDataBack
} from "./Styles.js";

const CardBack = ({ cardExpiryDate, cardCvv }) => {
  return (
    // ТУТ МАЄ БУТИ І ФРОНТ І БЕК ЗАПИСАНИЙ В ЯКОГО ПЕРЕДАЄВАТИМУТЬСЯ ПРОПСИ З ФАЙЛУ YourCards
    // ЩО НАПИСАНО ВНИЗУ МОЖЛИВО ПОТРІБНО ВИНЕСТИ В ОКРЕМИЙ КОМПОНЕНТ ДЕ ПРОПИСАНИЙ КАРД ФРОНТ (АЛЕ Я ОТ НЕ ЗНАЮ ЯК ІЗ ПЕРЕДАЧЕЮ ПРОПСІВ)
    <div>
      <SideBack>
        <CardItemsBack>
          <CardDataBack>
            <p>{cardCvv}</p>
            <p>{cardExpiryDate}</p>
          </CardDataBack>
        </CardItemsBack>
      </SideBack>
    </div>
  );
};

export default CardBack;
