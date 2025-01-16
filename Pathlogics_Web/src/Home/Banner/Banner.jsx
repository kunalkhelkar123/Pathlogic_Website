import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Swiper modules
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <div className="w-full h-screen md:h-auto"> {/* Ensuring fullscreen on mobile */}
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]} // Ensure the correct modules are passed
          className="mySwiper"
        >
          {/* First Slide */}
          <SwiperSlide>
            <img
              src="https://www.vectorindia.org/assets/images/slider/slide1.jpg"
              alt="Slide 1"
              className="mx-auto w-full h-screen object-cover md:h-auto" // Full height for mobile
            />
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <img
              src="https://www.vectorindia.org/assets/images/slider/slide2.jpg"
              alt="Slide 2"
              className="mx-auto w-full h-screen object-cover md:h-auto" // Full height for mobile
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* CTA Section */}
      <div className="relative w-full h-[300px] md:h-[200px] bg-gradient-to-r from-gray-800 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-orange-600/70"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Click Here to Apply for Pathlogic Technologies Online Scholarship Test
          </h2>
          <button className="relative flex items-center justify-center px-6 py-4 text-gray-800 bg-gray-200 rounded-full font-bold text-lg shadow-md transition-all duration-250 overflow-hidden">
            <Link to={'/quickenquiry'} ><span className="relative z-10">APPLY NOW</span></Link>
            <span className="absolute top-0 left-0 h-full w-0 bg-gray-800 rounded-full transition-all duration-250 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
