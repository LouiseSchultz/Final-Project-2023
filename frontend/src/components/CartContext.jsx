// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addToCart = (book) => {
    console.log("add to cart");
    const existingItem = cart.find(
      (item) => item._id === book._id && item.title === book.title
    );
    console.log("cart", cart);
    if (existingItem) {
      // If the book already exists in the cart, update the quantity
      const updatedCart = cart.map((item) => {
        if (item._id === book._id && item.title === book.title) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      console.log("cart", cart);
      // If the book doesn't exist in the cart, add it
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const increment = (book) => {
    console.log("book", book);
    console.log("cart", cart);

    const updatedCart = [...cart].map((currentBook) => {
      if (currentBook._id === book._id) {
        currentBook.quantity++;
      }
      return currentBook;
    });
    setCart(updatedCart);
    console.log(updatedCart);
  };

  const decrement = (book) => {
    const updatedCart = [...cart].map((currentBook) => {
      if (currentBook._id === book._id) {
        currentBook.quantity--;
      }
      return currentBook;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (bookId) => {
    console.log("remove", bookId);
    console.log("cart", cart);
    const filteredCart = cart.filter((item) => item._id !== bookId);
    setCart(filteredCart);
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
        getTotalPrice,
        selectedBook,
        setSelectedBook,
        increment,
        decrement,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
