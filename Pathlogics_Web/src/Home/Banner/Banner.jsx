import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import image from "../../assets/Banner1.jpeg";
import image2 from "../../assets/HomeBanner2.jpeg"
import HTMl from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import JavaScript from "../../assets/JavaScript.svg";
import homeReact from "../../assets/homeReact.svg";
import nodejs from "../../assets/node-js.svg";
import java from "../../assets/java.svg";
import sqldatabase from "../../assets/sql-database.svg";
import mongodb from "../../assets/mongodb2.svg";

function Banner() {
  return (
    <>

      {/* Banner Section */}
      <div className="w-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          loop={true} // Enables infinite scrolling
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* First Slide */}
      {/* ///// */}



      <SwiperSlide loop={true}>
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="relative z-[1] flex items-center justify-center bg-cover bg-center sm:mt-[-120px] h-[800px] sm:h-[660px] gap-[17px] flex flex-col sm:flex-row text-white text-center px-4 lg:px-12"
            >
              <div className="w-full sm:w-1/2 text-start">
                {/* Title Section */}
                <div className="max-w-3xl mb-4">
                  <h1 className="text-[40px] sm:text-[40px] md:text-[40px] font-bold leading-tight">
                    Recognized for Excellence
                  </h1>
                  <p className="text-[32px] sm:text-[32px] md:text-[32px] font-bold mt-4 flex gap-2">
                    in <div style={{ color: "#FF6B00" }}>IT Training</div>
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="flex gap-2 sm:gap-4 mb-6 justify-start flex-wrap">
                  <button className="px-4 sm:px-6 py-2 sm:py-3 border border-teal-600 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition">
                    Get Trained                 
                    {/* bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 */}
                  </button>
                  <button className="px-4 sm:px-6 py-2 sm:py-3 border border-teal-600 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition">
                    Get Hired
                  </button>
                  <button className="px-4 sm:px-6 py-2 sm:py-3 border border-teal-600 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition">
                    Get Ahead
                  </button>
                </div>

                {/* Description Section */}
                <p className="text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed text-start">
                  Learn in-demand IT Courses with Hands-on Training,
                  <br className="hidden sm:block" /> Work on Live Projects &
                  Build a Strong IT Career.
                </p>
              </div>

              <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end mr-1">
                {/* Stats Section */}
                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-6">
                  <div className="p-4 sm:p-6 bg-opacity-80 bg-teal-800 rounded-lg text-center w-28 sm:w-auto">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                      100%
                    </div>
                    <div className="text-sm sm:text-base">
                      Placement Support
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-opacity-80 bg-teal-800 rounded-lg text-center w-28 sm:w-auto">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                      300+
                    </div>
                    <div className="text-sm sm:text-base">
                      Careers Transformed
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-opacity-80 bg-teal-800 rounded-lg text-center w-28 sm:w-auto">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                      250+
                    </div>
                    <div className="text-sm sm:text-base">
                      Companies Tie-Ups
                    </div>
                  </div>
                </div>

                {/* Salary Info Section */}
                <div className="p-4 sm:p-6 flex flex-col bg-opacity-80 bg-teal-800 rounded-lg mt-6 sm:mr-[30px] lg:mr-[145px] w-[80vw] sm:w-[40vw] lg:w-[22vw]">
                  <div className="flex gap-1.5 items-center">
                    <div className="text-orange-500 font-bold text-xl sm:text-2xl">
                      ₹16
                    </div>
                    <div className="text-sm sm:text-xl font-medium">
                      {" "}
                      LPA Highest Salary
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-1.5 items-center mt-2">
                    <div className="text-orange-500 font-bold text-xl sm:text-2xl">
                      ₹3.5
                    </div>
                    <div className="text-sm sm:text-xl font-medium">
                      {" "}
                      LPA Average Salary
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>






      

      {/* /////// */}

          <SwiperSlide loop={true}>
            <div
              style={{
                backgroundImage: `url(${image2})`,
              }}
              className="relative z-[1] flex flex-col sm:flex-row items-center justify-center bg-cover bg-center sm:mt-[-120px] mt-[0px] h-[800px] sm:h-[660px] text-white text-center px-4 lg:px-12"
            >
              {/* Left Section - Text Content */}
              <div className="w-full sm:w-1/2 text-start">
                <div className="max-w-3xl mb-4">
                  <h1 className="text-[40px] sm:mt-40  sm:text-[40px] md:text-[40px] font-bold leading-tight">
                  <span className="text-[32px]  sm:text-[32px] md:text-[32px]">Join Exlusive Internship with Stipend Based</span>    <br /> <span className="text-teal-900"> Full Stack Development Program

                  </span>
                  </h1>
                </div>
                <ul className="text-[15px] md:text-xl pl-[40px] font-light max-w-3xl leading-relaxed list-disc pl-5">
                  <li>
                    <span className="text-white ">Course Duration  - 4 Months</span> 
                  </li>
                  <li>
                    <span className="text-white ">Stipend Just after Course Completion - 7K-10K (T&C Apply)</span> 
                  </li>
                  <li>
                    <span className="text-white "> 100% Guaranteed Placement</span>
                  </li>
                  <li>
                    <span className="text-white ">Live Project-Based Training</span> 
                  </li>
                </ul>
                <Link  to="/fullstack">
                <button className="mt-6 px-6 mb-2 py-2 px-4 sm:px-6  sm:py-3 border border-teal-600 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition">
                View Course Details
                </button></Link>
              </div>

              {/* Right Section - Tech Stack Icons */}
              <div className="w-full sm:w-1/2 flex flex-wrap grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-center gap-4 mt-1 sm:mt-0">
                {[
                  { name: "HTML5", img: HTMl },
                  { name: "CSS3", img: CSS },
                  { name: "JavaScript", img: JavaScript },
                  { name: "React", img: homeReact },
                  { name: "Node.js", img: nodejs },
                  { name: "Java", img: java },
                  { name: "SQL", img: sqldatabase },
                  { name: "MongoDB", img: mongodb },
                ].map((tech, index) => (
                  <div key={index} className="p-2 bg-white flex items-center justify-center bg-opacity-90 rounded-lg">
                    <img src={tech.img} alt={tech.name} className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      {/* CTA Section */}
      {/* <div className="relative w-full h-[300px] md:h-[200px] bg-gradient-to-r from-gray-800 to-orange-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/placeholder.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-orange-600/70"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Click Here to Apply for Pathlogic's Technologies Online Scholarship
            Test
          </h2>
          <button className="relative flex items-center justify-center px-6 py-4 text-gray-800 bg-gray-200 rounded-full font-bold text-lg shadow-md transition-all duration-250 overflow-hidden group">
            <Link to={"/quickenquiry"}>
              <span className="relative z-10">APPLY NOW</span>
            </Link>
            <span className="absolute top-0 left-0 h-full w-0 bg-gray-300 rounded-full transition-all duration-250 group-hover:w-full"></span>
          </button>
        </div>
      </div> */}


{/* css style for swiper navigation size */}
      <style jsx>{`
  /* Adjust arrow button size */
  .swiper-button-prev,
  .swiper-button-next {
    width: 30px !important;
    height: 30px !important;
  }

  /* Adjust icon size */
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px !important;
  }
`}</style>
    </>
  );
}

export default Banner;
