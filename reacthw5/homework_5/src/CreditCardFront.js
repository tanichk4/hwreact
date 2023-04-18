import styled from "styled-components";

import React from "react";

const CreditCardFront = () => {
  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 534px;
    height: 334px;
    background-color: #232343;
    border-radius: 48.6px;
  `;

  const CardChip = styled.div`
    z-index: 100;
    background-image: url("/businessman-showing-stats-graphic_2.svg");
    width: 10%;
    height: 10%;
    background-size: cover;
    background-position: center;
  `;
  return (
    <>
      <CardContainer>
        <CardChip />
      </CardContainer>
    </>
  );
};

export default CreditCardFront;
