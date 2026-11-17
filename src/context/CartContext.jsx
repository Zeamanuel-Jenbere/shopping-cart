
import { createContext, useEffect, useReducer } from "react";
import cartReducer, { initialState } from "./cartReducer";

export const CartContext = createContext(null);

function getInitialCart() {
  try {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : initialState;
  } catch (error) {
    console.error("Could not load cart from localStorage:", error);
    return initialState;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState,
    getInitialCart
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
