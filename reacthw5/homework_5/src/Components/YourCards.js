import React, { useContext } from "react";
import { CardsContext } from "./UseFetch.js";
import { PageContainer, InfoContainer, InfoIcon, InfoTitle } from "./Styles.js";

import { Card } from "./Card.js";
const YourCards = () => {
  const { data } = useContext(CardsContext);
  return (
    <div>
      <PageContainer>
        <InfoContainer>
          <InfoTitle>Your Cards</InfoTitle>
          <InfoIcon />
        </InfoContainer>
        {data.map(({ user_name, data }) => {
          return data.map(({ id, card, statistic }) => (
            <Card owner={user_name} statistic={statistic} card={card}/>
          ));
        })}
      </PageContainer>
    </div>
  );
};

export default YourCards;
