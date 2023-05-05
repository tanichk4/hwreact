import React, { useContext, useState } from "react";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { BackArrow, InfoTitle, InfoContainer, PageContainer, FormButton } from "./Styles";
import { CardsContext } from "./UseFetch";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [fullName, setFullName] = useState("");
  const [cardType, setCardType] = useState("");

  // const [users, setUsers] = useContext(CardsContext);

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newUser = {
    //   cardNumber: cardNumber,
    //   cvv: cvv,
    //   fullName: fullName,
    //   cardType: cardType,
    // };

    // setUsers([...users, newUser]);
    // setCardNumber("");
    // setCvv("");
    // setFullName("");
    // setCardType("");

  };

  const inputFields = [
    {
      id: 1,
      title: "Card number",
      placeholder: "Enter card number",
      name: "cardNumber",
      value: cardNumber,
      onChange: handleCardNumberChange,
    },
    {
      id: 2,
      title: "CVV",
      placeholder: "Enter CVV",
      name: "cvv",
      value: cvv,
      onChange: handleCvvChange,
    },
    {
      id: 3,
      title: "Your fullname",
      placeholder: "Enter full name",
      name: "fullName",
      value: fullName,
      onChange: handleFullNameChange,
    },
    {
      id: 4,
      title: "VISA or MASTERCARD",
      placeholder: "Enter card type",
      name: "cardType",
      value: cardType,
      onChange: handleCardTypeChange,
    },
  ];

  return (
    <div>
      <PageContainer>
        <InfoContainer>
          <InfoTitle>Create a new card</InfoTitle>
          <BackArrow onClick={handleClick} />
        </InfoContainer>
        <form onSubmit={handleSubmit}>
          {inputFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.title}</label>
              <input
                type="text"
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ))}
          <FormButton>Add card</FormButton>
        </form>
      </PageContainer>
    </div>
  );
};
export default CreditCard;
