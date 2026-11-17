
function ProductImages({ product }) {
  if (!product) return null;

  return (
    <div className="product-images">
      <div className="main-product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>
    </div>
  );
}

export default ProductImages;
