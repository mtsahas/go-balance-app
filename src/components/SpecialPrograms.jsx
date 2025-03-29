import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
export function SpecialPrograms() {
  return (
    <div className="bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Special Programs
        </h1>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/tree.jpg"
              alt="Discovery Session"
              className="w-full md:w-1/3 h-80 object-cover shadow-lg"
            />
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4 hover:underline">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://alertprogram.com/">
                  The Alert Program
                </a>
              </h2>
              <h2 className="text-xl font-semibold mb-4 ">
                Helping Individuals Recognize and Regulate Their Levels of
                Alertness
              </h2>
              <p className="text-gray-800">
                The Alert Program empowers individuals of all ages to understand
                and manage their sensory and emotional regulation. By using
                simple strategies, this program helps participants recognize
                their body's signals and adjust their energy levels to match the
                demands of different situations—whether they need to focus, calm
                down, or energize. Ideal for children, teens, and adults, the
                Alert Program fosters self-awareness, emotional control, and
                improved daily functioning at home, school, or work.
              </p>
              <ul className="list-disc list-inside text-gray-800 mt-4">
                <li>Develops self-regulation skills</li>
                <li>Enhances focus and attention</li>
                <li>Supports emotional and behavioral control</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/nature.jpg"
              alt="Discovery Session"
              className="w-full md:w-1/3 h-80 object-cover shadow-lg"
            />
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4 hover:underline">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.interactivemetronome.com/">
                  The Interactive Metronome Program
                </a>
              </h2>
              <h2 className="text-xl font-semibold mb-4">
                Improving Timing, Coordination, and Cognitive Processing
              </h2>
              <p className="text-gray-800">
                The Interactive Metronome (IM) Program is a cutting-edge,
                brain-based training system that enhances timing and
                rhythm—essential cognitive and motor function skills. Using a
                structured, interactive approach, IM helps improve attention,
                coordination, processing speed, and memory. This program is
                particularly beneficial for individuals with Auditory Processing
                Disorder (APD) in particular, temporal processing and bilateral
                integration difficulties, ADHD, learning disabilities, autism,
                or those recovering from brain injuries.
              </p>
              <ul className="list-disc list-inside text-gray-800 mt-4">
                <li>Boosts focus and impulse control</li>
                <li>Enhances motor coordination and balance</li>
                <li>Strengthens memory and cognitive processing</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/waterfall.jpg"
              alt="Discovery Session"
              className="w-full md:w-1/3 h-80 object-cover shadow-lg"
            />
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4 hover:underline">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://advancedbrain.com/about-tlp/">
                  The Listening Program (TLP)
                </a>
              </h2>
              <h2 className="text-xl font-semibold mb-4">
                Transforming the Brain Through Sound-Based Therapy
              </h2>
              <p className="text-gray-800">
                The Listening Program (TLP) is an evidence-based auditory
                training system that harnesses the power of music and sounds to
                strengthen brain function. It helps support individuals with
                sensory processing challenges, attention difficulties, or
                learning struggles, TLP enhances listening, communication, and
                cognitive skills. Through personalized listening sessions, this
                program fosters better auditory processing, emotional
                regulation, and overall learning capacity.
              </p>
              <ul className="list-disc list-inside text-gray-800 mt-4">
                <li>Improves auditory processing and comprehension</li>
                <li>Supports emotional and sensory regulation</li>
                <li>Enhances focus, learning, and communication</li>
              </ul>
            </div>
          </div>
          {/*  
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/home.jpg"
              alt="Discovery Session"
              className="w-full md:w-1/3 h-80 object-cover shadow-lg"
            />
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">
                Lindamood-Bell Visualizing and Verbalizing Program
              </h2>
              <h2 className="text-xl font-semibold mb-4">
                Building Stronger Thinking, Reading, and Language Comprehension
              </h2>
              <p className="text-gray-800">
                The Lindamood-Bell Visualizing and Verbalizing Program helps
                individuals develop the essential skill of mental imagery to
                improve reading comprehension, critical thinking, and expressive
                language. By strengthening the connection between words and
                images, this program supports individuals with dyslexia, ADHD,
                and other learning challenges. Whether struggling with reading
                fluency, comprehension, or verbal expression, participants gain
                the tools to understand, retain, and communicate ideas more
                effectively.
              </p>
              <ul className="list-disc list-inside text-gray-800 mt-4">
                <li>Enhances reading comprehension and retention</li>
                <li>
                  Strengthens critical thinking and problem-solving skills
                </li>
                <li>Improves verbal expression and communication</li>
              </ul>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
