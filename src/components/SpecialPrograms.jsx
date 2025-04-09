import { useState } from "react";

export function SpecialPrograms() {
  const [activeProgram, setActiveProgram] = useState(null);

  const programs = [
    {
      title: "The Alert Program",
      image: "/tree.jpg",
      description: (
        <div>
          <h3 className="text-xl font-semibold text-sky-800 mb-2">
            Helping Individuals Recognize and Regulate Their Levels of Alertness
          </h3>
          <p>
            The Alert Program empowers individuals of all ages to understand and
            manage their sensory and emotional regulation. By using simple
            strategies, this program helps participants recognize their body's
            signals and adjust their energy levels to match the demands of
            different situations—whether they need to focus, calm down, or
            energize.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Develops self-regulation skills</li>
            <li>Enhances focus and attention</li>
            <li>Supports emotional and behavioral control</li>
          </ul>
          <p className="mt-4 text-blue-800 hover:underline">
            <a href="https://alertprogram.com" target="_blank">
              Click here to learn more.
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "The Interactive Metronome Program",
      image: "/nature.jpg",
      description: (
        <div>
          <h3 className="text-xl font-semibold text-sky-800 mb-2">
            Improving Timing, Coordination, and Cognitive Processing
          </h3>
          <p>
            The Interactive Metronome (IM) Program is a cutting-edge,
            brain-based training system that enhances timing and
            rhythm—essential cognitive and motor function skills. This program
            helps improve attention, coordination, processing speed, and memory.
            It is particularly beneficial for individuals with APD, ADHD,
            learning disabilities, autism, or brain injuries.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Boosts focus and impulse control</li>
            <li>Enhances motor coordination and balance</li>
            <li>Strengthens memory and cognitive processing</li>
          </ul>
          <p className="mt-4 text-blue-800 hover:underline">
            <a href="https://www.interactivemetronome.com" target="_blank">
              Click here to learn more.
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "The Listening Program (TLP)",
      image: "/waterfall.jpg",
      description: (
        <div>
          <h3 className="text-xl font-semibold text-sky-800 mb-2">
            Transforming the Brain Through Sound-Based Therapy
          </h3>
          <p>
            The Listening Program (TLP) is an evidence-based auditory training
            system that uses music and sound to strengthen brain function. It
            supports those with sensory processing challenges, attention issues,
            and learning difficulties, enhancing listening, communication, and
            cognitive abilities.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Improves auditory processing and comprehension</li>
            <li>Supports emotional and sensory regulation</li>
            <li>Enhances focus, learning, and communication</li>
          </ul>
          <p className="mt-4 text-blue-800 hover:underline">
            <a href="https://advancedbrain.com/about-tlp/" target="_blank">
              Click here to learn more.
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl text-sky-800 font-bold text-center mb-12">
        Special Programs
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:bg-emerald-50 transition ${
              activeProgram === index ? " h-fit" : "h-70"
            }`}
            onClick={() =>
              setActiveProgram(index === activeProgram ? null : index)
            }>
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-sky-800">
              {program.title}
            </h2>
            {activeProgram === index && (
              <div className="mt-4 text-left text-gray-700">
                {program.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
