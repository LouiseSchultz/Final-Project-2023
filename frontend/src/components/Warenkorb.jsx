import { useState, useEffect } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

function Warenkorb() {
  const [books, setBooks] = useState([]);
  const [bookCounts, setBookCounts] = useState({});

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("/books"); // Make sure to use the correct API URL
        const initialBookCounts = {};
        response.data.forEach((book) => {
          console.log("book: ",book._id);
          initialBookCounts[book._id] = 0;
        });
        setBooks(response.data);
        setBookCounts(initialBookCounts);
      } catch (error) {
        console.error("Fehler beim Abrufen der Buchdaten:", error);
      }
    }

    fetchBooks();
  }, []);

  const increment = (bookId) => {
    console.log("increment book id ", bookId)
    console.log("bookCounts ",bookCounts)
    setBookCounts((prevCounts) => ({
      ...prevCounts,
      [bookId]: prevCounts[bookId] + 1,
    }));
  };

  const decrement = (bookId) => {
    if (bookCounts[bookId] > 0) {
      setBookCounts((prevCounts) => ({
        ...prevCounts,
        [bookId]: prevCounts[bookId] - 1,
      }));
    }
  };

  const removeBook = (bookId) => {
    const updatedBooks = books.filter((book) => book._id !== bookId);
    setBooks(updatedBooks);

    const updatedBookCounts = { ...bookCounts };
    delete updatedBookCounts[bookId];
    setBookCounts(updatedBookCounts);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const book of books) {
      total += bookCounts[book._id] * book.price;
    }
    return total.toFixed(2);
  };

  return (
    <>
      <div>
        <section className="bg-secondary py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-extrabold mb-8">Your Shopping Cart</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {books.map((book) => (
                <div
                  key={book.id}
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
                          onClick={() => decrement(book._id)}
                          className="text-primary text-lg px-2 py-1 ing-primary">
                          <AiFillMinusCircle />
                        </button>
                        <p>{bookCounts[book._id]}</p>
                        <button
                          onClick={() => increment(book._id)}
                          className="text-primary text-lg px-2 py-1 ing-primary">
                          <AiFillPlusCircle />
                        </button>
                      </div>
                      <button
                        onClick={() => removeBook(book._id)}
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
    </>
  );
}

export default Warenkorb;
