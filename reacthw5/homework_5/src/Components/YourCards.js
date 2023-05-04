import React, { useContext } from "react";
import { CardsContext } from "./UseFetch.js";
import { PageContainer, InfoContainer, InfoIcon, InfoTitle } from "./Styles.js";
import { Link } from "react-router-dom";
import { Card } from "./Card.js";

const YourCards = () => {
  const { data } = useContext(CardsContext);
  return (
    <div>
      <PageContainer>
        <InfoContainer>
          <InfoTitle>Your Cards</InfoTitle>
          <Link to="/addcard">
            <InfoIcon />
          </Link>
        </InfoContainer>
        {data.map(({ user_name, data }) => {
          return data.map(({ id, card, statistic }) =>
              <Card
                owner={user_name}
                statistic={statistic}
                stats={statistic.stats}
                card={card}
              />
          );
        })}
      </PageContainer>
    </div>
  );
};

export default YourCards;
