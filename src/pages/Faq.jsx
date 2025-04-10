import faq from "../assets/faq/faq.png";
import divide from "../assets/reused/divide.png";

import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

const faqData = {
  "Spanish Classes": [
    {
      question: "How can I enroll in Spanish classes?",
      answer:
        "You can enroll by visiting our website and find the class that fits your level. Then, send us a message through the form on the contact page, or through Whatsapp, our office phone, social media, or email. You can find all the contact information at the bottom of any page of our site.",
    },
    {
      question: "Do you offer a free trial class?",
      answer:
        "Yes! We offer a free 1-hour trial class for new students to experience our teaching methods.",
    },
  ],
  // "Online Store": [
  //   {
  //     question: "What products do you sell in the online store?",
  //     answer:
  //       "We sell books, flashcards, worksheets, and digital resources to help you learn Spanish more effectively.",
  //   },
  //   {
  //     question: "Do you offer refunds or exchanges?",
  //     answer:
  //       "Yes, we have a 14-day return policy for physical items. Digital items are non-refundable.",
  //   },
  // ],
  "Payments & Policies": [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept PayPal transfers for all classes, or cash for in-person classes. If those options are not convenient for you, we can make other arrangements.",
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
                      ? "border-b-2 border-navy-blue font-bold text-navy-blue"
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

              <div className="mt-6 flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md md:ml-6 md:mt-0 md:w-1/3">
                <h2 className="text-2xl font-bold text-gray-800">
                  Still Have Questions?
                </h2>
                <p className="mt-3 text-gray-600">
                  If you have any further questions or need additional
                  information, feel free to reach out! We&apos;re here to help
                  you on your journey to mastering Spanish.{" "}
                  <Link className="text-navy-blue underline" to="/contact">
                    Contact us
                  </Link>{" "}
                  directly through our form, email, or social media, and
                  we&apos;ll be happy to assist you.
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
