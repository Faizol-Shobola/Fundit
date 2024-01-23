import { useState } from "react";
import jsonData from "../Api/data.json";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg text-left font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");

  const { faq } = jsonData;

  // Constants for messages
  const SUCCESS_MESSAGE = "Message sent, we'll get back in a while";
  const EMAIL_ERROR_MESSAGE = "Please enter a valid email address.";
  const QUESTION_ERROR_MESSAGE = "Please enter your question.";

  // validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    return regex.test(email);
  };

  // more queries handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateEmail(email)) {
      setStatus(EMAIL_ERROR_MESSAGE);
      return;
    }

    if (question.trim() === "") {
      setStatus(QUESTION_ERROR_MESSAGE);
      return;
    }
    
    setStatus(SUCCESS_MESSAGE);

    // Clear form fields after submission
    setEmail("");
    setQuestion("");
  };

  return (

    <div class="max-w-xl sm:mx-auto lg:max-w-2xl px-4">
      <div class="flex flex-col my-10 lg:mb-10 lg:mt-5">
        <div class="max-w-xl lg:max-w-2xl">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            {faq.title}
          </h2>
          <p class="text-base text-gray-700 md:text-lg">{faq.subtitle}</p>
        </div>
      </div>
      <div class="space-y-4">
        {faq.faqs.map((item, index) => (
          <Item key={index} title={item.question}>
            {item.answer}
          </Item>
        ))}

        {/* FORM */}
        <div className="border rounded shadow-sm">
          <button
            type="button"
            aria-label="Open item"
            title="Open item"
            className="flex items-center justify-between w-full p-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-left text-lg font-medium">Have any queries?</p>
            <div className="flex items-center justify-center w-8 h-8 border rounded-full">
              <svg
                viewBox="0 0 24 24"
                className={`w-3 text-gray-600 transition-transform duration-200 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="2,7 12,17 22,7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          {isOpen && (
            <div className="p-4 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border border-black bg-white p-3 text-gray-700 shadow-sm transition"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="email" className="sr-only">
                    Question
                  </label>

                  <textarea
                    placeholder="What is your question.."
                    className="w-full border border-black bg-white p-3 text-gray-700 shadow-sm transition"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex sm:flex-grow sm:flex-1 w-full items-center justify-center gap-2 bg-black px-5 py-3 text-white transition sm:mt-0"
                >
                  <span className="text-sm font-medium"> Submit </span>
                </button>
                {status && (
                  <p
                    className={
                      status === SUCCESS_MESSAGE ? "text-green-500" : "text-red-500"
                    }
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};
