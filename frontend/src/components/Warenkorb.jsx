// Warenkorb.js
import React, { useState, useEffect } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useCart } from "./CartContext";

function Warenkorb() {
  const { selectedBook, setSelectedBook, cart, getTotalPrice, removeFromCart, increment, decrement } = useCart();

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

  return (
    <div>
      <section className="bg-secondary py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-8">
            Deine neue Lieblingsbücher
          </h2>
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
                    {book.price} €
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
                      Löschen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">
                Total: {getTotalPrice().toFixed(2)} €
              </p>
              <p className="text-gray-600">(inkl. MwSt)</p>
            </div>
            <button className="btn-primary text-white text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out">
              Bestellung abschließen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Warenkorb;
