import React from "react";
import { IsThisYou } from "./IsThisYou";

export function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-center bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <img
          className="absolute w-full h-full object-cover opacity-60"
          src="./src/assets/home.jpg"
          alt="landscape image"
        />
        <h1 className="relative text-2xl sm:text-4xl md:text-6xl font-bold text-white shadow-lg p-4 bg-blue-900 rounded-md">
          GO Balance Health for Learning and Well-Being
        </h1>
        <p className="relative mt-4 text-md sm:text-xl text-white bg-blue-900 p-4 rounded-md max-w-xl">
          Getting Back to Basics. Simplify and Take a Step Back. Breathe. There
          is hope! Never Give Up!
        </p>
      </div>

      {/* Content Section */}
      <div className="p-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700">
            May you find something useful or informative on this website to help
            you on your journey of wellness and recovery for you or your loved
            one.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-blue-100 text-blue-900 p-6 m-6 rounded-lg shadow-md max-w-2xl">
        <i>
          "I will instruct thee and teach thee in the way which thou shalt go: I
          will guide thee with mine eye."
        </i>
        <p className="mt-2 font-semibold">- Psalm 32:8 KV</p>
      </div>

      <IsThisYou />
      {/* Actions Section */}
      <div className="text-center p-8">
        <h2 className="text-2xl font-semibold mb-4">What can you do today?</h2>
        <p>
          Click here for the downloadable chart:
          <a
            href="/path/to/your/chart.pdf"
            className="text-blue-500 hover:underline font-semibold ml-2"
            target="_blank"
            rel="noopener noreferrer">
            10 Simple Things You Can Do Starting Today for Health and Learning.
          </a>
        </p>
      </div>

      {/* Booking Section */}
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Schedule a Discovery Session
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Interested in learning more? Schedule a discovery session to get
          personalized recommendations for your well-being journey!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition">
          Book Now
        </button>
      </div>

      {/* Encouragement Section */}
      <div className="p-6 mt-6 bg-gray-200 rounded-lg shadow-md text-lg font-semibold text-gray-800 max-w-md">
        <p>Be diligent</p>
        <p>Be faithful</p>
        <p>Be hopeful</p>
        <p>Be persistent</p>
        <p>Be patient</p>
      </div>
    </div>
  );
}
