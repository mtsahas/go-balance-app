import React from "react";
export function About() {
  return (
    <div className="justify-center p-8 bg-white-50">
      <div className="w-full justify-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-800  mb-4">About Me</h1>

        {/* Float the image to the left so text wraps around it */}
        <img
          className="w-70 h-70 float-none mx-auto sm:float-left rounded-md sm:mr-6 mb-2 object-cover"
          src="/cally_headshot.jpg"
          alt="Headshot"
        />

        <p className="text-lg text-sky-800 font-bold pb-2">
          Evaluator. Educator. Coach. Mom.
        </p>

        <p className="text-lg mb-4">
          I help individuals build strong foundations for learning,
          communication, and well-being by integrating specialized programs that
          support brain function, processing, and self-regulation. Whether at
          home, in school, or professional settings, I am here to guide and
          empower you toward meaningful, lasting progress.
        </p>

        <p className="text-lg text-sky-800  font-bold pb-2">
          My Approach: Go Balance Health – FIG & FIN
        </p>
        <p className="text-lg mb-4">
          With a focus on the whole person, I incorporate evidence-based
          programs to enhance cognitive skills, executive functions, auditory
          and language processing. We work together to{" "}
          <b>Fill-in-the-Gaps (FIG) </b>
          and utilize <b>Functional Intuitive Nourishment (FIN)</b> to build
          daily functioning and <b>“balance your health”.</b> I utilize{" "}
          <b>The Alert Program</b> to support self-regulation, The
          <b> Interactive Metronome Program</b> to improve timing and
          coordination, <b>The Listening Program (TLP)</b> to strengthen
          auditory processing and attention, and{" "}
          <b>Lindamood-Bell's Visualizing and Verbalizing Program</b> to enhance
          language comprehension and thinking skills. I help children and adults
          overcome challenges in learning, communication, and daily life.
        </p>

        <p className="text-lg text-sky-800 font-bold pb-2">
          Why I Do What I Do
        </p>
        <p className="text-lg mb-4">
          Throughout my career, I’ve seen how processing, focus, and
          comprehension struggles can impact confidence and daily function. I
          believe that with the right tools and guidance, anyone can develop the
          skills needed to succeed. My work is rooted in empathy, experience,
          and a deep commitment to helping others find solutions that fit their
          unique needs.
        </p>

        <p className="text-lg text-sky-800  font-bold pb-2">My Philosophy</p>
        <p className="text-lg mb-4">
          Just like constructing a strong building, personal growth and learning
          require a stable foundation. My approach starts from the ground
          up—strengthening core cognitive and sensory functions—so that
          higher-level skills can develop naturally. We can reinforce these
          foundations with patience and practice, creating a path for long-term
          success.
        </p>

        <p className="text-lg text-sky-800  font-bold pb-2">My Background</p>
        <p className="text-lg mb-4">
          I am a <b>functional/integrative health, nutrition education coach</b>{" "}
          and <b>a licensed speech-language pathologist</b> with extensive
          training in searching for underlying causes and filling in the gaps to
          address auditory and language processing, communication challenges,
          and executive functioning. By combining my expertise with innovative
          programs, I provide personalized strategies that support learning,
          communication, and well-being.
          <div className="pb-2"></div>
          I'd love to connect if you're seeking a compassionate, knowledgeable
          guide to help navigate learning and processing challenges. Let’s work
          together to unlock potential and create new opportunities for success.
        </p>

        <p className="text-lg text-sky-800 font-bold pb-2">
          If you want to book a free discovery appointment, contact me at
          gobalancehealth@gmail.com.
        </p>
      </div>
    </div>
  );
}
