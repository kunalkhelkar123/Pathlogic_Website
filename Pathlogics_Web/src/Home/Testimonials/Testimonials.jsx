import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonal1 from '../../assets/testiminiols/somnath.jpg';
import testimonal2 from '../../assets/testiminiols/amit.jpg';
import testimonal3 from '../../assets/testiminiols/mansi.jpg';
import testimonal4 from '../../assets/testiminiols/pritipatil.jpg';
import testimonal5 from '../../assets/testiminiols/aditya.jpg';
import testimonal6 from '../../assets/testiminiols/neha.jpg';
// import testimonal7 from '../../assets/testiminiols/mansi.jpg';

const Testimonials = () => {

  const testimonials = [
    {
      name: 'Somnath Habre',
      photo: testimonal1,
      review:

        "The Full Stack Developer course at Pathlogics helped me build a strong foundation and secure a role as a Software Engineer in a top IT MNC."
    },
    {
      name: 'Amit Dahake',
      photo: testimonal2,
      review:
        "Thanks to Pathlogics' comprehensive training, I was able to land a Program Analyst position in a leading IT MNC. Great learning experience!"
    },
    {
      name: 'Manasi Kulkarni ',
      photo: testimonal3,
      review:
   "Pathlogics provided me the skills I needed to excel as a QA Engineer. their dedicated placement support helped me achieve my dream job."
      },
    {
      name: 'Priti Patil',
      photo: testimonal4,
      review:
   "With Pathlogics' guidance, I secured a Software Engineer role in a renowned IT MNC with a 16 LPA package! I highly recommend this course."
      },
    {
      name: 'Aditya Chavale',
      photo: testimonal5,
      review:
        "The practical approach at Pathlogics enabled me to successfully land an Assistant System Engineer role in a top IT MNC. A game-changer for my career!"
    },
    {
      name: 'Neha Chavan:',
      photo: testimonal6,
      review:
 " Pathlogics' Full Stack Developer course played a crucial role in helping me secure a DevOps Engineer position. Truly valuable training."
 
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

    <section className="py-10 ">

      <div className="max-w-7xl mx-auto text-center ">
        <h3 className="text-3xl font-bold  mb-8 text-orange-600">What Our Students Say</h3>


        <p className="text-lg sm:text-xl text-gray-800 mb-10">
          Our students speak highly of their experience at <strong>Pathlogics</strong>. <br /> Here’s why they recommend us as the best IT training institute in Pune
        </p>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => {
            const [isExpanded, setIsExpanded] = useState(false);
            const reviewPreview = testimonial.review.slice(0, 150); // Show first 150 characters
            const isShortReview = testimonial.review.length <= 150; // Check if review is short

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-[1px] flex flex-col justify-between items-center text-center "
                style={{
                  width: '331px', // Set fixed width
                  height: '340px', // Set fixed height
                  margin: '0 0px', // Gap between cards
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