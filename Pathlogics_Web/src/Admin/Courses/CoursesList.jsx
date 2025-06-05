

import React, { useState } from "react";
import img from "../../assets/CourseSections.png";
import { Link } from "react-router-dom";

const CoursesList = () => {
  const [filter, setFilter] = useState("all");

  const courses = [
    { title: "Core Java", id: "1", name: "corejava", type: "ShortTerm Courses" },
    { title: "Advanced Java", id: "2", name: "advancedjava", type: "ShortTerm Courses" },
    { title: "React.JS", id: "3", name: "reactjs", type: "ShortTerm Courses" },
    { title: "Angular.JS", id: "4", name: "angularjs", type: "ShortTerm Courses" },
    { title: "Node.JS", id: "5", name: "nodejs", type: "ShortTerm Courses" },
    { title: "Python Programming", id: "6", name: "python", type: "ShortTerm Courses" },
    { title: "React Native", id: "7", name: "reactnative", type: "ShortTerm Courses" },
    { title: "Full Stack Java Development", id: "8", name: "fullstackjava", type: "ShortTerm Courses" },
    { title: ".NET Core Development", id: "9", name: "netcore", type: "ShortTerm Courses" },
    { title: ".NET with Angular", id: "10", name: "netangular", type: "ShortTerm Courses" },
    { title: "Software Testing", id: "11", name: "softwaretesting", type: "ShortTerm Courses" },
    { title: "Power BI", id: "12", name: "powerbi", type: "ShortTerm Courses" },
    { title: "Data Science with Python", id: "13", name: "datascience", type: "ShortTerm Courses" },
    { title: "AWS & DevOps", id: "14", name: "awsdevops", type: "ShortTerm Courses" },
    { title: "Digital Marketing Training", id: "15", name: "digitalmarketing", type: "ShortTerm Courses" },
    { title: "FullStack Java Developer", id: "16", name: "fullstackjavadeveloper", type: "Long Term Courses" },
    { title: "FullStack .Net Developer", id: "17", name: "fullstacknetdeveloper", type: "Long Term Courses" },
    { title: "FullStack Devops Engineer", id: "18", name: "fullstackdevops", type: "Long Term Courses" },
    { title: "FullStack Salesforce Developer", id: "19", name: "fullstacksalesforce", type: "Long Term Courses" },
    { title: "FullStack Testing", id: "20", name: "fullstacktesting", type: "Long Term Courses" },
    { title: "FullStack Python Developer", id: "21", name: "fullstackpython", type: "Long Term Courses" },
    { title: "FullStack Development with AI", id: "22", name: "fullstackai", type: "Long Term Courses" },
    { title: "Diploma in Digital Marketing", id: "23", name: "diplomadigitalmarketing", type: "Long Term Courses" },
    { title: "FullStack Web Developer", id: "24", name: "fullstackwebdeveloper", type: "Long Term Courses" },
    { title: "Manual Testing", id: "25", name: "manualtesting", type: "Long Term Courses" },
    { title: "Selenium with Java", id: "26", name: "seleniumwithjava", type: "Long Term Courses" },
    { title: "Salesforce Development", id: "27", name: "salesforcedevelopment", type: "Long Term Courses" }
  ];




  // Calculate count for each type
  const shortTermCount = courses.filter(course => course.type === "ShortTerm Courses").length;
  const longTermCount = courses.filter(course => course.type === "Long Term Courses").length;

  // Filter courses based on selected type
  const filteredCourses = filter === "all" ? courses : courses.filter(course => course.type === filter);

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Courses We Offer</h1>
        <p className="text-center text-gray-600 mb-12">
          Access to long & short term courses we offer to enhance your technical knowledge.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("ShortTerm Courses")}
            className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg bg-[#ff6b33] hover:bg-orange-600 text-white transition-colors"
          >
            Short Term Courses ({shortTermCount})
          </button>
          <button
            onClick={() => setFilter("Long Term Courses")}
            className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg bg-[#ff6b33] hover:bg-orange-600  text-white transition-colors"
          >
            Long Term Courses ({longTermCount})
          </button>
          <button
            onClick={() => setFilter("all")}
            className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg bg-[#ff6b33] hover:bg-orange-600  text-white transition-colors"
          >
            All Courses ({courses.length})
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0a0a1f] p-6 h-full relative">
                {/* Background overlay with circuit pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    // backgroundImage: `url(${img})`,
                    backgroundColor: "teal",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // mixBlendMode: "overlay",
                  }}
                />
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[#ff6b33] text-2xl font-bold mb-4">{course.title}</h3>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Link to={{ pathname: "/admin/CoursesStudentinfo" }} state={{ courseId: course.id, courseName: course.name }}>
                      <button className="flex-1 border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg hover:bg-[#ff6b33] hover:text-white transition-colors">
                        Student Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
