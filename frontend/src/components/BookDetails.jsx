// BookDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext"; // Import useCart hook

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const { addToCart, setSelectedBook } = useCart(); // Use addToCart and setSelectedBook from the context

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await axios.get(
          `http://localhost:5000/books/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Buchdaten:", error);
      }
    }

    fetchBookDetails();
  }, [bookId]);

  const handleAddToCart = () => {
    if (book) {
      setSelectedBook(book);
      addToCart(book);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="grid flex-shrink-0 place-items-center my-20 lg:pr-6">
          {/* Left content */}
          <div className="carousel max-w-[400px] rounded-box">
            {/* Carousel content */}{" "}
              <img
                src={`http://localhost:5000${book.image}`}
                alt={`${book.title} book`}
                className="rounded-xl w-[400px] h-[500px] object-cover"
              />
          </div>
          <div className="flex justify-center w-full mt-3 py-2 gap-2">
            <a href="#slide1" className="btn btn-xs">
              1
            </a>
            <a href="#slide2" className="btn btn-xs">
              2
            </a>
          </div>
        </div>
        <div className="divider lg:divider-horizontal" />
        <div className="grid flex-shrink my-20">
          {/* Right content */}
          <div className="flex flex-col space-y-5 lg:pl-4">
            <div className="badge badge-secondary text-xs">{book.category}</div>
            <h2 className="text-2xl text-black font-bold">{book.title}</h2>
            <p className="text-lg">
              <span className="text-black">{book.author}</span>
            </p>
            <h3 className="text-black text-xl font-semibold">
              {book.price} Euro
            </h3>
            <button
              type="button"
              className="btn btn-primary w-[200px]"
              onClick={handleAddToCart}>
              Add to Cart
            </button>
            {/* Tabs */}
            <div className="tabs pt-12">
              <button
                type="button"
                className="tab tab-lg tab-lifted tab-active">
                Description
              </button>
            </div>
            <p className="text-black">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
