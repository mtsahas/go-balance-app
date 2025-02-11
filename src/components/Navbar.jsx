import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar({}) {
  const navStyle =
    "text-lg font-semibold hover:text-blue-500 focus:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110 focus:scale-110";
  return (
    <nav className="bg-white drop-shadow-lg p-5 sticky top-0 z-11">
      <ul className="flex space-x-6 items-center justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-blue-500" : "")
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-blue-500" : "")
            }>
            {" "}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-blue-500" : "")
            }>
            {" "}
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-blue-500" : "")
            }>
            {" "}
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
