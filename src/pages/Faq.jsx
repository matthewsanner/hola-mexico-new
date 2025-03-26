import faq from "../assets/faq/faq.png";
import divide from "../assets/reused/divide.png";

import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const faqData = {
  "Spanish Classes": [
    {
      question: "How can I enroll in Spanish classes?",
      answer:
        "You can enroll by visiting our website and selecting the class that fits your level. Simply follow the enrollment instructions provided.",
    },
    {
      question: "Do you offer a free trial class?",
      answer:
        "Yes! We offer a free 30-minute trial class for new students to experience our teaching methods.",
    },
    {
      question: "What levels of Spanish classes do you offer?",
      answer:
        "We offer classes from beginner to advanced levels, including specialized courses for business and travel.",
    },
    {
      question: "What platforms do you use for online Spanish?",
      answer:
        "We use Zoom and Google Meet for our online Spanish classes, ensuring interactive and engaging lessons.",
    },
  ],
  "Online Store": [
    {
      question: "What products do you sell in the online store?",
      answer:
        "We sell books, flashcards, worksheets, and digital resources to help you learn Spanish more effectively.",
    },
    {
      question: "Do you offer refunds or exchanges?",
      answer:
        "Yes, we have a 14-day return policy for physical items. Digital items are non-refundable.",
    },
  ],
  "Payments & Policies": [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and Apple Pay for all our services and products.",
    },
    {
      question: "Do you offer installment plans?",
      answer:
        "Yes, we offer installment plans for some of our higher-priced courses. Contact us for more details.",
    },
  ],
};

function Faq() {
  const [activeTab, setActiveTab] = useState("Spanish Classes");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-navy-blue">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center bg-white px-5 py-16 md:flex-row">
          <div className="w-full px-6 text-center">
            <h2 className="text-5xl font-bold leading-tight text-mx-yellow md:text-6xl lg:text-7xl">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white p-6">
          <div className="mx-auto w-full max-w-5xl rounded-lg bg-gray-100 p-6 shadow-md">
            <div className="flex space-x-4 border-b pb-2">
              {Object.keys(faqData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-t-lg px-4 py-2 text-lg ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 font-bold text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row">
              <div className="rounded-lg bg-white p-6 shadow-md md:w-2/3">
                {faqData[activeTab].map((item, index) => (
                  <div key={index} className="border-b py-3">
                    <button
                      className="flex w-full items-center justify-between text-left text-lg font-medium"
                      onClick={() => toggleQuestion(index)}
                    >
                      {item.question}
                      {openIndex === index ? (
                        <MdExpandLess />
                      ) : (
                        <MdExpandMore />
                      )}
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-gray-600">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md md:ml-6 md:w-1/3">
                <h2 className="text-2xl font-bold text-gray-800">
                  Still Have Questions?
                </h2>
                <p className="mt-3 text-gray-600">
                  If you have any further questions or need additional
                  information, feel free to reach out! We&apos;re here to help
                  you on your journey to mastering Spanish. Contact us directly
                  through our form, email, or social media, and we&apos;ll be
                  happy to assist you.
                </p>
                <div className="m-4">
                  <img src={faq} alt="man asking a woman a question" />
                </div>
              </div>
            </div>
          </div>
          <img className="py-16" src={divide} alt="divider" />
        </div>
      </div>
    </div>
  );
}

export default Faq;
