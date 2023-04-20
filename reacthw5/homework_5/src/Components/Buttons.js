import React from "react";
import { ButtonsContainer } from "./Styles.js";
import buttons from "./ButtonsFunc.js";
import { ImageButton } from "./ImageButton.js";

const Buttons = ({ top, left, bottom }) => {
  return (
    <div>
      <ButtonsContainer top={top} left={left} bottom={bottom}>
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
