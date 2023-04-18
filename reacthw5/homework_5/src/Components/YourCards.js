import Card from "./CardFront.js";
import { data, cardHolder } from "./Data.js";
import React from "react";
import { PageContainer, InfoContainer, InfoIcon, InfoTitle} from "./Styles.js";
const YourCards = () => {
  return (
    <div>
      <PageContainer>
      <InfoContainer>
        <InfoTitle>Your Cards</InfoTitle>
        <InfoIcon/>
      </InfoContainer>
      {data.data.map((cardData) => (
        <Card key={cardData.id} cardData={cardData} cardHolder={cardHolder} />
      ))}
      </PageContainer>
    </div>
  );
};

export default YourCards;
