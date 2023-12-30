import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  calcularTotal: () => 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    } else {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((product) => product.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const calcularTotal = () => {
    return cart.reduce(
      (total, product) => total + product.precio * product.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, calcularTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
