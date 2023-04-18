import styled from "styled-components";

const CardImg = ({ cardData }) => {
  const cardType = cardData.card.type;

  const logoSrc = cardType === "visa" ? "/visa.svg" : "/Mastercard.svg";

  const CardLogo = styled.img`
    width: 74px;
  `;
  return <CardLogo src={logoSrc} alt={`${cardType} logo`} />;
};

export default CardImg