'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import image1  from '../../assets/pathology1.jpeg';
import image2  from '../../assets/pathology2.jpeg';
import image3  from '../../assets/pathology3.jpeg';
import image4  from '../../assets/pathology4.jpeg';
import image5  from '../../assets/pathology5.jpg';
import image6  from '../../assets/pathology6.jpeg';
import image7  from '../../assets/pathology7.jpeg';
import image8  from '../../assets/pathology8.jpeg';
import image9  from '../../assets/pathology9.jpg';
import image10  from '../../assets/pathology10.jpg';
import image11  from '../../assets/pathology11.jpeg';
import image12  from '../../assets/pathology12.jpeg';
import image13  from '../../assets/pathology13.jpeg';
import image14  from '../../assets/pathology14.jpeg';
import image15  from '../../assets/pathology15.jpeg';
import image16  from '../../assets/pathology16.jpeg';
// Sample data for placement records with local image imports
const placementData = [
  {
    id: 1,
    image: image1, // Use local imported image
  },
  {
    id: 2,
    image: image2, // Use local imported image
  },
  {
    id: 3,
    image: image3, // Use local imported image
  },
  {
    id: 4,
    image: image4, // Repeat image for example
  },
  {
    id: 5,
    image: image5, // Repeat image for example
  },
  {
    id: 6,
    image: image6, // Repeat image for example
  },
  {
    id: 7,
    image: image7, // Repeat image for example
  },
  {
    id: 8,
    image: image8, // Repeat image for example
  },
  {
    id: 9,
    image: image9, // Repeat image for example
  },
  {
    id: 10,
    image: image10, // Repeat image for example
  },
  {
    id: 11,
    image: image11, // Repeat image for example
  },
  {
    id: 12,
    image: image12, // Repeat image for example
  },
  {
    id: 13,
    image: image13, // Repeat image for example
  },
  {
    id: 14,
    image: image14, // Repeat image for example
  },
  {
    id: 15,
    image: image15, // Repeat image for example
  },
  {
    id: 16,
    image: image16, // Repeat image for example
  },
]

export default function Student() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  }

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-2">
          From Classroom to Career!!
        </h1>
        <h2 className="text-center text-xl text-gray-600 mb-12">
          Our Bright Stars in the Professional World..!
        </h2>

        <Slider {...settings} className="placement-slider -mx-4">
          {placementData.map((card) => (
            <div key={card.id} className="px-4 py-2 items-center ml-5">
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden w-[80%]">
                {/* Image filling the card */}
                <img
                  src={card.image} // Image source (local imported image)
                  alt={`Card image ${card.id}`}
                  className="w-full h-full object-cover" // This makes the image fill the card entirely
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
