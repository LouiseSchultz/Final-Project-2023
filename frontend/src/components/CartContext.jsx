// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addToCart = (book) => {
    const existingItem = cart.find(
      (item) => item.id === book._id && item.title === book.title
    );

    if (existingItem) {
      // If the book already exists in the cart, update the quantity
      const updatedCart = cart.map((item) => {
        if (item.id === book._id && item.title === book.title) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
        console.log("cart", cart)
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
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        selectedBook,
        setSelectedBook,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
