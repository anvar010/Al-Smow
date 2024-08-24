import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-black font-bold bg-gray-600 bg-opacity-50">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-28 h-auto" />
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden md:overflow-visible md:max-h-full md:opacity-100 transition-all duration-300 ease-in-out w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <ul className="pt-4 text-base text-gray-700 md:flex md:space-x-6 md:pt-0">
            <li>
              <a className="md:p-4 py-2 block hover:text-blue-800" href="/">
                Home
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-blue-800"
                href="/services"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-blue-800"
                href="/careers"
              >
                Careers
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-blue-800" href="/blogs">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
