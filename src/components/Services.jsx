import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
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
    <div className="flex flex-row flex-wrap p-5 justify-center items-center bg-gray-100">
      {serviceList.map((service, index) => (
        <Link to="#" key={"link-" + index} className="hover:opacity-70">
          <Card key={"card-" + index} className=" w-80 h-90 flex-col p-5 m-3 ">
            <CardMedia
              className="size-60 rounded-md object-cover m-auto"
              image="./src/assets/vegetables.jpg"
              text="Vegetables"
              key={"card-media-" + index}
            />
            <CardContent
              className="text-center font-semibold p-2"
              key={"card-content-" + index}>
              {service}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
