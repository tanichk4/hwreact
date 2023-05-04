import styled from "styled-components";

export const StatisticsInner = styled.div`
  position: absolute;
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

export const Statistics = styled.div`
  width: 520px;
  height: 334px;
  perspective: 1200px;
  ${(props) =>
    props.showStatistics &&
    `width: 534px;
    height: auto;
`}
`;

export const StatisticsFront = styled.div`
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
  background: #fbfbff;

  & p {
    top: calc(50% - 31px / 2 + 85.63px);
  }
`;

export const StatisticsBack = styled.div`
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
