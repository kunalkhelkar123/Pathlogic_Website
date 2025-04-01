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
      description: "Master front-end & back-end development.",
      link: "/full-stack-developer-course-in-pune-with-placement",
      image: "https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png",
    },
    {
      id: 2,
      name: "Data Science",
      description: "Learn data analysis & machine learning.",
      link: "/data-science",
      image: "https://datafloq.com/wp-content/uploads/2022/12/What-Is-Data-Science-And-How-To-Become-A-Data-Scientist.jpg",
    },
    {
      id: 3,
      name: "Blockchain Development",
      description: "Develop decentralized apps in pathlogic.",
      link: "/blockchain",
      image: "https://wallpaperaccess.com/full/4578765.jpg",
    },
    {
      id: 4,
      name: "MERN Stack",
      description: "Master MongoDB, Express, React & Node.js.",
      link: "/mern-stack",
      image: "https://wallpaperaccess.com/full/4578765.jpg",
    },
    {
      id: 5,
      name: "Salesforce",
      description: "Implement CRM solutions with Salesforce.",
      link: "/salesforce",
      image: "https://in-cloud.ca/wp-content/uploads/2017/01/Salesforce-Platforme-2.png",
    },
    {
      id: 6,
      name: "Software Testing",
      description: "Learn manual & automation testing in pathlogic.",
      link: "/testing",
      image: "https://fixingblog.com/wp-content/uploads/2021/06/AdobeStock_257701717-scaled.jpeg",
    },
  ];

  return (
    <div className="min-h-[50vh] py-8 bg-gradient-to-br from-gray-900 to-teal-700">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-orange-400 mb-4">
          Explore More Courses
        </h1>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Small Desktop
            1280: { slidesPerView: 4 }, // Large Desktop
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-6"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 flex flex-col">
                {/* Course Image */}
                <div className="h-32 md:h-40 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>

                {/* Course Details */}
                <div className="p-4 text-center flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800">{course.name}</h2>
                  <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                </div>

                {/* View More Button */}
                <div className="p-3 bg-orange-500 text-center">
                  <Link to={course.link}>
                    <button className="px-4 py-2 text-orange-600 text-sm rounded-md bg-white transition hover:bg-gray-200">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Courses;