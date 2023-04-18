import React from "react";
import styled from "styled-components";
import { Button, ButtonsContainer } from "./Styles.js";
import buttons from "./ButtonsFunc.js";
import { ImageButton } from "./ImageButton.js";

const Buttons = ({ top, left, zIndex }) => {
  return (
    <div>
      <ButtonsContainer top={top} left={left} zIndex={zIndex}>
        {buttons.map((button, index) => (
          <ImageButton
            key={index}
            imageSrc={button.imageSrc}
            altText={button.altText}
            onClick={() => button.onClickFunction()}
          />
        ))}
      </ButtonsContainer>
    </div>
  );
};

export default Buttons;
