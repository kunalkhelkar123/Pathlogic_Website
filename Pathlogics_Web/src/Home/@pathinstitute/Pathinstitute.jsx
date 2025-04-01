import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/patho.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isShortTermOpen, setIsShortTermOpen] = useState(false);
  const [isLongTermOpen, setIsLongTermOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isplacementProgram, setPlacementProgram] = useState(false);
  const [isOpenAuthMenu, setIsOpenAuthMenu] = useState(false);
  const [isLoginDropdown, setisLoginDropdown] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const handleShortTermHover = () => {
    setIsShortTermOpen(true);
    setIsLongTermOpen(false);
  };

  const handleLongTermHover = () => {
    setIsLongTermOpen(true);
    setIsShortTermOpen(false);
  };

  const Navigate = useNavigate();
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
        setIsDropdownOpen1(false);
        setIsDropdownOpen2(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const shortTermCourses = {
    programming: [
      { name: "Core Java", path: "/Corejava" },
      { name: "Advanced Java", path: "/Advancedjava" },
      { name: "React.js", path: "/Reactjs" },
      { name: "Angular.js", path: "/Angularjs" },
      { name: "Node.js", path: "/Nodejs" },
      { name: "React Native", path: "/Native" },
    ],
    testing: [
      { name: "DotNet Core", path: "/Dotnetcore" },
      { name: "DotNet with Angular", path: "/Dotnetangular" },
      { name: "Software Testing", path: "/softweretesting" },
      { name: "Manual Testing", path: "/manualtesting" },
      { name: "Selenium with Java", path: "/seleniumJAVA" },
    ],
    advanced: [
      { name: "Power BI", path: "/Powerbipage" },
      { name: "Data Science with Python", path: "/DataScience" },
      { name: "Salesforce Development", path: "/Salesforce" },
      { name: "AWS/DevOps", path: "/AwsDevops" },
      { name: "FullStack Java Development", path: "/JavaDevelopmet" },
      { name: "Digital Marketing Training", path: "/DigitalMarketing" },
    ],
  };

  const longTermCourses = {
    programming: [
      { name: "FullStack Web Development", path: "/full-stack-web-development-course-in-pune" },
      { name: "FullStack Java Development", path: "/java-full-stack-developer-course-in-pune" },
      { name: "FullStack DevOps Engineer", path: "/devops-training-in-pune" },
    ],
    testing: [
      { name: "FullStack .NET Developer", path: "/dot-net-full-stack-developer-course-in-pune" },
      { name: "FullStack Testing", path: "/FullstackTesting" },
      { name: "Manual Testing", path: "/ManualComp" },
    ],
    advanced: [
      { name: "FullStack Salesforce Developer", path: "/Salesforce1" },
      { name: "FullStack Python Developer", path: "/PythonDev" },
      { name: "FullStack Development with AI", path: "/Development" },
      { name: "Diploma in Digital Marketing", path: "/Diploma" },
    ],
  };

  const placementProgram = [
    { name: "Full Stack Java Development", path: "/PlacementJava" },
    { name: "Full Stack Web Development", path: "/PlacementWeb" },
    { name: "Full Stack Testing", path: "/MainTesting" },
    { name: "DevOps", path: "/MainDevops" },
    { name: "Digital Marketing", path: "/MainDigitalMarketing" },
    { name: "Internship", path: "/Internship" },
    // { name: "Certification", path: "/" },
    // { name: "Stipend", path: "/" },
  ];

  const StudentRegistration = () => {
    setIsQuickEnquiryOpen(!isQuickEnquiryOpen);
    setSubmitStatus({ message: "", isError: false });
    Navigate("/StudentRegistration");
  };
  const toggleQuickEnquiry = () => {
    setIsQuickEnquiryOpen(!isQuickEnquiryOpen);
    setSubmitStatus({ message: "", isError: false });
    Navigate("/quickenquiry");
  };
  const LoginBar = [
    { name: "Student login", path: "/StudentLogin" },
    { name: "Admin Login", path: "/adminLogin" },
    { name: "Trainer Login", path: "/trainerLogin" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      <div className="bg-black text-white py-2 px-2 md:px-8 flex flex-row md:flex-row justify-between items-center">
        <div className="flex     space-x-4 sm:space-y-0 sm:space-x-4">
          <span className=" items-center ">
            {/* <span></span> */}
            <span  className=" text-sm">📧info@pathlogicstech.in</span>
          </span>
          <span className="flex items-center space-x-0 text-sm">
            {/* <span></span> */}
            <span className=" text-sm">📞+917364036464</span>
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        {/* <button
          className="md:hidden text-white ml-auto"
          onClick={() => { setIsOpenAuthMenu(!isOpenAuthMenu) }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 sm:space-x-6 mt-2 sm:mt-0 ml-auto">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsDropdownOpen3((prevState) => !prevState)}
              className="text-white-700 hover:underline"
            >
              Login
            </button>
            {isDropdownOpen3 && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
                style={{ zIndex: 222 }}
              >
                <ul className="space-y-2 p-2">
                  {LoginBar.map((course, index) => (
                    <li key={index}>
                      <Link
                        to={course.path}
                        className="block text-gray-700 hover:text-orange-500 px-4 py-2 text-sm"
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
  
          <Link to={`/studentregistration`} className="hover:underline">

            Apply Online
          </Link>
          <Link to={`/QuickEnquiry`} className="hover:underline">
            Quick Enquiry

          </Link>
      
        </div>

          {/* <a href="#gallery" className="hover:underline">Gallery</a> */}
        </div>

      {/* Mobile Menu */}
    

      {/* Logo and Navbar */}
      <div className="w-full bg-white py-1 px-4 md:px-8 flex justify-between items-center border-b-2 border-orange-500">
        <div className="flex items-center">
          <button onClick={() => navigate('/')} className="text-black focus:outline-none w-[124px]">
            <img className="h-16 w-38" src={image} alt="Pathlogics" />
          </button>
        </div>

        {/* Hamburger for mobile view */}
        {<button
          onClick={toggleMenu}
          className="block md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        }

        <nav className="hidden md:flex justify-center items-center space-x-3 sm:space-x-2 md:space-x-1 lg:space-x-[20px] xl:space-x-5 ml-auto">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Home
          </Link>
          {/* <Link
            to="/All"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Institute
          </Link> */}
          <Link
            to="/full-stack-developer-course-in-pune-with-placement"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Full Stack Development
          </Link>

          {/* Short Term Courses */}
          <div
            className="relative dropdown "
            //onMouseEnter={() => setIsShortTermOpen(true)}
            // onClick={handleShortTermClick}
            onMouseEnter={handleShortTermHover}
            onMouseLeave={() => setIsShortTermOpen(false)}
            onClick={() => setIsShortTermOpen(true)}
          >
            <button className="text-gray-700 hover:text-orange-500 font-medium">
              Short Term Courses
            </button>
            {isShortTermOpen && (
              <div
                onMouseLeave={() => setIsShortTermOpen(false)}
                className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50 ml-[-518px] w-[650px] p-4"
              >
                <div className="grid grid-cols-3 gap-6">
                  {/* Programming Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">
                      Programming Courses
                    </h4>
                    <ul className="space-y-2">
                      {shortTermCourses.programming.map((course, index) => (
                        <li key={index}>
                          <Link
                            to={course.path}
                            className="text-gray-700 hover:text-orange-500"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testing */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">
                      DotNet and Testing
                    </h4>
                    <ul className="space-y-2">
                      {shortTermCourses.testing.map((course, index) => (
                        <li key={index}>
                          <Link
                            to={course.path}
                            className="text-gray-700 hover:text-orange-500"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advanced Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">
                      Advanced Courses
                    </h4>
                    <ul className="space-y-2">
                      {shortTermCourses.advanced.map((course, index) => (
                        <li key={index}>
                          <Link
                            to={course.path}
                            className="text-gray-700 hover:text-orange-500"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Long Term Courses */}
          <div
            className="relative dropdown "
            //onMouseEnter={() => setIsLongTermOpen(true)}
            onMouseEnter={()=>{handleLongTermHover , setIsLongTermOpen(true), setIsDropdownOpen2(false)}}
            onClick={() => setIsLongTermOpen(true)}
          >
            <button className="text-gray-700 hover:text-orange-500 font-medium">
              Long Term Courses
            </button>
            {isLongTermOpen && (
              <div
                onMouseLeave={() => setIsLongTermOpen(false)}
                className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50 ml-[-518px] w-[650px] p-4"
              >
                <div className="grid grid-cols-3 gap-6 ml-4">
                  {/* Programming Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">
                      Programming Courses
                    </h4>
                    <ul className="space-y-2">
                      {longTermCourses.programming.map((course, index) => (
                        <li key={index}>
                          <Link
                            to={course.path}
                            className="text-gray-700 hover:text-orange-500"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testing */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">
                      DotNet and Testing
                    </h4>
                    <ul className="space-y-2">
                      {longTermCourses.testing.map((course, index) => (
                        <li key={index}>
                          <Link
                            to={course.path}
                            className="text-gray-700 hover:text-orange-500"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advanced Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">
                      Advanced Courses
                    </h4>
                    <ul className="space-y-2">
                      {longTermCourses.advanced.map((course, index) => (
                        <li key={index}>
                          <Link
                            to={course.path}
                            className="text-gray-700 hover:text-orange-500"
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* placementProgram
           <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">Placement Program</h4>
                    <ul className="space-y-2">
                      {placementProgram.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div> */}

          <div
            className="relative dropdown"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onMouseEnter={() => { setIsLongTermOpen(false), setIsDropdownOpen2(true) }}
              // onMouseEnter={() => isDropdownOpen2(true)}

              // onMouseLeave={() =>}
              onClick={() => {
                setIsDropdownOpen2(!isDropdownOpen2);
                setIsDropdownOpen(false);
                setIsDropdownOpen1(false);
              }}
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Placement Program
            </button>
            {isDropdownOpen2 && (
              // onMouseLeave={() => setIsDropdownOpen2(false)}
              <div onMouseLeave={() => setIsDropdownOpen2(false)} className="absolute   left-0 mt-2  w-[250px] bg-white border border-gray-300 rounded-md shadow-lg z-20">
                <ul className="grid grid-cols-2 gap-0 p-0 font-bold">
                  {placementProgram.map((course, index) => (
                    <li key={index} className="px-1">
                      <Link
                        to={course.path}
                        className="block text-gray-700 hover:text-orange-500 px-2 py-2 text-sm"
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}


          </div>
          <Link to="/AboutUs" className="text-gray-700 hover:text-orange-500 font-medium">


            
            <div onMouseEnter={()=>{setIsDropdownOpen2(false)}} >
              About us

            </div>
          </Link>
          <Link to="/Workspace" className="text-gray-700 hover:text-orange-500 font-medium">Workshops</Link>

          {/* <Link to="/placement" className="text-gray-700 hover:text-orange-500 font-medium">Placements</Link> */}
        </nav>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 space-y-6 z-50 shadow-md">
          <div className="space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-orange-500">Home</Link>
            {/* <Link to="/All" className="block text-gray-700 hover:text-orange-500">Institute</Link> */}
            <Link to="/full-stack-developer-course-in-pune-with-placement" className="block text-gray-700 hover:text-orange-500">Full Stack Development</Link>

            {/* Short Term Courses */}
            <button
              onClick={() => setIsShortTermOpen(!isShortTermOpen)}
              className="block w-full text-gray-700 hover:text-orange-500 font-medium flex items-center justify-between"
            >
              Short Term Courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 ${isShortTermOpen ? "transform rotate-180" : ""}`}
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isShortTermOpen && (
              <div className="space-y-2 pl-4">
                {Object.entries(shortTermCourses).map(([category, courses], index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">{category}</h4>
                    <ul className="space-y-2">
                      {courses.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">{course.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Long Term Courses */}
            <button
              onClick={() => setIsLongTermOpen(!isLongTermOpen)}
              className="block w-full text-gray-700 hover:text-orange-500 font-medium flex items-center justify-between"
            >
              Long Term Courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 ${isLongTermOpen ? "transform rotate-180" : ""}`}
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLongTermOpen && (
              <div className="space-y-2 pl-4">
                {Object.entries(longTermCourses).map(([category, courses], index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">{category}</h4>
                    <ul className="space-y-2">
                      {courses.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">{course.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Placement Program */}
            <button
              onClick={() => setPlacementProgram(!isplacementProgram)}

              className="block w-full text-gray-700 hover:text-orange-500 font-medium flex items-center justify-between"
            >
              Placement Program
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 ${isDropdownOpen2 ? "transform rotate-180" : ""}`}
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isplacementProgram && (
              <div className="space-y-1 pl-4">
                {placementProgram.map((course, index) => (
                  <div key={index}>
                    <Link to={course.path} className="block text-gray-700 hover:text-orange-500">
                      {course.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}

            <Link to="/workspace" className="block text-gray-700 hover:text-orange-500">Workshops</Link>
          </div>
        </div>
      )}
    </header>
  );
}
