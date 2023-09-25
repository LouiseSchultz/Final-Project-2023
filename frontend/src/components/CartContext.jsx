import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const existingItemIndex = cart.findIndex((item) => item.id === book.id);

    if (existingItemIndex !== -1) {
      // If the book already exists in the cart, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the book doesn't exist in the cart, add it
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter((item) => item.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
