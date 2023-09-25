import React from "react";
import { Link } from "react-router-dom/dist";

function Landingpage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-brown-400 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg mb-8">Explore a world of literature with us.</p>
          <Link
            to="/books"
            className="btn-secondary text- text-lg font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-orange-600">
            Explore Now
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">Categories</h2>
          {/* Category cards using Daisy UI components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Romantic Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="romantic-category-image.jpg"
                alt="Romantic Category"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Romantic
                </h3>
                <div className="mt-4"></div>
              </div>
            </div>

            {/* Cooking Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="cooking-category-image.jpg"
                alt="Cooking Category"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-primary">Cooking</h3>
                <div className="mt-4"></div>
              </div>
            </div>

            {/* Kids Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="kids-category-image.jpg"
                alt="Kids Category"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-primary">Kids</h3>
                <div className="mt-4"></div>
              </div>
            </div>

            {/* Study Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="study-category-image.jpg"
                alt="Study Category"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-primary">Study</h3>
                <div className="mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktbereich */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            Have questions or suggestions? Feel free to reach out to us.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Landingpage;
