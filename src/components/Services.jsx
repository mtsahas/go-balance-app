import React from "react";
export function Services() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Health & Education Discovery Sessions
        </h2>
        <p className="text-lg mb-6">
          Start your journey with a Discovery Session, where we assess
          strengths, challenges, and goals. These sessions help identify key
          areas of need and craft a tailored plan for success.
        </p>
        <img
          className="w-full h-64 object-cover mb-6"
          src="/discovery-center.jpg"
          alt="Discovery Session"
        />
        <ul className="list-disc list-inside text-lg mb-6 text-left">
          <li>
            Identify underlying difficulties in processing, organization, and
            communication
          </li>
          <li>Gain insights into strategies for success</li>
          <li>Personalized roadmap for growth</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Comprehensive Speech-Language Evaluations
        </h2>
        <p className="text-lg mb-6">
          Our expert-led evaluations assess communication skills,
          cognitive-linguistic abilities, and processing challenges that may
          impact learning, social interactions, and daily life.
        </p>
        <img
          className="w-full h-64 object-cover mb-6"
          src="/evaluation.jpg"
          alt="Speech Evaluation"
        />
        <ul className="list-disc list-inside text-lg mb-6 text-left">
          <li>Assess speech clarity, fluency, and comprehension</li>
          <li>
            Identify auditory, phonological, and language processing issues
          </li>
          <li>
            Develop individualized treatment plans for lasting improvement
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Holistic Health & Education 12-Week Coaching Program
        </h2>
        <p className="text-lg mb-6">
          This transformative coaching program is designed for young adults and
          families who seek to enhance cognitive skills, processing abilities,
          and overall well-being.
        </p>
        <img
          className="w-full h-64 object-cover mb-6"
          src="/coaching-program.jpg"
          alt="Coaching Program"
        />
        <ul className="list-disc list-inside text-lg mb-6 text-left">
          <li>
            Learn principles of bio-individual nourishment to support brain
            health
          </li>
          <li>
            Functional shifts in timing, rhythm, listening, and executive
            functioning
          </li>
          <li>
            Discover why and how the environment (internal and external) affects
            learning
          </li>
        </ul>
        {/*  
        <div className="max-w-6xl mx-auto p-6 shadow-lg bg-white rounded-2xl border border-gray-200 m-5 justify-center items-center">
          <h1 className="text-2xl font-bold text-center text-gray-900 p-4">
            What can you expect?
          </h1>
          <ul className="list-disc list-inside text-lg text-left px-6 pb-6">
            <li>
              An opportunity to learn the principles of bio-individual
              nourishment.
            </li>
            <li>
              Meaningful and functional improvement in timing, rhythm, listening
              and executive functioning (e.g., self-regulation) upon completion
              of specific programs geared to these skills.
            </li>
            <li>
              Shifts in brain-body balance so that you can more easily access
              your learning pathways and re- wire/strengthen neural connections
              in 3 to 12 months through completion of specialty programs.
            </li>
            <li>
              Support, guidance and an accountability partner to help you create
              and establish new daily habits and routines that can improve your
              daily living and help you facilitate access to your learning
              pathways.
            </li>
            <li>
              Supervision, guidance and feedback while participating in the
              specialized programs geared to improve the neural timing
              underpinnings (brain synchronization, rhythm, and timing) so that
              you may see improvements in memory, auditory processing, sensory
              processing and language processing.
            </li>
          </ul>
        </div>
        */}
        {/*  
        <h3 className="text-xl font-semibold mt-4 mb-2">Areas of Focus:</h3>
        <div className="bg-white p-6 rounded-lg shadow-md my-4">
          <h4 className="text-lg font-semibold mt-4">
            Executive Functioning: Mastering Organization & Self-Regulation
          </h4>
          <ul className="list-disc list-inside text-lg mb-6 text-left ml-10">
            <li>Learn to initiate, plan, and organize effectively</li>
            <li>Strengthen problem-solving and decision-making skills</li>
            <li>
              Develop strategies for self-regulation and sustained attention
            </li>
          </ul>
          <h2>
            <b>Why It Matters:</b> Learning differences don’t have to limit
            success. With proper guidance, individuals can develop strategies
            that turn learning difficulties into strengths.{" "}
          </h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md my-4">
          <h4 className="text-lg font-semibold mt-4">
            Auditory Processing: Strengthening How the Brain Understands Sound
          </h4>
          <ul className="list-disc list-inside text-lg mb-6 text-left ml-10">
            <li>
              Improve the ability to filter and interpret auditory information
            </li>
            <li>Enhance listening skills in noisy environments</li>
            <li>
              Strengthen memory and comprehension through targeted strategies
            </li>
          </ul>
          <h2>
            <b>Why It Matters:</b>If you or your child struggles to follow
            directions, process spoken information, or retain details, auditory
            processing training can significantly improve communication and
            learning outcomes.
          </h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md my-4">
          <h4 className="text-lg font-semibold mt-4">
            Phonological Processing: Building Strong Reading & Writing Skills
          </h4>
          <ul className="list-disc list-inside text-lg mb-6 text-left ml-10">
            <li>Boost phonemic awareness and decoding skills</li>
            <li>Improve reading fluency and comprehension</li>
            <li>Strengthen spelling and written expression</li>
          </ul>
          <h2>
            <b>Why It Matters:</b> Phonological processing is critical for
            literacy development—strong skills in this area leads to better
            reading and writing performance.
          </h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md my-4">
          <h4 className="text-lg font-semibold mt-4">
            Language Processing: Enhancing Communication & Comprehension
          </h4>
          <ul className="list-disc list-inside text-lg mb-6 text-left ml-10">
            <li>Develop stronger verbal expression and vocabulary</li>
            <li>Improve sentence structure and language organization</li>
            <li>Strengthen reading comprehension and storytelling skills</li>
          </ul>
          <h2>
            <b>Why It Matters:</b> Language processing affects academic
            performance and social interactions—improving these skills help
            individuals communicate more effectively and confidently.
          </h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md my-4">
          <h4 className="text-lg font-semibold mt-4">
            Support for Learning Differences: Personalized Strategies for
            Success
          </h4>
          <ul className="list-disc list-inside text-lg mb-6 text-left ml-10">
            <li>Identify and address individual learning challenges</li>
            <li>Implement multi-sensory strategies for improved retention</li>
            <li>
              Build confidence and reduce frustration in academic settings
            </li>
          </ul>
          <h2>
            <b>Why It Matters:</b> Learning differences don’t have to limit
            success. With proper guidance, individuals can develop strategies
            that turn learning difficulties into strengths.
          </h2>
        </div>
        */}
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Why Choose Our Approach?
        </h2>
        <ul className="list-disc list-inside text-lg mb-6 text-left">
          <li>
            <b>Holistic & Personalized </b>– We integrate cognitive, linguistic,
            and executive function coaching for a well-rounded approach.
          </li>
          <li>
            <b>Practical, Real-World Strategies</b> – We don’t just teach
            concepts; we provide actionable techniques that work in everyday
            life.
          </li>
          <li>
            <b>Long-Term Success </b>– Our goal is to provide individuals with
            lifelong skills, not just short-term fixes.
          </li>
        </ul>

        <h2 className="text-2xl mt-6 mb-4">
          Are you ready to{" "}
          <b>
            unlock potential, improve processing skills, and build a brighter
            future?
          </b>
        </h2>
        <p className="text-lg pb-8">
          <b>Schedule a Discovery Session today!</b> Let’s create a path to
          success together.
        </p>
      </div>
    </div>
  );
}
