import React, { useState } from "react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Software Development",
      image: "https://cdn-icons-png.flaticon.com/128/2920/2920242.png",
    },
    {
      id: 2,
      name: "Graphic Design",
      image: "https://cdn-icons-png.flaticon.com/512/2939/2939047.png",
    },
    {
      id: 3,
      name: "Cybersecurity",
      image: "https://cdn-icons-png.flaticon.com/128/7827/7827955.png",
    },
    {
      id: 4,
      name: "Nursing",
      image: "https://cdn-icons-png.flaticon.com/128/2719/2719553.png",
    },
    {
      id: 5,
      name: "Medical Assistance",
      image: "https://cdn-icons-png.flaticon.com/128/4003/4003747.png",
    },
    {
      id: 6,
      name: "Pharmacy",
      image: "https://cdn-icons-png.flaticon.com/128/898/898681.png",
    },
    {
      id: 7,
      name: "Accounting",
      image: "https://cdn-icons-png.flaticon.com/128/1024/1024914.png",
    },
    {
      id: 8,
      name: "Banking",
      image: "https://cdn-icons-png.flaticon.com/128/3635/3635987.png",
    },

    // Add the remaining categories here
  ];

  // Slice the first 6 categories
  const firstSixCategories = categories.slice(0, 6);

  return (
    <div className="w-full flex gap-2">
      {firstSixCategories.map((category) => (
        <div
          key={category.id}
          className="w-full flex gap-2 justify-center items-center px-2 py-1 border-[1px] bg-[#f2f2f2] hover:border-[#6e6e6e] hover:bg-white hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full"
        >
          <img className="w-7 h-7" src={category.image} alt="" />
          <h1 className="text-black truncate">{category.name}</h1>
        </div>
      ))}
    </div>
  );
}
