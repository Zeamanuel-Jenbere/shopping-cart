
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import useCart from "../../hooks/useCart";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  }

  return (
    <div className="product-card">
      <Link to={`/shop/${product.id}`} className="product-image">
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <Link to={`/shop/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>

        <div className="product-rating">
          <FaStar />
          <span>{product.rating?.rate || 0}</span>
          <span>({product.rating?.count || 0} reviews)</span>
        </div>

        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>

          <button onClick={handleAddToCart}>
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
