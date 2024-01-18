import { useState } from "react";
import jsonData from '../Api/data.json';

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
    
    const { faq } = jsonData;

  
  return (
    // <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-16">
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
            <p className="text-left text-lg font-medium">
              Subscribe to the mailing list
            </p>
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
              <form action="#" className="sm:flex sm:gap-4">
                <div className="space-y-4 md:flex flex-1 flex-grow flex-wrap gap-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border border-black bg-white p-3 text-gray-700 shadow-sm transition"
                  />

                  <label htmlFor="email" className="sr-only">
                    Question
                  </label>

                  <input
                    type="text"
                    placeholder="What is your question"
                    className="w-full border border-black bg-white p-3 text-gray-700 shadow-sm transition"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 bg-black px-5 py-3 text-white transition sm:mt-0"
                >
                  <span className="text-sm font-medium"> Sign Up </span>

                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};
