
import { data, cardHolder } from "./Data.js";
import React from "react";
import {
  PageContainer,
  InfoContainer,
  InfoIcon,
  InfoTitle,
  Sides,
  CardBack,
} from "./Styles.js";
import Card from "./OneCard.js";

const YourCards = () => {
  return (
    <div>
      <PageContainer>
        <InfoContainer>
          <InfoTitle>Your Cards</InfoTitle>
          <InfoIcon />
        </InfoContainer>

        {/* ТУТ МАЄ ПРОСТО БУТИ КАРД ЯКОМУ БУДУТЬ ПЕРЕДАНІ ПРОПИ ДО ФРОНТ І БЕК САЙД!!!!! 
        ЗАМІСТЬ CardContainer У НАС ПРОСТО КАРД 
        І ПРОЙТИСЬ ПО НЬОМУ МАПОМ*/}

        {data.data.map((cardData) => (
          <Sides>
            <Card
              key={cardData.id}
              cardData={cardData}
              cardHolder={cardHolder}
            />
          </Sides>
            ))}
      </PageContainer>
    </div>
  );
};

export default YourCards;
