import React from "react";
export function Testimonials() {
  return (
    <div className="justify-center p-8 bg-blue-50 h-full">
      <div className="w-full justify-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h1>

        <p className="text-lg text-gray-800 mb-4">
          Here are some testimonials from individuals and families I've had the
          privilege to work with:
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
          "Cally has been a lifesaver for our family. Her approach to learning
          and development has made a significant difference in our child's
          life."
        </blockquote>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
          "The progress we've seen in just a few months is remarkable. Highly
          recommend!"
        </blockquote>
      </div>
    </div>
  );
}
