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
    {
      title: "The Importance of Play in Early Childhood",
      date: "January 28, 2025",
      author: "Mark Johnson",
      category: "Child Development",
      image: "./src/assets/play-time.jpg",
      content:
        "Play is not just a fun activity for kids—it is essential for their cognitive, social, and emotional development. Through play, children learn problem-solving skills, develop creativity, and build relationships with others...",
      tags: ["Child Psychology", "Parenting", "Early Learning"],
    },
    {
      title: "Managing Screen Time for Young Children",
      date: "January 15, 2025",
      author: "Sophia Reynolds",
      category: "Parenting",
      image: "./src/assets/screen-time.jpg",
      content:
        "With technology becoming more integrated into daily life, managing screen time for young children is more important than ever. Setting clear boundaries, choosing educational content, and promoting alternative activities can help maintain a healthy balance...",
      tags: ["Screen Time", "Digital Wellness", "Parenting"],
    },
    {
      title: "Sleep Training: Helping Your Baby Sleep Through the Night",
      date: "December 22, 2024",
      author: "Dr. Michael Greene",
      category: "Infant Care",
      image: "./src/assets/sleep-training.jpg",
      content:
        "Sleep training is a method used to help babies develop good sleep habits. There are several approaches, including the Ferber method and the no-tears method. Choosing the right strategy depends on your baby's needs and your parenting style...",
      tags: ["Sleep Training", "Newborn Care", "Parenting Advice"],
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
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
