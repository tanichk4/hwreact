const Tooltip = ({ x, y, content: product}) => {
  const styles = {
    position: "absolute",
    top: y + 10,
    left: x + 10,
    background: "#fff",
    border: "1px solid #ccc",
    padding: "10px",
  };

  return (
    <div style={styles} className="tooltip">
      <h2>{product.title}</h2>
      <h3>Price: ${product.price}</h3>
      <h4>Category: {product.category}</h4>
    </div>
  );
};

export default Tooltip;
