import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonal1 from '../../../assets/testimonal1.png';
import testimonal2 from '../../../assets/testimonal2.png';
import testimonal3 from '../../../assets/testimonal3.png';
import testimonal4 from '../../../assets/ruchitha.png';
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kudumula Venkata Subba Reddy',
      photo: testimonal1,
      review: "I'm John Doe, an IT graduate from XYZ University. After completing my studies, I joined Pathlogic Technologics  India, where I improved my coding and development skills. The supportive staff helped me grow professionally and secure a job at ABC Corp.",

    },
    {
      name: 'John Doe',
      photo: testimonal2,
      review:
        "I'm John Doe, an IT graduate from XYZ University. After completing my studies, I joined Pathlogic Technologics  India, where I improved my coding and development skills. The supportive staff helped me grow professionally and secure a job at ABC Corp.",
    },
    {
      name: 'Jane Smith',
      photo: testimonal3,
      review:
        "I’m Jane Smith, an electronics engineer who joined Pathlogic Technologics  India to further develop my embedded systems skills. With the excellent training and mentorship provided, I was able to land a job at a prestigious tech firm.",
    },
    {
      name: 'David Lee',
      photo: testimonal4,
      review:
        "I'm David Lee, a software engineer who completed a course at Pathlogic Technologics  India. The advanced training helped me land a job at a top tech company.",
    },
    {
      name: 'Anna Johnson',
      photo: testimonal1,
      review:
        "Anna here, a recent electronics graduate. Pathlogic Technologics  India's embedded systems course gave me the skills and confidence to excel in my job at a multinational firm.",
    },
    {
      name: 'Michael Williams',
      photo: testimonal2,
      review:
        "I'm Michael Williams, and the training I received at Pathlogic Technologics  India was invaluable in helping me grow my technical skills and succeed in the industry.",
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">Our Placed Students</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex gap-[30px] justify-between items-center text-center h-96 w-80 mx-4 my-4" // Increased horizontal and vertical margins
            >
              <div className="w-full flex justify-center">
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-gray-300 flex justify-center items-center">
                  <img
                    className="w-20 h-20 object-cover" // Adjusted image size for better appearance
                    src={testimonial.photo}
                    alt={testimonial.name}
                  />
                </div>
              </div>
              <p className="text-gray-700 mb-4 px-2">{testimonial.review}</p>
              <h3 className="text-orange-500 font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;