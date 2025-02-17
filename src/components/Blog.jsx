import React from "react";

export function Blog() {
  const blogs = [
    {
      title: "Speech-delay in toddlers",
      date: "February 14, 2025",
      author: "Dr. Emily Carter",
      category: "Child Development",
      image: "./src/assets/speech-delay.jpg",
      content:
        "Many parents worry when their toddlers are not speaking as early as expected. While every child develops at their own pace, it's important to recognize when to seek professional guidance. Early intervention can make a significant difference...",
      tags: ["Speech Therapy", "Child Development", "Parenting Tips"],
    },
    {
      title: "How to Encourage Healthy Eating Habits in Kids",
      date: "February 10, 2025",
      author: "Lisa Thompson",
      category: "Nutrition",
      image: "./src/assets/healthy-eating.jpg",
      content:
        "Encouraging kids to eat healthy foods can be a challenge, but it doesn't have to be a battle. Involving children in meal preparation, making food visually appealing, and offering a variety of nutritious options can foster healthy eating habits for life...",
      tags: ["Healthy Eating", "Parenting", "Wellness"],
    },
  ];

  return (
    <div>
      {blogs.map((item, index) => (
        <div key={index} className="p-5 h-fit w-full border my-10 rounded-lg ">
          <div
            className="text-xl text-blue-800 font-bold"
            key={"header" + index}>
            {item.title}
          </div>
          <div className="text-lg">{item.author}</div>
          <span className="text-sm" key={"date" + index}>
            <i>{item.date}</i>
          </span>
          <p className="text-md" key={"content" + index}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}
