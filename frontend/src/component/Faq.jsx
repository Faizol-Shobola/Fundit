import { useState } from "react";

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
  return (
    // <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-16">
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl px-4">
      <div class="flex flex-col my-10 lg:mb-10 lg:mt-5">
        <div class="max-w-xl md:mx-auto lg:max-w-2xl">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span class="relative">The</span>
            quick, brown fox jumps over a lazy dog
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <div class="space-y-4">
        <Item title="The quick, brown fox jumps over a lazy dog?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="The first mate and his Skipper too will do?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="Is the Space Pope reptilian!?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="How much money you got on you?">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>

        {/* FORM */}
        <div className="border rounded shadow-sm">
          <button
            type="button"
            aria-label="Open item"
            title="Open item"
            className="flex items-center justify-between w-full p-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-lg font-medium">
              Suhbscribe to the mailing list
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
                <div className="sm:flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-black px-5 py-3 text-white transition sm:mt-0 sm:w-auto"
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
