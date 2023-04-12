import Tooltip from "./Tooltip";
import { useState } from "react";

const ProductCard = ({ product, render }) => {
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);

  const handleMouseEnter = (e) => {
    setIsTooltipShown(true);
  };

  const handleMouseMove = (e) => {
    setTooltipX(e.clientX);
    setTooltipY(e.clientY);
  };

  const handleMouseLeave = (e) => {
    setIsTooltipShown(false);
  };

  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div className="product-card__info">
        <h2 className="product-card__name">{product.title}</h2>
        <p className="product-card__description">{product.description}</p>
      </div>
      {isTooltipShown && (
        <Tooltip x={tooltipX} y={tooltipY} content={product}>
          {render(product)}
        </Tooltip>
      )}
    </div>
  );
};

export default ProductCard;
