import React from "react";

function Proceed() {

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center text-primary mb-6">
            Kaufen
          </h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="user_email"
                className="block text-gray-600 text-sm font-medium mb-1">
                E-Mail
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="input input-primary w-full mt-1"
                required="required"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Lieferadresse</h3>
            <div className="mb-4">
              <label htmlFor="shippingName" className="text-gray-600 text-sm">
                Name
              </label>
              <input
                type="text"
                id="shippingName"
                placeholder="Vor- und Nachname"
                className="input input-primary w-full mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="shippingAddress"
                className="text-gray-600 text-sm">
                Adresse
              </label>
              <input
                type="text"
                id="shippingAddress"
                placeholder="Lieferadresse"
                className="input input-primary w-full mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="shippingZip" className="text-gray-600 text-sm">
                PLZ
              </label>
              <input
                type="text"
                id="shippingZip"
                placeholder="Postleitzahl"
                className="input input-primary w-full mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="shippingCity" className="text-gray-600 text-sm">
                Stadt
              </label>
              <input
                type="text"
                id="shippingCity"
                placeholder="Stadt"
                className="input input-primary w-full mt-1"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4">Rechnungsadresse</h3>
            <div className="mb-4">
              <label htmlFor="billingName" className="text-gray-600 text-sm">
                Name
              </label>
              <input
                type="text"
                id="billingName"
                placeholder="Vor- und Nachname"
                className="input input-primary w-full mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="billingAddress" className="text-gray-600 text-sm">
                Adresse
              </label>
              <input
                type="text"
                id="billingAddress"
                placeholder="Rechnungsadresse"
                className="input input-primary w-full mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="billingZip" className="text-gray-600 text-sm">
                PLZ
              </label>
              <input
                type="text"
                id="billingZip"
                placeholder="Postleitzahl"
                className="input input-primary w-full mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="billingCity" className="text-gray-600 text-sm">
                Stadt
              </label>
              <input
                type="text"
                id="billingCity"
                placeholder="Stadt"
                className="input input-primary w-full mt-1"
              />
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Auf Rechnung</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full py-2">
              Bestellung abschließen
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Proceed;
