import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    { title: "Core Java", id: "1", name: "corejava" },
    { title: "Advanced Java", id: "2", name: "advancedjava" },
    { title: "React.JS", id: "3", name: "reactjs" },
    { title: "Angular.JS", id: "4", name: "angularjs" },
    { title: "Node.JS", id: "5", name: "nodejs" },
    { title: "Python Programming", id: "6", name: "python" },
    { title: "React Native", id: "7", name: "reactnative" },
    { title: "Full Stack Java Development", id: "8", name: "fullstackjava" },
    { title: ".NET Core Development", id: "9", name: "netcore" },
    { title: ".NET with Angular", id: "10", name: "netangular" },
    { title: "Software Testing", id: "11", name: "softwaretesting" },
    { title: "Power BI", id: "12", name: "powerbi" },
    { title: "Data Science with Python", id: "13", name: "datascience" },
    { title: "AWS & DevOps", id: "14", name: "awsdevops" },
    { title: "Digital Marketing Training", id: "15", name: "digitalmarketing" },
    { title: "FullStack Java Developer", id: "16", name: "fullstackjavadeveloper" },
    { title: "FullStack .Net Developer", id: "17", name: "fullstacknetdeveloper" },
    { title: "FullStack Devops Engineer", id: "18", name: "fullstackdevops" },
    { title: "FullStack Salesforce Developer", id: "19", name: "fullstacksalesforce" },
    { title: "FullStack Testing", id: "20", name: "fullstacktesting" },
    { title: "FullStack Python Developer", id: "21", name: "fullstackpython" },
    { title: "FullStack Development with AI", id: "22", name: "fullstackai" },
    { title: "Diploma in Digital Marketing", id: "23", name: "diplomadigitalmarketing" },
    { title: "FullStack Web Developer", id: "24", name: "fullstackwebdeveloper" },
    { title: "Manual Testing", id: "25", name: "manualtesting" },
    { title: "Selenium with Java", id: "26", name: "seleniumwithjava" },
    { title: "Salesforce Development", id: "27", name: "salesforcedevelopment" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-5">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Courses We Offer
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Access to long & short term courses we offer to enhance your
          technical knowledge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                course.title === "Software Testing"
                  ? "lg:col-span-1 md:col-span-2 col-span-2 mx-auto"
                  : ""
              } flex flex-col`}
            >
              <div className="p-6 flex-grow">
                <h3 className="text-[#ff6b33] text-2xl font-bold mb-1">
                  {course.title}
                </h3>
                {/* <p className="text-gray-700 mb-6">{course.description}</p> */}
                {/* <div className="space-y-2 mb-6">
                  <p className="text-gray-500">
                    <span className="font-semibold text-[#ff6b33]">Duration:</span>{" "}
                    {course.duration}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-semibold text-[#ff6b33]">Mode:</span>{" "}
                    {course.mode}
                  </p>
                </div> */}
              </div>

              <Link  to={{ pathname: "/trainer/CoursesQuestions" }} state={{courseName: course.name }} >
                <button className="w-full py-2 px-4 bg-[#ff6b33] text-white font-semibold rounded-md hover:bg-[#ff4a1b] transition-colors">
                  Show Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;