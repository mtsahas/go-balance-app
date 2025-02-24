import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Blog } from "./subcomponents/Blog";

export function Resources() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const books = [
    "./src/assets/addie.jpeg",
    "./src/assets/alchemist.jpg",
    "./src/assets/daisy-jones.jpg",
    "./src/assets/midnight-library.jpg",
  ];

  const websites = [
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
  ];
  return (
    <div className="p-10 bg-orange-50">
      <h1 className="text-3xl" id="books">
        Recommended Books
      </h1>
      <ul className="p-3 md:flex md:flex-row flex-col justify-center items-center text-center">
        {books.map((book, index) => (
          <li key={index} className="p-3">
            <img
              className="h-2xs w-2xs sm:h-sm sm:w-sm m-auto"
              src={book}
              alt={`Book ${index + 1}`}
            />
          </li>
        ))}
      </ul>
      <h1 className="text-3xl" id="websites">
        Informational Websites
      </h1>
      <ul className="p-3">
        {websites.map((website, index) => (
          <li key={index} className="p-3 text-xl decoration">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:underline">
              {website.title}
            </a>
          </li>
        ))}
      </ul>
      <p id="blog" className="text-3xl">
        Blogs
      </p>
      <Blog />
    </div>
  );
}
