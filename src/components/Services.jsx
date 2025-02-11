import React from "react";
export function Services() {
  const serviceList = [
    "Health and Education Discovery Sessions",
    "Consultations",
    "Speech-Language Evaluations",
    "Holistic Health and Education Coaching Programs for families, tweens, teens, and young adults.  ",
    "Parent Coaching for Early Language Development ",
    "Intensive Treatment /Management Programs for Auditory Processing",
    "Special Programs/Services",
    "Interactive Metronome ( all ages)",
    "The Listening Program (TLP)",
    "The Alert Program ",
    "PROMPT",
    "Lindamood-Bell Visualizing and Verbalizing Program",
  ];
  return (
    <div className="flex flex-row flex-wrap p-5 justify-center">
      {serviceList.map((service, index) => (
        <div className=" size-80 flex-col p-5">
          <img
            className="size-60 rounded object-cover"
            src="./src/assets/vegetables.jpg"
            alt="Vegetables"
          />
          <div className="" key={index}>
            {service}
          </div>
        </div>
      ))}
    </div>
  );
}
