import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import lightbulb from "../assets/contact/lightbulb.png";
import pencil from "../assets/contact/pencil.png";
import semicolon from "../assets/contact/semicolon.png";
import contact from "../assets/contact/contact.png";

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [fadeOut, setFadeOut] = useState(false); // Track fade out

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          setStatusType("success");
          form.current.reset();

          // Trigger fade-out after 10 seconds
          setTimeout(() => {
            setFadeOut(true); // Start fading out
          }, 10000);

          // Reset the message state after 12 seconds to complete fade
          setTimeout(() => {
            setStatusMessage("");
            setStatusType("");
            setFadeOut(false); // Reset fade state
          }, 12000);
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Please try again.");
          setStatusType("error");

          console.log("FAILED...", error.text);

          // Trigger fade-out after 10 seconds
          setTimeout(() => {
            setFadeOut(true); // Start fading out
          }, 10000);

          // Reset the message state after 12 seconds to complete fade
          setTimeout(() => {
            setStatusMessage("");
            setStatusType("");
            setFadeOut(false); // Reset fade state
          }, 12000);
        },
      );
  };

  return (
    <div className="w-full bg-navy-blue">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center bg-white px-5 py-16 md:flex-row">
          <div className="w-full px-6 text-center">
            <h2 className="text-5xl font-bold leading-tight text-mx-yellow md:text-6xl lg:text-7xl">
              Book A Class / Contact
            </h2>
          </div>
        </div>

        <div className="relative flex flex-col items-center bg-white p-6">
          <img
            className="absolute left-0 top-0 max-w-72"
            src={pencil}
            alt="pencil"
          />
          <img
            className="absolute right-0 top-0 max-w-40"
            src={lightbulb}
            alt="lightbulb"
          />
          <img
            className="absolute bottom-0 left-0 max-w-40"
            src={semicolon}
            alt="semicolon"
          />
          <p className="z-10 p-4 text-2xl font-bold">
            We&apos;d love to hear from you!
          </p>
          <p className="z-10 px-4 py-10 text-lg">
            Whether you have questions, need more information, or want to start
            your Spanish learning journey, we&apos;re here to help.
          </p>
          <div className="z-10 flex w-full flex-col items-center justify-center gap-10 px-6 py-12 lg:flex-row">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex w-full max-w-2xl flex-col gap-4 rounded-xl bg-gray-100 p-6 shadow-lg"
            >
              <label className="text-left font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="rounded-md border border-gray-300 p-3"
                placeholder="Your Name"
              />

              <label className="text-left font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="rounded-md border border-gray-300 p-3"
                placeholder="your@email.com"
              />

              <label className="text-left font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                className="rounded-md border border-gray-300 p-3"
                placeholder="Your message..."
                rows="4"
              />

              <button
                type="submit"
                className="rounded-xl bg-mx-yellow p-3 font-bold text-white hover:bg-yellow-500"
              >
                Send Message
              </button>

              {statusMessage && (
                <p
                  className={`mt-4 text-center text-sm font-semibold ${
                    statusType === "success" ? "text-green-600" : "text-red-600"
                  } ${fadeOut ? "fade-out" : ""}`}
                >
                  {statusMessage}
                </p>
              )}
            </form>

            <div>
              <img
                src={contact}
                alt="two guys talking to each other"
                className="z-10 max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
