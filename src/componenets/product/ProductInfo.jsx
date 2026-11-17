
import { FaShoppingCart, FaStar } from "react-icons/fa";
import useCart from "../../hooks/useCart";

function ProductInfo({ product }) {
  const { dispatch } = useCart();

  if (!product) return null;

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  }

  return (
    <div className="product-info">
      <p className="product-category">
        {product.category}
      </p>

      <h1>{product.title}</h1>

      <div className="product-rating">
        <FaStar />
        <span>{product.rating?.rate || 0}</span>
        <span>
          ({product.rating?.count || 0} reviews)
        </span>
      </div>

      <h2>${product.price.toFixed(2)}</h2>

      <p>{product.description}</p>

      <button onClick={handleAddToCart}>
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductInfo;
