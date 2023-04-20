import styled, { keyframes } from "styled-components";

export const PageContainer = styled.div`
  align-self: flex-start;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 57px 70px 266px 70px;

  @media only screen and (min-width: 420px) {
    max-width: 420px;
    padding: 57px 40px 266px 40px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 57px 70px 266px 70px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 57px 100px 266px 100px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 57px 120px 266px 120px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 57px 140px 266px 120px;
  }
`;

export const InfoContainer = styled.div`
  width: 525px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const InfoIcon = styled.div`
  cursor: pointer;
  background-image: url("/plus_1.svg");
  width: 47px;
  height: 47px;
`;

export const InfoTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 61px;
  letter-spacing: 4.17391px;
  color: #000000;
  margin: auto 0;
`;

export const CardContainer = styled.div`
  z-index: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 534px;
  height: 334px;
  background-color: grey;
  border-radius: 48.6px;

  &:not(:last-child) {
    margin-bottom: 90px;
  }
`;

export const CardItems = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 85px 53px 37px 55px;
  width: 534px;
  height: 334px;
  background-color: grey;
  border-radius: 48.6px;

  &:not(:last-child) {
    margin-bottom: 90px;
  }
`;

export const CardChip = styled.div`
  background-image: url("/chip.svg");
  fill: grey;
  background-size: cover;
  width: 69.6px;
  height: 56.23px;
`;
export const CardNumberContainer = styled.div`
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 4.17391px;
`;

export const CardNumber = styled.p`
/* transform: translateY(100%);
bottom: 0;
position: absolute; */

`;

export const CardHolderAndTypeContainer = styled.div`
  z-index: 10;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardHolder = styled.p`
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 2.4px;
`;

//переробити на div з картинкою
export const CardType = styled.p``;

const moveDown = keyframes`
  from {
    transform: translateY(-80px);
  }
  to {
    transform: translateY(0);
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex || "auto"};
  top: ${({ top }) => top || 0};
  left: ${({ left }) => left || "5.7px"};
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  width: 520px;
  height: 150px;
  border-radius: 48.6px;
  background-color: #dcdce3;

  animation-name: ${moveDown};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const Button = styled.button`

  position: relative;
  border: none;
  background-color: transparent;
  /* padding: 0 25px; */
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  img {
    z-index: -1;
  }

  &:first-child {
    &:after {
      content: " ";
      position: absolute;
      bottom: 50%;
      left: 0;
      width: 100%;
      border-bottom: 3px solid red;
      transform: rotate(-45deg);
    }
  }
`;
