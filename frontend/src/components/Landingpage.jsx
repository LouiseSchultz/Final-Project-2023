import React from 'react';

function Landingpage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-black py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Finde dein nächstes Lieblingsbuch</h1>
          <p className="text-lg mb-8">Erkunde mit uns die Welt der Bücher</p>
          <a
            href="#"
            className="btn-primary text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-orange-600"
          >
            Jetzt entdecken
          </a>
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
                src="https://media2.hugendubel.de/shop/coverscans/330/33017060_9783423289849_xl.jpg"
                alt="Romantic Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">Das Cafe am Rande der Welt</h3>
                <div className="mt-4 flex-grow">
                  <a
                    href="#"
                    className="btn-primary text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                  >
                    Kaufen
                  </a>
                </div>
              </div>
            </div>

            {/* Cooking Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://media2.hugendubel.de/shop/coverscans/310/31045333_9783150205143_xl.jpg"
                alt="Cooking Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">Der Große Gatsby</h3>
                <div className="mt-4 flex-grow">
                  <a
                    href="#"
                    className="btn-primary text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                  >
                    Kaufen
                  </a>
                </div>
              </div>
            </div>

            {/* Kids Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://media2.hugendubel.de/shop/coverscans/362/36255834_9783446264199_xl.jpg"
                alt="Kids Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">Der Gesang der Flusskrebse</h3>
                <div className="mt-4 flex-grow">
                  <a
                    href="#"
                    className="btn-primary text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                  >
                    Kaufen
                  </a>
                </div>
              </div>
            </div>

            {/* Study Category */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src="https://media2.hugendubel.de/shop/coverscans/347/34735068_9783257070668_xl.jpg"
                alt="Study Category"
                className="w-full h-auto"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-2xl font-semibold text-primary">Der Vorleser</h3>
                <div className="mt-4 flex-grow">
                  <a
                    href="#"
                    className="btn-primary text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                  >
                    Kaufen
                  </a>
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
          <p className="text-gray-700 mb-8">Hast du Fragen oder Vorschläge? Zögere nicht, uns zu kontaktieren.</p>
          <a
            href="#"
            className="btn-primary text-white text-lg font-semibold px-8 py-4 rounded-full transition duration-300 ease-in-out hover:bg-orange-600"
          >
            Contact Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto text-center"></div>
      </footer>
    </div>
  );
}

export default Landingpage;
