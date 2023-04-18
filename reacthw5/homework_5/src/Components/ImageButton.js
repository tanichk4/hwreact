import { Button } from "./Styles";
import buttons from "./ButtonsFunc";
export const ImageButton = ({ imageSrc, altText, onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={imageSrc} alt={altText} />
    </Button>
  );
};
