import React from "react";
import { IsThisYou } from "./subcomponents/IsThisYou";

export function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center text-center bg-blue-50">
        {/* Hero Section */}
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
          <img
            className="absolute w-full h-full object-cover opacity-90"
            src="src/assets/waterfall.jpg"
            alt="landscape image"
          />
          <h1 className="font-serif relative text-4xl md:text-6xl font-bold text-white shadow-lg p-4 bg-green-800 rounded-md">
            Go Balance Health
          </h1>

          <p className="font-serif relative mt-4 text-lg sm:text-3xl text-white bg-green-800 p-4 mx-4 rounded-md max-w-2xl">
            The GATEWAY to access the Brain’s Learning Pathways
          </p>

          <p className="italic font-serif relative mt-20 text-md sm:text-lg text-white bg-green-800 p-4 mx-4 rounded-md max-w-5xl">
            Restore Balance, Strengthen Neural Connections, and Unlock Learning
            Pathways —Holistic Nourishment, Personalized Coaching, and Proven
            Programs for Neuro-divergent Learners -- learners challenged with
            focus, attention, listening, organization & planning-- to Grow,
            Learn, and Live well{" "}
          </p>
        </div>

        {/* Quote Section */}
        <div className="text-emerald-900 p-6 m-6">
          <i>
            "I will instruct thee and teach thee in the way which thou shalt go:
            I will guide thee with mine eye."
          </i>
          <p className="mt-2 font-semibold">- Psalm 32:8 KV</p>
        </div>

        <div className="mx-5 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Breathe. Step Back. Simplify.
          </h1>
          <p className="text-lg mb-6">
            Now… let's get back to what truly matters.
          </p>
          <p className="text-lg mb-6">
            Your mind, body, and soul are deeply connected; when they are in
            harmony, learning, well-being, and daily life flow effortlessly.
          </p>
          <p className="text-lg mb-6">
            Here, you'll find the Keys to unlock the powerful connection between
            your brain, heart, and gut—the gateway to better learning, more
            precise communication, and greater ease in everyday life.
          </p>
          <div className="bg-sky-600 text-white rounded-lg shadow-sm max-w-4xl mx-auto p-3 m-5">
            <h2 className="text-2xl font-semibold mt-6 mb-4">The Keys:</h2>
            <p className="text-lg mb-6">
              Positive Beliefs - Nourishing Nutrition - A Safe and Supportive
              Environment - Timing - Rhythm - Movement - Routines - Habits
            </p>
          </div>

          <p className="text-lg mb-6">
            With the right support, transformation is not only possible—it's
            within reach. You can create new habits, embrace empowering
            strategies, and achieve greater balance, confidence, and joy for
            yourself and your family.
          </p>
          <p className="text-lg font-semibold">
            Welcome to a place where growth feels natural, learning feels
            joyful, and well-being becomes your foundation.
          </p>
          <p className="text-xl font-bold mt-6">Let's begin!</p>
        </div>
        <IsThisYou />

        {/* Encouragement Section */}
        <div className="p-6 my-6 bg-gray-200 rounded-lg shadow-md text-lg font-semibold text-gray-800 max-w-xl">
          Be diligent. Be faithful. Be hopeful. Be persistent. Be patient.
        </div>
      </div>
    </>
  );
}
