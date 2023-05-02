import { useState } from "react";
import {
  IntroductionCard,
  Card,
  CardInner,
  CardFront,
  CardBack,
} from "../AniaHelp/AniaStyle";
import {
  ButtonContainer,
  ButtonVisibility,
  ButtonStatistics,
  ButtonFlip,
  LogoContainer,
  HiddenNumbers,
  CardChip,
  CardFlex,
  CardRectangle,
} from "./Styles";

const CardWrapper = ({ owner, statistic, card }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const maskedNumber = card.numbers.replace(/\d(?=\d{4})/g, "*");

  return (
    <>
      <IntroductionCard onClick={() => setShowButtons(true)}>
        <Card>
          <CardInner isFlipped={isFlipped}>
            <CardFront>
              <CardChip />
              <HiddenNumbers show={showNumbers}>{card.numbers}</HiddenNumbers>
              {!showNumbers && maskedNumber}
              <CardFlex>
                <p>{owner}</p>
                <LogoContainer card={card.type} />
              </CardFlex>
            </CardFront>
            <CardBack>
              <div>{card.cvv}</div>
              <div>{card.expiry_date}</div>
              <CardRectangle />
            </CardBack>
          </CardInner>
        </Card>
        {showButtons && (
          <ButtonContainer>
            <ButtonVisibility onClick={() => setShowNumbers((prev) => !prev)} />
            <ButtonStatistics onClick={() => setShowStatistics((prev) => !prev)} />
            <ButtonFlip onClick={() => setIsFlipped((prev) => !prev)} />
          </ButtonContainer>
        )}
      </IntroductionCard>
    </>
  );
};

export default CardWrapper;
