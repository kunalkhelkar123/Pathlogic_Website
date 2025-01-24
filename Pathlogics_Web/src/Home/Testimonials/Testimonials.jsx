import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonal1 from '../../assets/testimonal1.png';
import testimonal2 from '../../assets/testimonal2.png';
import testimonal3 from '../../assets/testimonal3.png';
import testimonal4 from '../../assets/ruchitha.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kudumula Venkata Subba Reddy',
      photo: testimonal1,
      review:
        "I'm Kudumula Venkata Subba Reddy, an EEE graduate from JNTUA College of Engineering, Pulivendula, Andhra Pradesh. After graduation, I joined Pathlogic Technologics India, Bangalore, where I completed the advanced embedded systems course. The constant support from the staff and the training at Pathlogic Technologics India significantly improved my technical skills, helping me secure a position at HL Mando.",
    },
    {
      name: 'John Doe',
      photo: testimonal2,
      review:
        "I'm John Doe, an IT graduate from XYZ University. After completing my studies, I joined Pathlogic Technologics India, where I improved my coding and development skills. The supportive staff helped me grow professionally and secure a job at ABC Corp.",
    },
    {
      name: 'Jane Smith',
      photo: testimonal3,
      review:
        "I’m Jane Smith, an electronics engineer who joined Pathlogic Technologics India to further develop my embedded systems skills. With the excellent training and mentorship provided, I was able to land a job at a prestigious tech firm.",
    },
    {
      name: 'David Lee',
      photo: testimonal4,
      review:
        "I'm David Lee, a software engineer who com`pleted a course at Pathlogic Technologics India. The advanced training helped me land a job at a top tech company.",
    },
    {
      name: 'Anna Johnson',
      photo: testimonal1,
      review:
        "Anna here, a recent electronics graduate. Pathlogic Technologics India's embedded systems course gave me the skills and confidence to excel in my job at a multinational firm.",
    },
    {
      name: 'Michael Williams',
      photo: testimonal2,
      review:
        "I'm Michael Williams, and the training I received at Pathlogic Technologics India was invaluable in helping me grow my technical skills and succeed in the industry.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0", // Prevents extra space on sides of cards
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => {
            const [isExpanded, setIsExpanded] = useState(false);
            const reviewPreview = testimonial.review.slice(0, 150); // Show first 150 characters
            const isShortReview = testimonial.review.length <= 150; // Check if review is short

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-center text-center mx-4"
                style={{
                  width: '331px', // Set fixed width
                  height: '304px', // Set fixed height
                  margin: '0 10px', // Gap between cards
                  overflow: 'hidden', // Prevent overflowing content
                  display: 'flex', // Use flexbox for consistent layout
                  flexDirection: 'column', // Stack elements vertically
                  justifyContent: 'space-between', // Ensure space between elements
                }}
              >
                <div className="w-full flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                      className="w-full h-full object-cover"
                      src={testimonial.photo}
                      alt={testimonial.name}
                    />
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  {isExpanded ? testimonial.review : `${reviewPreview}`}
                  {!isExpanded && !isShortReview && (
                    <span
                      onClick={() => setIsExpanded(true)}
                      className="text-blue-600 underline cursor-pointer"
                    >
                      {' View more'}
                    </span>
                  )}
                  {isExpanded && (
                    <span
                      onClick={() => setIsExpanded(false)}
                      className="text-blue-600 underline cursor-pointer"
                    >
                      {' View less'}
                    </span>
                  )}
                </p>

                <h3 className="text-orange-500 font-semibold text-sm sm:text-base">
                  {testimonial.name}
                </h3>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
