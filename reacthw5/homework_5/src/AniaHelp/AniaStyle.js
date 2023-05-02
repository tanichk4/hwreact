import styled from "styled-components";

export const IntroductionCard = styled.div`
  position: relative;
  z-index: 2;
  margin: auto;

  &:not(:last-child) {
    margin-bottom: 100px;
  }
`;

export const CardInner = styled.div`
  position: relative;
  z-index: 10;

  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) =>
    props.isFlipped &&
    `transform: rotateY(180deg);
`}
`;

export const Card = styled.div`
  width: 534px;
  height: 334px;
  perspective: 1200px;

  /* &:hover ${CardInner} {
    transform: rotateY(180deg);
  } */
`;

export const CardFront = styled.div`
  border-radius: 48.6px;
  padding: 55px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #b08ead;
  color: white;

  & p {
    top: calc(50% - 31px / 2 + 85.63px);
  }
`;

export const CardBack = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 48.6px;
  padding: 55px;
  text-align: center;
  transform: rotateY(180deg);

  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #b08ead;
  color: white;
`;
