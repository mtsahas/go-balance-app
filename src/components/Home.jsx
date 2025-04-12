import React from "react";
import { IsThisYou } from "./subcomponents/IsThisYou";
import { Testimonials } from "./Testimonials";

export function Home() {
  return (
    <>
      <div className="bg-white text-gray-800">
        <section className="bg-gradient-to-b from-emerald-100 to-white py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Text Content */}
            <div className="flex-1 text-left max-w-xl">
              <h1 className="text-5xl font-extrabold text-sky-800 leading-tight mb-6 font-sans">
                Go Balance Health
              </h1>
              <p className="text-2xl font-extrabold text-emerald-800 font-medium mb-6">
                Helping young people overcome challenges in focus, attention,
                listening, language processing, and planning—to grow, learn, and
                thrive.
              </p>
              <p className="text-2xl text-sky-800 mb-2">
                The <span className="font-bold">GATEWAY</span> to access the
                Brain’s Learning Pathways
              </p>
              <p className="text-xl italic text-gray-600">
                Obtain the <span className="font-semibold">KEYS</span> to Unlock
                the Gateway
              </p>
            </div>

            {/* Right Stacked Images */}
            <div className="flex-1 space-y-6">
              <img
                src="/woman-listening.jpg"
                alt="Image 1"
                className="rounded-xl shadow-md w-full max-h-64 object-cover"
              />
              <img
                src="/boy-listening.jpg"
                alt="Image 2"
                className="rounded-xl shadow-md w-full max-h-64 object-cover"
              />
            </div>
          </div>
        </section>
        {/* "Is This You?" Section */}
        <section className="bg-white py-5 px-6">
          <div className="max-w-4xl mx-auto text-gray-800">
            <h2 className="text-4xl font-bold text-emerald-700 text-center mb-8">
              Is This You?
            </h2>
            <ul className="space-y-5 text-xl list-disc">
              <li>
                Are you ready to work to enhance focus and learning, restore
                balance, and boost energy?
              </li>
              <li>
                Do you want to uncover root causes and missing links affecting
                you or your loved one’s ability to learn, listen, focus, and
                perform optimally?
              </li>
              <li>
                Are you frustrated with educational plans or interventions not
                working or not addressing you or your loved one as a whole
                person?
              </li>
              <li>
                Do you struggle with implementing professional recommendations
                in a way that truly works for you or your loved one?
              </li>
            </ul>

            <p className="mt-10 text-xl text-sky-900 font-semibold text-center">
              If you answered yes, you are not alone.
            </p>

            <p className="mt-4 text-lg text-gray-700">
              I’ve walked this path, both personally and professionally. With
              experience, empathy, and proven strategies, I can guide, educate,
              and empower you to restore balance in your life and unlock new
              possibilities for learning, communication, and well-being.
            </p>

            <div className="mt-8 text-center">
              <p className="text-xl font-bold text-emerald-800 mb-3">
                If this sounds like you, let’s talk. Email me to schedule a free
                15-minute call.
              </p>
              {/* <a
                href="#book"
                className="inline-block bg-sky-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-sky-700 transition">
                Call Today
              </a> */}
            </div>
          </div>
        </section>
        {/* Scripture Quote */}
        <section className="bg-emerald-50 text-center py-12 px-4">
          <blockquote className="italic text-2xl text-emerald-900 max-w-2xl mx-auto">
            "I will instruct thee and teach thee in the way which thou shalt go:
            I will guide thee with mine eye."
          </blockquote>
          <p className="mt-4 font-semibold text-sky-800">— Psalm 32:8 KJV</p>
        </section>
        {/* How Section */}
        <section className=" py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold text-sky-800 mb-6">The Keys</h2>
          <ul className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 font-medium">
            <li>🌱 Fill-in-The Gaps (FIG)</li>
            <li>🥦 Functional Intuitive Nourishment (FIN)</li>
            <li>
              🌀 Timing, Rhythm, Integration, and Movement (TRIM) Skill Building
            </li>
            <li>🧘 Calming your System so You Can Learn</li>
            <li>🔄 Build New Healthy Habits & Routines</li>
            <li>
              🧰 Expand Your Toolbox to help you Listen, Learn and Process
            </li>
          </ul>
        </section>
        {/* CTA Section */}
        {/* Encouragement Mantra Section */}
        <section className="bg-emerald-50 py-12 px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-sky-800 tracking-wide">
            Be Diligent. Be Faithful. Be Hopeful. Be Persistent. Be Patient.
          </h2>
        </section>
        <Testimonials />
      </div>
    </>
  );
}
