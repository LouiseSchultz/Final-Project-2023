import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false); // New state variable

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
          setIsEmailSent(true); // Set the state to indicate that the email has been sent
        },
        (error) => {
          console.log(error.text);
        }
      );
  
  };

  return (
    <section className="bg-secondary py-16">
        
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/03/05/58/envelope-4313721_640.png"
            alt="Kontaktbild"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />

          <div className="max-w-lg mx-auto md:w-1/2 md:ml-4">
            {isEmailSent ? (
                <div className="chat chat-start">
                  <div className="chat-bubble chat-bubble-info">
Danke für deine Nachricht! Wir melden uns!                </div>
                </div>
             
            ) : (
              // Render the form when the email has not been sent
              <form className="mb-8" ref={form} onSubmit={sendEmail}>
                {" "}
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
                    className="input-primary block w-full mt-1 px-3 py-2 border rounded-md text-gray-800"
                    required="required"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="btn-primary px-4 py-2 rounded-md text-white font-semibold hover:bg-orange-600 transition duration-300 ease-in-out">
                    Absenden
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
