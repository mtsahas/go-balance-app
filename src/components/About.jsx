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

        <p className="text-xl text-sky-800 font-bold pb-2">
          Evaluator. Educator. Coach. Mom.
        </p>

        <p className="text-xl mb-4">
          Hi, I'm Cally Mushka. If your child struggles with learning, focus, or
          communication—and you're not sure what to do next—you're not alone.
          I'm here to help you find the answers that others have missed.
        </p>

        <p className="text-xl mb-4">
          My method is simple: We build the foundation first. We look at the
          brain, the body, and the daily patterns—and we strengthen what’s
          missing. Then the rest—focus, learning, communication—can finally
          grow. I call this the FIG & FIN Method: Fill in the Gaps + Fuel with
          Functional Intuitive Nourishment. It’s not therapy that sits on the
          surface—it’s transformation from the inside out.
        </p>

        <p className="text-xl mb-4 text-green-800 font-bold">
          Ready to stop guessing and start seeing real progress? Contact me at
          gobalancehealth@gmail.com to book a free 15-minute call — let’s talk
          about what’s possible for you or your child.
        </p>

        {/* <p className="text-lg text-sky-800 font-bold pb-2">
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
          If you are ready to schedule a discovery session, contact me at
          gobalancehealth@gmail.com.
        </p> */}
      </div>
    </div>
  );
}
