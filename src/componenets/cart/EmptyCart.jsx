
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <FaShoppingCart className="empty-cart-icon" />

      <h2>Your Cart Is Empty</h2>

      <p>
        You haven't added any products to your cart yet.
      </p>

      <Link to="/shop" className="continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
