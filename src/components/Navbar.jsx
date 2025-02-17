import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SingleLevelDropdownMenu } from "./SingleLevelDropdown";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navStyle =
    "text-lg font-semibold text-black hover:text-green-700 transition duration-300 ease-in-out transform";

  return (
    <nav className="bg-orange-50 drop-shadow-lg p-5 sticky top-0 z-20">
      <div className="flex justify-between items-center">
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <ul
        className={`md:flex space-x-6 bg-orange-50 items-center justify-center md:static absolute w-full left-0 md:w-auto md:flex-row flex-col md:space-y-0 space-y-4 p-5 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-green-700" : "")
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-green-700" : "")
            }>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-green-700" : "")
            }>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-green-700" : "")
            }>
            Special Programs
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              navStyle + (isActive ? " text-blue-500" : "")
            }>
            Blog
          </NavLink>
        </li> */}
        {/* <li>
          <SingleLevelDropdownMenu
            buttonLabel="Free Resources"
            items={[
              { title: "ASHA", url: "https://www.asha.org/" },
              { title: "Documenting Hope", url: "https://documentinghope.com" },
              {
                title: "My Child Will Thrive",
                url: "https://www.mychildwillthrive.com",
              },
              { title: "SPD Star", url: "https://sensoryhealth.org" },
              { title: "EWG", url: "https://www.ewg.org" },
              {
                title: "Children's Health Defense",
                url: "https://childrenshealthdefense.org",
              },
            ]}
            styler={navStyle}
          />
        </li> */}
        <li>
          <SingleLevelDropdownMenu
            buttonLabel="Resources"
            items={[
              { title: "Recommended Books", url: "resources#books" },
              {
                title: "Blog",
                url: "resources#blog",
              },
            ]}
            styler={navStyle}
          />
        </li>
        {/* Right-Aligned Item */}
        <li className="absolute right-2 p-2 text-right font-semibold hidden sm:inline">
          <p>123-456-7890</p>
          <p>marymary@gmail.com</p>
        </li>{" "}
      </ul>
    </nav>
  );
}
