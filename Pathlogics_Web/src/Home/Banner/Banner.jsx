import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import image from "../../assets/Awss.png";

function Banner() {
  return (
    <>
      {/* Banner Section */}
      <div className="w-full">
        <Swiper

          spaceBetween={0}
          centeredSlides={false}
          autoplay={{
            delay: 2500,

            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {/* First Slide */}
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className=" relative z-[1] flex items-center justify-center bg-cover bg-center h-screen gap-[17px] flex flex-col sm:flex-row items-center justify-center text-white text-center px-4"
            >
              <div>
                {/* Title Section */}
                <div className="max-w-3xl mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Recognized for Excellence 
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 flex gap-2">
                    in <div style={{ color: "#FF6B00" }}>IT Training</div>
                  </h2>
                </div>

                {/* Buttons Section */}
                <div className="flex gap-4 mb-6 justify-start">
                  <button className="px-6 py-3 border border-teal-600 text-white rounded-full hover:bg-teal-600 transition">
                    Get Trained
                  </button>
                  <button className="px-6 py-3 border border-teal-600 text-white rounded-full hover:bg-teal-600 transition">
                    Get Hired
                  </button>
                  <button className="px-6 py-3 border border-teal-600 text-white rounded-full hover:bg-teal-600 transition">
                    Get Ahead
                  </button>
                </div>

                {/* Description Section */}
                <p className="text-lg md:text-xl font-light max-w-3xl leading-relaxed text-align:start">
                  Learn in-demand IT Courses with Hands-on Training,
                  <br /> Work on Live Projects & Build a Strong IT Career.
                </p>
              </div>

              <div>
                {/* Stats Section */}
                <div className="flex flex-wrap gap-6 justify-center mt-6">
                  <div className="p-6 bg-opacity-80 bg-teal-800 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      100%
                    </div>
                    <div>Placement Support</div>
                  </div>
                  <div className="p-6 bg-opacity-80 bg-teal-800 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      300+
                    </div>
                    <div>Careers Transformed</div>
                  </div>
                  <div className="p-6 bg-opacity-80 bg-teal-800 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      250+
                    </div>
                    <div>Companies Tie-Ups</div>
                  </div>
                </div>

                {/* Salary Info Section */}
                <div className=" p-6 bg-opacity-80 bg-teal-800 rounded-lg mt-6 w-[22vw]">
                  <div className="flex gap-1.5 items-center">
                    <div className="text-orange-500 font-bold text-2xl">
                      ₹16
                    </div>
                    <div className="text-xl font-medium">
                      {" "}
                      LPA Highest Salary
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-1.5 items-center">
                    <div className="text-orange-500 font-bold text-2xl">
                      ₹3.5
                    </div>
                    <div className="text-xl font-medium">
                      {" "}
                      LPA Average Salary
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <div
              style={{
                backgroundImage:
                  "url(https://www.vectorindia.org/assets/images/slider/slide2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
              className="flex items-center justify-center"
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* CTA Section */}
      <div className="relative w-full h-[300px] md:h-[200px] bg-gradient-to-r from-gray-800 to-orange-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/placeholder.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-orange-600/70"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Click Here to Apply for Pathlogic Technologies Online Scholarship
            Test
          </h2>
          <button className="relative flex items-center justify-center px-6 py-4 text-gray-800 bg-gray-200 rounded-full font-bold text-lg shadow-md transition-all duration-250 overflow-hidden group">
            <Link to={"/quickenquiry"}>
              <span className="relative z-10">APPLY NOW</span>
            </Link>
            <span className="absolute top-0 left-0 h-full w-0 bg-gray-800 rounded-full transition-all duration-250 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
