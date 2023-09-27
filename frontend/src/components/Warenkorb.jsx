// Warenkorb.js
import React, { useState, useEffect } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import { useCart } from "./CartContext";

function Warenkorb() {
  const { selectedBook, setSelectedBook, cart, addToCart, removeFromCart, increment, decrement } = useCart();

  const [books, setBooks] = useState([]);
  const [bookCounts, setBookCounts] = useState({});

  useEffect(() => {
    console.log("selectebook", selectedBook)
    console.log("cart", cart
    )
    if (selectedBook) {
      console.log("selectedBook eigentlich useCart", selectedBook);
      setBooks([...books, ...cart]);
      setBookCounts({ ...bookCounts, [selectedBook._id]: 1 });
      setSelectedBook(null); // Reset selectedBook after displaying it
    }
  }, [selectedBook]);

 

  // const removeBook = (bookId) => {
  //   const updatedBooks = books.filter((book) => book._id !== bookId);
  //   setBooks(updatedBooks);

  //   const updatedBookCounts = { ...bookCounts };
  //   delete updatedBookCounts[bookId];
  //   setBookCounts(updatedBookCounts);
  // };

  const calculateTotal = () => {
    let total = 0;
    for (const book of books) {
      total += bookCounts[book._id] * book.price;
    }
    return total.toFixed(2);
  };

  return (
    <div>
      <section className="bg-secondary py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-8">Your Shopping Cart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cart.map((book) => (
              <div
                key={book._id}
                className="bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-600">{book.author}</p>
                  <img
                    src={`http://localhost:5000${book.image}`}
                    alt={`${book.title} book`}
                    className="rounded-xl"
                  />
                  <p className="text-primary text-lg font-semibold mt-2">
                    {book.price} Euro
                  </p>
                  <div className="mt-4 flex justify-between">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => decrement(book)}
                        className="text-primary text-lg px-2 py-1 ing-primary">
                        <AiFillMinusCircle />
                      </button>
                      <p>{book.quantity}</p>
                      <button
                        onClick={() => increment(book)}
                        className="text-primary text-lg px-2 py-1 ing-primary">
                        <AiFillPlusCircle />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(book._id)}
                      className="text-primary hover:text-red-500 focus:outline-none">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">
                Total: €{calculateTotal()}
              </p>
              <p className="text-gray-600">(including VAT and shipping)</p>
            </div>
            <button className="btn-primary text-white text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Warenkorb;
