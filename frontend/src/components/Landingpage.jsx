import React from "react";
import { Link } from "react-router-dom";
function Landingpage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-black py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Finde dein nächstes Lieblingsbuch
          </h1>
          <p className="text-lg mb-8">Erkunde mit uns die Welt der Bücher</p>
          <Link
            to="/books"
            className="btn-secondary text- text-lg font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out hover:secondary">
            Jetzt alle Bücher ansehen{" "}
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">Unsere Top List</h2>
          {/* Category cards using CSS Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Romantic Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://images2.medimops.eu/product/edf891/M03864899117-large.jpg"
                alt="Romantic Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">
                  Ab in die Küche
                </h3>
                <div className="mt-4 flex-grow">
                  <Link
                    to={`/books/650856e85633e3f2d3bc746b`}
                    className="btn btn-primary">
                    Zum Buch
                  </Link>
                </div>
              </div>
            </div>

            {/* Der grosse Gatsby */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://media2.hugendubel.de/shop/coverscans/310/31045333_9783150205143_xl.jpg"
                alt="Cooking Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">
                  Der Große Gatsby
                </h3>
                <div className="mt-4 flex-grow">
                  <Link
                    to={`/books/650856e85633e3f2d3bc7462`}
                    className="btn btn-primary">
                    Zum Buch
                  </Link>
                </div>
              </div>
            </div>

            {/* Kids Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://images2.medimops.eu/product/bb8fe4/M03969668786-large.jpg"
                alt="Kids Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">
                  Mollys wundersame Reise
                </h3>
                <div className="mt-4 flex-grow">
                  <Link
                    to={`/books/650856e85633e3f2d3bc7467`}
                    className="btn btn-primary">
                    Zum Buch
                  </Link>
                </div>
              </div>
            </div>

            {/* Study Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://images2.medimops.eu/product/50a134/M03809416436-large.jpg"
                alt="Study Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">
                  Sach - Zug um Zug{" "}
                </h3>
                <div className="mt-4 flex-grow">
                  <Link
                    to={`/books/650856e85633e3f2d3bc7469`}
                    className="btn btn-primary">
                    Zum Buch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktbereich */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">Kontakt</h2>
          <p className="text-gray-700 mb-8">
            Hast du Fragen oder Vorschläge? Zögere nicht, uns zu kontaktieren.
          </p>
          <Link
            to="/contact"
            className="btn-primary text- text-lg font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out hover:secondary">
          Kontaktformular
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
