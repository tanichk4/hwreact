import { useState, useEffect } from "react";
import ProductCardList from "./ProductCardList";
import Tooltip from "./Tooltip";

function Task4() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .catch((err) => setError(err.message))
      .then((data) => setProducts(data));
  }, []);

  const renderContent = (product) => (
    <div>
      <h2>{product.title}</h2>
      <p>{`Price: ${product.price}`}</p>
      <p>{`Rating: ${product.rating}`}</p>
    </div>
  );

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductCardList
        products={products}
        render={(product) => renderContent(product)}
      />
    </div>
  );
}

export default Task4;
