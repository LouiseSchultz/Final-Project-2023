import React from 'react';

function Contact() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Foto 1 */}
          <img
            src="Bildquelle_Foto_1"
            alt="Foto 1"
            className="w-1/4 md:w-1/5 rounded-lg shadow-lg object-cover m-2"
          />

          {/* Foto 2 */}
          <img
            src="Bildquelle_Foto_2"
            alt="Foto 2"
            className="w-1/4 md:w-1/5 rounded-lg shadow-lg object-cover m-2"
          />

          {/* Foto 3 */}
          <img
            src="Bildquelle_Foto_3"
            alt="Foto 3"
            className="w-1/4 md:w-1/5 rounded-lg shadow-lg object-cover m-2"
          />

          {/* Foto 4 */}
          <img
            src="Bildquelle_Foto_4"
            alt="Foto 4"
            className="w-1/4 md:w-1/5 rounded-lg shadow-lg object-cover m-2"
          />

          {/* Kontaktformular Container */}
          <div className="max-w-lg mx-auto md:w-1/2 md:ml-4">
            <h2 className="text-3xl font-extrabold mb-8">Kontaktiere Uns</h2>
            {/* Kontaktformular */}
            <form className="mb-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="btn-primary px-4 py-2 rounded-md text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                >
                  Absenden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
