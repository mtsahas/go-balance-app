import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white drop-shadow-lg p-5">
      <ul className="flex space-x-6 items-center justify-center">
        <li>
          <Link
            to="/"
            className="text-lg font-semibold hover:text-blue-200 focus:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110 focus:scale-110">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-lg font-semibold hover:text-blue-200 focus:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110 focus:scale-110">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-lg font-semibold hover:text-blue-200 focus:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110 focus:scale-110">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
