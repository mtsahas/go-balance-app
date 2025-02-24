import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
export function SpecialPrograms() {
  const services = [
    {
      title: "Health and Education Discovery Sessions",
      description:
        "Explore personalized strategies for health and education tailored to your unique needs. This program does this and this and this and this and this. If your child is struggling to stay focused, do this, do this, or this, this program can help them get back on track.",
      image: "./src/assets/home.jpg",
    },
    {
      title: "Consultations",
      description:
        "Expert advice on health and education to support your personal and family goals.",
      image: "./src/assets/home.jpg",
    },
    {
      title: "Speech-Language Evaluations",
      description:
        "Comprehensive assessments to identify speech and language development needs.",
      image: "./src/assets/home.jpg",
    },
    {
      title: "Holistic Health and Education Coaching Programs",
      description:
        "Support for families, tweens, teens, and young adults in achieving their full potential.",
      image: "./src/assets/home.jpg",
    },
    {
      title: "Parent Coaching for Early Language Development",
      description:
        "Guidance for parents to foster early language skills and communication development.",
      image: "./src/assets/home.jpg",
    },
    {
      title:
        "Intensive Treatment / Management Programs for Auditory Processing",
      description:
        "Specialized programs for individuals with auditory processing challenges.",
      image: "./src/assets/home.jpg",
    },
  ];

  return (
    <div className="bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/3 h-50 object-cover shadow-lg"
              />
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
