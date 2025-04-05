import React from "react";
import { IsThisYou } from "./subcomponents/IsThisYou";

export function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <div className="relative w-full h-screen flex flex-col">
          <img
            className="absolute w-1/3 h-1/3 object-cover opacity-90 ml-200"
            src="/woman-listening.jpg"
            alt="landscape image"
          />
          <img
            className="absolute w-1/3 h-1/3 object-cover opacity-90 ml-200 mt-70"
            src="/boy-listening.jpg"
            alt="landscape image"
          />
          <p className="ml-0  relative text-xl sm:text-3xl mt-0 p-4 mx-4 rounded-md max-w-2xl">
            Helping young adults and children with focus, attention, listening,
            language processing, and organization/planning challenges -{" "}
            <b>to Grow, Learn, and Live well. </b>
          </p>
          <h1 className=" ml-0 relative mt-5 text-2xl md:text-3xl font-bold p-4  rounded-md max-w-2xl">
            Go <span className="font-sans text-5xl">Balance </span>Health
          </h1>

          <p className="ml-0 relative mt-4 text-lg sm:text-3xl p-4 rounded-md max-w-2xl">
            The GATEWAY to access the Brain’s Learning Pathways
          </p>
        </div>

        {/* Quote Section
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
          <div className="bg-sky-600 text-white rounded-lg shadow-sm max-w-3xl mx-auto p-3 m-5">
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
        </div> */}

        <div className="text-center mx-auto max-w-4xl p-6 mt-10">
          <h1 className="mt-4 text-2xl font-bold text-gray-600">
            The Keys to Unlocking Learning Pathways
          </h1>
          <ul className="mt-6 text-xl">
            <li>Fill-in-The Gaps (FIG)</li>
            <li>Functional Intuitive Nourishment (FIN)</li>
            <li>
              Timing, Rhythm, Integration, and Movement (TRIM) Skill Building
            </li>
            <li>Calming your System so You Can Learn</li>
            <li>Build New Healthy Habits & Routines</li>
            <li>Expand Your Toolbox to help you Listen, Learn and Process</li>
          </ul>
          <p className="mt-4 text-2xl font-bold text-gray-600">
            Start Your Journey – Book a Free Discovery Call Today
          </p>
        </div>

        <div className="py-10 px-6 space-y-16">
          {/* Section 1: Message + Image */}
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10 px-4">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-3xl font-extrabold text-sky-800 tracking-tight">
                How?
              </h1>

              <p className="text-lg text-gray-600">
                <ul>
                  <li>Fill-in-The Gaps (FIG)</li>
                  <li>Functional Intuitive Nourishment (FIN)</li>
                  <li>
                    Timing, Rhythm, Integration, and Movement (TRIM) Skill
                    Building
                  </li>
                  <li>Calming your System so You Can Learn</li>
                  <li>Build New Healthy Habits & Routines</li>
                  <li>
                    Expand Your Toolbox to help you Listen, Learn and Process
                  </li>
                </ul>
              </p>
            </div>
            <div className="md:w-1/3">
              <img
                src="/path/to/meditation-illustration.svg"
                alt="Calm meditation"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Section 2: Keys Block */}
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center border border-gray-100">
            <h2 className="text-3xl font-semibold text-sky-800 mb-4">
              🗝️ The Keys
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Positive Beliefs, Nourishing Nutrition, a Safe and Supportive
              Environment, Timing, Rhythm, Movement, Routines, and Habits.
            </p>
          </div>

          {/* Section 3: Alternating Content */}
          <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto gap-10 px-4">
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg text-gray-700">
                With the right support, transformation is not only possible—it’s
                within reach.
              </p>
              <p className="text-lg text-gray-700">
                You can create new habits, embrace empowering strategies, and
                achieve greater balance, confidence, and joy for yourself and
                your family.
              </p>
              <p className="text-xl font-semibold text-sky-800">
                Growth feels natural. Learning feels joyful. Well-being becomes
                your foundation.
              </p>
              <p className="text-2xl font-bold text-emerald-700 mt-4 animate-bounce">
                Let’s begin!
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/path/to/growth-illustration.svg"
                alt="Flourishing growth"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <IsThisYou />

        {/* Encouragement Section */}
        <div className="p-6 my-6 text-lg font-semibold text-gray-800 max-w-xl">
          Be diligent. Be faithful. Be hopeful. Be persistent. Be patient.
        </div>
      </div>
    </>
  );
}
