import React, { useState } from "react";
import Buttons from "./Buttons.js";
import HideDigits from "./HideDigits.js";
import CardImg from "./CardImg.js";
import {
  CardContainer,
  CardItems,
  CardHolderAndTypeContainer,
  CardHolder,
  CardType,
  CardChip,
  CardNumberContainer,
  CardNumber,
} from "./Styles";

const Card = ({ cardData, cardHolder }) => {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleCardClick = () => {
    setIsCardClicked(true);
  };

  return (
    // <CardContainer onClick={handleCardClick}>
    //   {isCardClicked && (
    //     <Buttons

    //       top="260px"
    //       // zIndex={-10} />}
    //       zIndex={10}
    //     />
    //   )}
    //   <CardItems>

    //     <CardChip />
    //     <CardNumberContainer>
    //       <CardNumber>
    //         <HideDigits
    //           inputString={cardData.card.numbers}
    //           showNumber={showCardNumber}
    //         />
    //       </CardNumber>
    //     </CardNumberContainer>
    //     <CardHolderAndTypeContainer>
    //       <CardHolder>{cardHolder}</CardHolder>
    //       <CardType>
    //         <CardImg cardData={cardData} />
    //       </CardType>
    //     </CardHolderAndTypeContainer>
    //   </CardItems>
    // </CardContainer>
    // <CardContainer onClick={handleCardClick}>
    // {isCardClicked && (
    // <Buttons

    // top="260px"
    // zIndex={-10} />}
    // zIndex={10}
    // />
    // )}
    <CardItems onClick={handleCardClick}>
      {isCardClicked && <Buttons top="260px" zIndex={10} />}
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
    </CardItems>
    // </CardContainer>
  );
};

export default Card;
