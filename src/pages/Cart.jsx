
import useCart from "../hooks/useCart";

import CartItem from "../componenets/cart/CartItem";
import EmptyCart from "../componenets/cart/EmptyCart";
import OrderSummary from "../componenets/cart/OrderSummary";

function Cart() {
  const { cart, dispatch } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  function handleClearCart() {
    const confirmed = window.confirm(
      "Are you sure you want to clear your cart?"
    );

    if (confirmed) {
      dispatch({ type: "CLEAR_CART" });
    }
  }

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <h1>Shopping Cart</h1>
        <EmptyCart />
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      <button
        className="clear-cart-button"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </section>

        <OrderSummary
          subtotal={subtotal}
          tax={tax}
          total={total}
        />
      </div>
    </main>
  );
}

export default Cart;
