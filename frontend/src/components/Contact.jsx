import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ro8guz1",
        "template_xtofocp",
        form.current,
        "5OSbwbRysM4y6v5NW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Unser Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Teammitglied 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQHAnFDD_w2Vqw/profile-displayphoto-shrink_800_800/0/1653409647223?e=1701302400&v=beta&t=fFp3dnAtdfQoDksxxSX2NlZ3gP7SzlIwLVjaPeTrf0g"
              alt="Teammitglied 1"
              className="w-full h-65 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-primary">Juliette</h3>
            </div>
          </div>

          {/* Teammitglied 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/C5603AQFC6xqmafY3rw/profile-displayphoto-shrink_800_800/0/1578247018726?e=1701302400&v=beta&t=635gSbXgp_zl4w95MCVq6AjEDUWgihMOllTCFqyTJh0"
              alt="Teammitglied 2"
              className="w-full h-66 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-primary">Leotrim</h3>
            </div>
          </div>

          {/* Teammitglied 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/C5603AQHzsOrYa-LGGQ/profile-displayphoto-shrink_400_400/0/1573990048335?e=1701302400&v=beta&t=_La0a5ZD5BC_ulBgXgLPxVHcgQ-ydaNWDHBUEeJ9JF0"
              alt="Teammitglied 3"
              className="w-full h-65 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-primary">Louise</h3>
            </div>
          </div>

          {/* Teammitglied 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQFwr7g501WhRg/profile-displayphoto-shrink_800_800/0/1646742064482?e=1701302400&v=beta&t=C1dR910aGdPsQybiv8H4Kqtmp2OfEMF5iw2iuvuZQu4"
              alt="Teammitglied 4"
              className="w-full h-66 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-primary">Stephanie</h3>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-10">
          {isEmailSent ? (
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-info">
                Danke für deine Nachricht! Wir melden uns!
              </div>
            </div>
          ) : (
            <div className="card bg-white text-primary-content">
              <div className="card-body">
                <form className="mb-8" ref={form} onSubmit={sendEmail}>
                  <h2 className="text-3xl font-extrabold mb-8">
                    Kontaktiere Uns
                  </h2>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-gray-600 text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
                      required="required"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-600 text-sm font-medium mb-1">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
                      required="required"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-600 text-sm font-medium mb-1">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="input-primary block w-full mt-2 px-3 py-2 border rounded-md text-gray-800"
                      required="required"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}></textarea>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="btn-secondary px-4 py-2 rounded-md text-black font-semibold hover:bg-orange-600 transition duration-300 ease-in-out">
                      Absenden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
