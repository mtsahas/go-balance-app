import React from "react";
export function About() {
  return (
    <div className=" text-justify justify-center p-8 bg-blue-50">
      {/* <div className="w-full md:w-1/8 flex justify-center">
        <img
          src="./src/assets/headshot.jpg"
          alt="Profile"
          className="rounded-2xl shadow-lg w-3/4 object-cover"
        />
      </div> */}
      {/* Right Column: Bio */}
      <div className="w-full flex flex-col justify-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-900 font-bold">
          Evaluator. Educator. Coach. Mom.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          I help individuals build strong foundations for learning,
          communication, and well-being by integrating specialized programs that
          support brain function, processing, and self-regulation. Whether at
          home, in school, or professional settings, I am here to guide and
          empower you toward meaningful, lasting progress.
        </p>

        <p className="text-lg text-gray-900 font-bold">My Approach</p>
        <p className="text-lg text-gray-800 mb-4">
          With a focus on the whole person, I incorporate evidence-based
          programs to enhance cognitive, sensory, and auditory processing. I
          utilize <b>The Alert Program</b> to support self-regulation,{" "}
          <b>The Interactive Metronome Program</b> to improve timing and
          coordination, <b> The Listening Program (TLP)</b> to strengthen
          auditory processing and attention, and
          <b> Lindamood-Bell's Visualizing and Verbalizing Program</b> to
          enhance language comprehension and thinking skills. By weaving these
          methods together, I help children and adults overcome challenges in
          learning, communication, and daily life.
        </p>

        <p className="text-lg text-gray-900 font-bold">Why I Do What I Do</p>
        <p className="text-lg text-gray-800 mb-4">
          Throughout my career, I’ve seen how processing, focus, and
          comprehension struggles can impact confidence and daily function. I
          believe that with the right tools and guidance, anyone can develop the
          skills needed to succeed. My work is rooted in empathy, experience,
          and a deep commitment to helping others find solutions that fit their
          unique needs.
        </p>

        <p className="text-lg text-gray-900 font-bold">My Philosophy</p>
        <p className="text-lg text-gray-800 mb-4">
          Just like constructing a strong building, personal growth and learning
          require a stable foundation. My approach starts from the ground
          up—strengthening core cognitive and sensory functions—so that
          higher-level skills can develop naturally. We can reinforce these
          foundations with patience and practice, creating a path for long-term
          success.
        </p>

        <p className="text-lg text-gray-900 font-bold">My Background</p>
        <p className="text-lg text-gray-800 mb-4">
          I am a <b>licensed speech-language pathologist</b> and a{" "}
          <b>functional/integrative health and nutrition coach</b> with
          extensive training in auditory and sensory processing,
          self-regulation, and executive functioning. By combining my expertise
          with innovative programs, I provide personalized strategies that
          support learning, communication, and well-being.<br></br> I'd love to
          connect if you're seeking a compassionate, knowledgeable guide to help
          navigate learning and processing challenges. Let’s work together to
          unlock potential and create new opportunities for success.
        </p>

        <p className="text-lg text-gray-900 font-bold">
          Unlock Potential Through Holistic Health & Education Support
        </p>
        <p className="text-lg text-gray-800 mb-4">
          At <b>GO BALANCE HEALTH AND WELL BEING</b>, we believe in a
          comprehensive, personalized approach to learning and wellness. Our
          services are designed to help young adults and families overcome
          challenges in executive functioning, auditory and language processing,
          and learning, equipping them with the essential tools needed to
          succeed in all areas of their lives—academically, socially, and
          personally.
        </p>
      </div>
    </div>
  );
}
