import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Blog } from "./Blog";

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
  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl" id="books">
        Recommended Books
      </h1>
      <ul className="p-3">
        <li className="p-3">Book 1</li>
        <li className="p-3">Book 2</li>
        <li className="p-3">Book 3</li>
        <li className="p-3">Book 1</li>
        <li className="p-3">Book 2</li>
        <li className="p-3">Book 3</li>
      </ul>
      <p id="blog" className="text-3xl">
        Blogs
      </p>
      <Blog />
    </div>
  );
}
