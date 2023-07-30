import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-stone-50">
      <nav className="container mx-auto md:flex md:items-center md:justify-between p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-stone-400 text-xl font-semibold">
            <img
              src="https://gelecegiyazanlar.turkcell.com.tr/themes/custom/gyz/logo.svg"
              title="logo"
              alt="logo"
            />
          </Link>
          <button
            className="md:hidden text-stone-400 text-xl"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <ul className="md:flex md:space-x-4">
            <li
              onClick={() => navigate(-1)}
              className="block text-stone-400 hover:text-gray-200 py-2 px-4 cursor-pointer"
            >
              Back
            </li>
            <li>
              <Link
                to="/"
                className="block text-stone-400 hover:text-gray-200 py-2 px-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="block text-stone-400 hover:text-gray-200 py-2 px-4"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-stone-400 hover:text-gray-200 py-2 px-4"
              >
                Contact
              </Link>
            </li>
            <li
              onClick={() => navigate("/contact")}
              className="block text-stone-400 hover:text-gray-200 py-2 px-4 cursor-pointer"
            >
              Contact-useNavigate
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
