"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/pathology1.jpeg";
import image2 from "../../assets/pathology2.jpeg";
import image3 from "../../assets/pathology3.jpeg";
import image4 from "../../assets/pathology4.jpeg";
import image5 from "../../assets/pathology5.jpg";
import image6 from "../../assets/pathology6.jpeg";
import image7 from "../../assets/pathology7.jpeg";
import image8 from "../../assets/pathology8.jpeg";
import image9 from "../../assets/pathology9.jpg";
import image10 from "../../assets/pathology10.jpg";
import image11 from "../../assets/pathology11.jpeg";
import image12 from "../../assets/pathology12.jpeg";
import image13 from "../../assets/pathology13.jpeg";
import image14 from "../../assets/pathology14.jpeg";
import image15 from "../../assets/pathology15.jpeg";
import image16 from "../../assets/pathology16.jpeg";

// Sample data for placement records with local image imports
const placementData = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
  { id: 9, image: image9 },
  { id: 10, image: image10 },
  { id: 11, image: image11 },
  { id: 12, image: image12 },
  { id: 13, image: image13 },
  { id: 14, image: image14 },
  { id: 15, image: image15 },
  { id: 16, image: image16 },
];

export default function Student() {
  const settings = {
    infinite: true, // Infinite scrolling
    speed: 400, // Slide transition speed
    slidesToShow: 1, // Show only one slide
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    rows: 1, // Keep one row
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          From Classroom to Career!!
        </h1>
        <h2 className="text-center text-lg sm:text-xl text-gray-600 mb-10">
          Our Bright Stars in the Professional World..!
        </h2>

        <Slider {...settings} className="placement-slider">
          {placementData.map((card) => (
            <div
              key={card.id}
              className="flex justify-center items-center px-4 py-4"
            >
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mx-auto w-full max-w-md sm:max-w-lg h-auto flex justify-center items-center">
                <img
                  src={card.image}
                  alt={`Card image ${card.id}`}
                  className="w-full h-auto object-contain p-4"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
