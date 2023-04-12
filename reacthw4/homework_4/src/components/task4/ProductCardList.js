import "./App.css";
import ProductCard from "./ProductCard";

const ProductCardList = ({ products, render }) => {
  return (
    <div className="product-card-list">
      {products.error}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} render={render} />
      ))}
    </div>
  );
};

export default ProductCardList;
