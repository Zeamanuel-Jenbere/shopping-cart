
import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";

function CartItem({ item }) {
  const { dispatch } = useCart();

  function updateQuantity(quantity) {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity,
      },
    });
  }

  function removeItem() {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item.id,
    });
  }

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>

      <div className="quantity-control">
        <button
          onClick={() => updateQuantity(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => updateQuantity(item.quantity + 1)}>
          +
        </button>
      </div>

      <strong>
        ${(item.price * item.quantity).toFixed(2)}
      </strong>

      <button className="remove-button" onClick={removeItem}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
