
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Full Stack Development",
      description:
        "Learn both front-end and back-end technologies to build full-fledged web applications.",
      link: "/full-stack",
      image:
        "https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png",
    },
    {
      id: 2,
      name: "Data Science",
      description:
        "Understand data analysis, machine learning, and statistical modeling.",
      link: "/data-science",
      image:
        "https://datafloq.com/wp-content/uploads/2022/12/What-Is-Data-Science-And-How-To-Become-A-Data-Scientist.jpg",
    },
    {
      id: 3,
      name: "Blockchain Development",
      description:
        "Learn blockchain technology, decentralized applications (dApps), and smart contracts.",
      link: "/blockchain",
      image: "https://wallpaperaccess.com/full/4578765.jpg",
    },
    {
      id: 4,
      name: "MERN Development",
      description:
        "Master MongoDB, Express.js, React, and Node.js to build scalable applications.",
      link: "/fullstack",
      image:
        "https://thereadersea.com/wp-content/uploads/2023/05/mern-stack.png",
    },
    {
      id: 5,
      name: "Salesforce",
      description:
        "Learn to implement CRM solutions and customize Salesforce for business growth.",
      link: "/salesforce",
      image:
        "https://in-cloud.ca/wp-content/uploads/2017/01/Salesforce-Platforme-2.png",
    },
    {
      id: 6,
      name: "Testing",
      description:
        "Gain expertise in manual and automated testing to ensure software quality.",
      link: "/testing",
      image:
        "https://fixingblog.com/wp-content/uploads/2021/06/AdobeStock_257701717-scaled.jpeg",
    },
  ];

  return (
    <div className="min-h-[75vh] py-10 bg-gradient-to-br from-gray-900 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
          More Courses
        </h1>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile - 1 slide
            768: { slidesPerView: 2 }, // Tablet - 2 slides
            1024: { slidesPerView: 3 }, // Desktop - 3 slides
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-8 relative"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer flex flex-col">
                {/* Background Image */}
                <div
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${course.image})` }}
                ></div>

                <div className="p-4 flex-grow text-center">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {course.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>

                {/* View More Button */}
                <div className="px-4 py-2 bg-orange-600 text-center">
                  <Link to={course.link}>
                    <button className="px-4 py-2 text-white transform transition duration-300 hover:scale-105 rounded-md bg-orange-500 hover:bg-orange-400">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Swiper Arrows - Small & Outside Content */}
          <div className="swiper-button-prev !text-black !w-3 !h-3"></div>
          <div className="swiper-button-next !text-black !w-3 !h-3"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Courses;
