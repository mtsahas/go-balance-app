import React from "react";

export function Home() {
  return (
    <div>
      <div className="relative h-screen flex justify-center align-center text-center">
        <h1 className="absolute text-3xl text-center font-bold md:text-5xl z-10 text-black opacity-100 top-8 p-3 left-1/2 transform -translate-x-1/2">
          GO Balance Health for Learning and Well-Being
        </h1>
        <img
          className="absolute w-full h-full object-cover opacity-50"
          src="./src/assets/home.jpg"
          alt="landscape image"
        />

        {/* First Text Box */}
        <div className="absolute font-semibold top-1/5 m-4 text-lg sm:text-xl text-white p-5 bg-black/50 rounded">
          Getting Back to Basics.
          <br />
          Simplify and Take a Step Back. Breathe. There is hope!
          <br />
          Never Give Up!
        </div>

        <div className="absolute bottom-40 m-4 text-lg sm:text-xl text-white p-5 bg-black/50 rounded">
          May you find something useful or informative on this website to help
          you on your journey of wellness and recovery for you or your loved
          one.
        </div>

        {/* Quote Box */}
        <div className="absolute bottom-20 m-4 text-lg text-black p-5 rounded bg-white opacity-75">
          <i>
            "I will instruct thee and teach thee in the way which thou shalt go:
            I will guide thee with mine eye."
          </i>{" "}
          - Psalm 32:8 KV
        </div>
      </div>

      <div className="text-center m-10">
        <h2 className="text-2xl mb-4">What can you do today?</h2>
        <p>
          Click here for the downloadable chart:{" "}
          <a
            href="/path/to/your/chart.pdf"
            className="text-blue-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            10 Simple Things You Can Do Starting Today for Health and Learning.
          </a>
        </p>

        <h2 className="text-2xl mb-4 mt-4">Schedule a Discovery Session</h2>
        <p>
          Interested in learning more? Schedule a discovery session to get
          personalized recommendations for your well-being journey!
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition">
          Book Now
        </button>
        <div className="text-lg p-5 m-5 rounded-3xl w-50 border-solid border ml-auto mr-auto">
          Be diligent
          <br />
          Be faithful
          <br />
          Be hopeful
          <br />
          Be persistent
          <br />
          Be patient
        </div>
      </div>
    </div>
  );
}
