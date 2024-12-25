import React from "react";
import { Rating } from "flowbite-react";
import { Accordion } from "flowbite-react";


const Reviews = () => {
  const essentialCarFeatureRatings = {
    "Performance": 4.6,
    "Comfort": 4.3,
    "Fuel Efficiency": 4.1,
    "Safety": 4.8,
    "Technology": 4.5,
    "Reliability": 4.7,
    "Interior Quality": 4.4,
    "Resale Value": 4.2
  };
  const reviews = [
    {
      title: "A True Game Changer in the SUV World",
      rating: 5,
      date: "2 days ago",
      author: "Jane Smith",
      content:
        "The Tata Harrier has exceeded all expectations with its robust design and powerful performance. It's perfect for adventure seekers!",
    },
    {
      title: "Luxury Redefined",
      rating: 4.5,
      date: "3 days ago",
      author: "Michael Brown",
      content:
        "Tata's Nexon EV takes comfort and innovation to the next level. Smooth rides and eco-friendly—what more could you ask for?",
    },
    {
      title: "Stylish and Efficient",
      rating: 4,
      date: "4 days ago",
      author: "Emily Davis",
      content:
        "The Tata Altroz delivers great fuel efficiency without compromising on style. A perfect city car with premium features.",
    },
    {
      title: "The Ultimate Family Car",
      rating: 5,
      date: "5 days ago",
      author: "Chris Johnson",
      content:
        "The Tata Safari is a spacious, reliable, and comfortable ride for families. It handles long trips with ease.",
    },
    {
      title: "Sporty Yet Practical",
      rating: 4.5,
      date: "6 days ago",
      author: "Amit Verma",
      content:
        "Tata Punch is a perfect balance of sportiness and practicality. Great for urban drives and weekend getaways.",
    },
  ];

  const carFeatureRatings = Object.entries(essentialCarFeatureRatings);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      {/* <h3 className="font-semibold">Reviews</h3> */}
      <div className="flex items-center space-x-4">
        <Rating size="lg">
          <Rating.Star />
        </Rating>
        <span className="text-xl font-bold">4.7/5</span>
        <span className="text-gray-600">(123 ratings)</span>
      </div>
      <div className="flex space-x-3 justify-evenly">
        {
          carFeatureRatings.map(([key, value, index]) => {
            return (
              <div key={index} className="flex flex-col space-y-3 my-2 items-center justify-center">
                <div className="rounded-full aspect-square bg-slate-400 p-4 font-semibold h-fit w-fit flex justify-center items-center">{value}</div>
                <div className="font-semibold">{key}</div>
              </div>)
          })
        }
      </div>
      <Accordion>

        <Accordion.Panel>

          <div className="mt-4">
            <div className="my-2">
              <hr className="w-full h-0.5 bg-black" />
              <Accordion.Title className="my-4 mx-3 text-xl font-semibold">All Reviews</Accordion.Title>
              {/* <Accordion.Title>All Reviews</Accordion.Title> */}
              <hr className="w-full h-0.5" />
              <hr className="w-full h-0.5 bg-black" />
              {/* <hr className="w-full h-0.5 bg-black" /> */}
              {/* <hr className="w-full h-0.5 bg-black" /> */}
            </div>
            <div className="space-y-5">
              {
                reviews.map((review, index) => {
                  return (
                    <div key={index} className="space-y-1">
                      <Accordion.Content>
                        <div className="ml-4 ">
                          <h1 className="text-xl">{review.title}</h1>
                        </div>
                        <div className="ml-4 text-yellow-500 text-lg">
                          {"★".repeat(Math.floor(review.rating)) +
                            (review.rating % 1 === 0.5 ? "☆" : "")}
                        </div>
                        <div className="ml-4 flex space-x-3 text-sm">
                          <div>
                            <h2>{review.date}</h2>
                          </div>
                          <div>
                            <h2>{review.author}</h2>
                          </div>
                        </div>
                        <div className="ml-4 text-xl">
                          <h2>{review.content}</h2>
                        </div>
                        <hr className="w-full" />
                        <hr className="w-full h-0.5 bg-black" />
                      </Accordion.Content>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Accordion.Panel>
      </Accordion>

    </div>
  );
};

export default Reviews;
