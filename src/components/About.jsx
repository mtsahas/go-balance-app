import React from "react";
export function About() {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center p-8 bg-gray-100">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="./src/assets/headshot.jpg"
          alt="Profile"
          className="rounded-2xl shadow-lg w-3/4"
        />
      </div>

      {/* Right Column: Bio */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Cally Mushka</h1>
        <p className="text-md text-gray-500">
          <i>An Evaluator, An Educator, A Coach, An Advocate, A Mom</i>
        </p>
        <p className="text-lg text-gray-600">
          I aim to uncover root causes of learning and health/well-being issues
          along with you to properly address your and/or your loved one's needs
          to function across home, school and professional settings. <br />
          <br />
          My professional credentials include being a licensed speech-language
          pathologist and a functional/integrative health nutrition coach. In
          addition to these credentials, my interests and continuing education
          have also expanded to but not limited to the areas of Sensory
          Processing/Regulation, Auditory Processing and Executive Functioning.
        </p>
      </div>
    </div>
  );
}
