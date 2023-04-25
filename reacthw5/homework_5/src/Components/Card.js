import styled from "styled-components";

const CardGTP = () => {
  return (
    <CardContainer>
      <Front>Front Side</Front>
      <Back>Back Side</Back>
    </CardContainer>
  );
};

export default CardGTP;

const Sides = styled.div`
  /* //як заг. стилі, які будуть використовуватись для декількох елементів\\компонентів */
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  backface-visibility: hidden;
  border-radius: 10px;
`;

const Front = styled(Sides)`
  /* //т.ч. розширюємо стилізацію, яку прописали в Sides. (тобто тут буде Sides + доп.стилі). */
  background-color: #fff; 
  /* //в подальшому використовуємо тільки Front, Sides не потрібно */
`;

const Back = styled(Sides)`
  /* //за аналогією з  Front */
  background-color: #bdbdbd;
  transform: rotateY(180deg);
`;

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  perspective: 1000px;

  &:hover > ${Front} {
    /* //т.ч. звертаємось до створеного за допомогою styled-components компонента, який буде розміщений в середині іншого компонента */
    transform: rotateY(180deg);
  }

  &:hover > ${Back} {
    transform: rotateY(360deg);
  }
`;
