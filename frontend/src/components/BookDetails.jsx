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
      <div className=" flex flex-col w-full lg:flex-row">
        <div className="grid flex-shrink-0 place-items-center my-20 lg:pr-6">
          <div className="carousel max-w-[400px] rounded-box">
            <div id="slide1" className="carousel-item relative">
              <img
                src={`http://localhost:5000${book.image}`}
                alt={`${book.title} book`}
                className="rounded-xl w-[400px] h-[500px] object-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative">
              <img
                src={`http://localhost:5000${book.image}`}
                alt={`${book.title} book`}
                className="rounded-xl w-[400px] h-[500px] object-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
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
          <div className="flex flex-col space-y-5 lg:pl-4">
            <div className="badge badge-secondary text-xs">{book.category}</div>
            <h2 className="text-2xl text-black font-bold">{book.title}</h2>
            <p className="text-lg">
              <span className="text-black">{book.author}</span>
            </p>
            <h3 className="text-black text-xl font-semibold">{book.price} €</h3>
            <button
              type="button"
              className="btn btn-primary w-[200px]"
              onClick={handleAddToCart}>
kaufen          </button>
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
  );}


export default BookDetails;
