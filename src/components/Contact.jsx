import { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t7us5rs", "template_ohxxq7t", form.current, {
        publicKey: "9AfSNgMiMVhYEpNRz",
      })
      .then(
        () => {
          setStatus("✅ Your message has been submitted!");
          e.target.reset();

          // Remove the message after 5 seconds
          setTimeout(() => {
            setStatus(null);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("❌ Failed to send message. Please try again.");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 max-w-md mx-auto"
      >
        <input
          name="from_name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 hover:from-pink-500 hover:to-purple-500 transition-all"
        >
          Send Message <FiSend />
        </button>
      </form>

      {status && (
        <div className="mt-6 p-4 rounded-lg max-w-md mx-auto bg-green-100 text-green-800">
          {status}
        </div>
      )}
    </section>
  );
}
