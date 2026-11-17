
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import useCart from "../../hooks/useCart";

function Navbar() {
  const { cart } = useCart();

  // Calculate the total number of products in the cart
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FaStore />
        <span>ShopEase</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/shop">
          Shop
        </NavLink>

        <NavLink to="/cart" className="cart-link">
          <FaShoppingCart />
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
