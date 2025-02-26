import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import company1 from '../../assets/company1.jpg';
import company2 from '../../assets/company2.jpg';
import company3 from '../../assets/company3.jpg';
import company4 from '../../assets/company4.jpg';
import company5 from '../../assets/company5.jpg';
import company6 from '../../assets/company6.jpg';
import company7 from '../../assets/companies/1.png';
import company8 from '../../assets/companies/2.png';
import company9 from '../../assets/companies/3.png';
import company10 from '../../assets/companies/4.png';
import company11 from '../../assets/companies/5.png';
import company12 from '../../assets/companies/6.png';
import company13 from '../../assets/companies/9.png';
import company14 from '../../assets/companies/8.png';
import company15 from '../../assets/companies/10.png';
import company16 from '../../assets/companies/11.png';
import company17 from '../../assets/companies/12.png';
import company18 from '../../assets/companies/13.png';
import company19 from '../../assets/companies/14.png';
import company20 from '../../assets/companies/15.png';
import company21 from '../../assets/companies/16.png';


// Array of companies with logos
const companies = [
  { id: 1, name: "Wipro", logo: company1 },
  { id: 2, name: "Mercedes-Benz", logo: company2 },
  { id: 3, name: "Tech Mahindra", logo: company3 },
  // { id: 4, name: "Tata Elxsi", logo: company4 },
  { id: 5, name: "Pathlogic", logo: company5 },
  { id: 6, name: "Pathlogic", logo: company6 },
  { id: 6, name: "Pathlogic", logo: company7 },
  { id: 6, name: "Pathlogic", logo: company8 },
  { id: 6, name: "Pathlogic", logo: company9 },
  { id: 6, name: "Pathlogic", logo: company10 },
  { id: 6, name: "Pathlogic", logo: company11 },
  { id: 6, name: "Pathlogic", logo: company12 },
  { id: 6, name: "Pathlogic", logo: company13 },
  { id: 6, name: "Pathlogic", logo: company13 },
  { id: 6, name: "Pathlogic", logo: company14},
  { id: 6, name: "Pathlogic", logo: company15 },
  { id: 6, name: "Pathlogic", logo: company16 },
  { id: 6, name: "Pathlogic", logo: company17 },
  { id: 6, name: "Pathlogic", logo: company18 },
];



function Header() {
  // Settings for react-slick slider with responsiveness
  const settings = {
    dots: false, // Show pagination dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 5, // Show 5 slides at once by default (on large screens)
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay delay to 2.5 seconds
    arrows: true, // Show next and previous arrows
    responsive: [
      {
        breakpoint: 1024, // Below 1024px (large screens)
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // Below 768px (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 640, // Below 640px (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <>
      {/* Background and Content Section */}
      <div className="relative flex justify-center items-center w-full h-full p-10 bg-gray-900">
        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* h4 Tag */}
          <h4 className="text-gray-300 text-xl sm:text-2xl mb-4 italic">
            Development Tips & Best Practices
          </h4>

          {/* h1 Tag */}
          <h1 className="text-white text-3xl sm:text-5xl font-light italic">
            "Clean Code is the Key to Scalable and Maintainable Software"
          </h1>
        </div>
      </div>

      {/* Slider Section */}
      <div className="bg-gray-900 py-8 sm:py-12">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl text-white font-semibold mb-8">
          Other Prestigious Companies
        </h2>

        {/* Slider for Company Logos */}
        <div className="w-full">
          <Slider {...settings}>
            {companies.map((company) => (
              <div key={company.id} className="flex justify-center items-center p-4">
                <div className="bg-white rounded-md shadow-md p-4 w-full max-w-xs">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="object-contain w-full h-24"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <section className="min-h-[400px] w-full bg-gradient-to-br from-orange-600 to-orange-400 flex flex-col items-center justify-center px-4 py-16 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Contact us for more details
          </h2>
          <div
            className="inline-block bg-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <a
              href="mailto:hr@pathlogicstech.in"
              className="text-orange-600 text-xl md:text-2xl font-medium hover:text-orange-700 transition-colors"
              aria-label="Email us at hr@pathlogicstech.in"
            >
              hr@pathlogicstech.in
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
