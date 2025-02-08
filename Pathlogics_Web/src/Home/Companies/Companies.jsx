import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import company1 from '../../assets/company1.jpg';
import company2 from '../../assets/company2.jpg';
import company3 from '../../assets/company3.jpg';
import company4 from '../../assets/company4.jpg';
import company5 from '../../assets/company5.jpg';
import company6 from '../../assets/company6.jpg';
import { Link } from 'react-router-dom';

const companies = [
  { name: 'PurpleTalk', recruits: 185, logo: company1 },
  { name: 'Sasken', recruits: 188, logo: company2 },
  { name: 'Brigosha', recruits: 193, logo: company3 },
  { name: 'Cyient', recruits: 98, logo: company4 },
  { name: 'SanDisk', recruits: 80, logo: company5 },
  { name: 'Tata Elxsi', recruits: 81, logo: company6 }
];

const Companies = () => {
  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Companies Carousel */}
      {/* <div className="bg-gray-100 py-8 pt-[70px]">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
                <img src={company.logo} alt={company.name} className="h-16 w-auto" />
                <div className="text-right">
                  <p className="text-orange-500 text-2xl sm:text-3xl font-bold">{company.recruits}</p>
                  <p className="text-gray-700 text-sm sm:text-base">Students Recruited</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}

      {/* Button */}
      <div className="flex items-center justify-center mt-8">
        <div className="mb-4">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-400 rounded-[5px] text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-lg sm:text-2xl">
            <Link  to={'/Aboutus'} >More about Pathlogics Technologies</Link>
          </button>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-700 mb-4">
            Courses we offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Access to long & short term courses we offer to enhance your technical knowledge.
          </p>
        </div>
      </div>
    </>
  );
};

export default Companies;
