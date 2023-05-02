import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 200px;
  background-color: lightgray;
  transition: all 3s ease-in-out; /* добавляем плавный переход */
`;

const ExpenseStat = styled.div`
  height: 50px;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const ExpandedCard = styled(Card)`
  width: 534px;
  height: 202px;
`;

const CardContainer = styled.div`
  position: relative;
  width: 534px;
  height: 202px;
`;

const Expand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer>
      {isExpanded ? (
        <ExpandedCard>
          <ExpenseStat>Expenses: $1000</ExpenseStat>
        </ExpandedCard>
      ) : (
        <Card />
      )}
      <Button onClick={handleButtonClick}>
        {isExpanded ? "Close" : "Expand"}
      </Button>
    </CardContainer>
  );
};

export default Expand;
