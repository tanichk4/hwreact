import React, { useContext, useState } from "react";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  BackArrow,
  InfoTitle,
  InfoContainer,
  PageContainer,
  FormButton,
} from "./Styles";
import { CardsContext } from "./UseFetch";

const CreditCard = () => {
  const [numbers, setNumbers] = useState("");
  const [cvv, setCvv] = useState("");
  const [user_name, setUser_name] = useState("");
  const [type, setType] = useState("");

  const { data, updateData } = useContext(CardsContext);

  const [users, setUsers] = useState(data);

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const handleCardNumberChange = (event) => {
    setNumbers(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setUser_name(event.target.value);
  };

  const handleCardTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      numbers: numbers,
      cvv: cvv,
      user_name: user_name,
      type: type,
    };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newData = [...data, { numbers, cvv, user_name, type }];
  //   updateData(newData);
  //   setNumbers("");
  //   setCvv("");
  //   setUser_name("");
  //   setType("");
  // };
  

    setUsers((prevUsers) => {
      const newUsers = [...prevUsers, newUser];
      console.log("newUser", newUser);
      console.log("users", newUsers);
      return newUsers;
    });

    console.log("newUser", newUser);
    console.log("users", users);

    setNumbers("");
    setCvv("");
    setUser_name("");
    setType("");
  };

  const inputFields = [
    {
      id: 1,
      title: "Card number",
      placeholder: "Enter card number",
      name: "numbers",
      value: numbers,
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
      title: "Your full name",
      placeholder: "Enter full name",
      name: "user_name",
      value: user_name,
      onChange: handleFullNameChange,
    },
    {
      id: 4,
      title: "VISA or MASTERCARD",
      placeholder: "Enter card type",
      name: "type",
      value: type,
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
