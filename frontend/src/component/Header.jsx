import React, { useState } from "react";
import CustomShareButton from "./CustomShareButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const shareData = {
    text: "Check out GeeksforGeeks!",
    url: "https://www.geeksforgeeks.org",
    title: "GeeksforGeeks",
  };

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4">
        <a className="text-black text-2xl font-semibold" href="/">
          <span>Fundit</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Toggle button */}
          <button onClick={toggleMenu} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Nav menu */}
          <nav aria-label="Global" className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row items-center gap-6 text-base">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  How it works
                </a>
              </li>
              {/* Add other menu items here */}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-8">
              <CustomShareButton moreClass={"hidden sm:block"} shareData={shareData} buttonText="Share" />

              <a className="btn" href="/">
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
