import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/patho.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isShortTermOpen, setIsShortTermOpen] = useState(false);
  const [isLongTermOpen, setIsLongTermOpen] = useState(false);


  const handleShortTermHover = () => {
    setIsShortTermOpen(true);
    setIsLongTermOpen(false);
  };

  const handleLongTermHover = () => {
    setIsLongTermOpen(true);
    setIsShortTermOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
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
      { name: "FullStack Web Development", path: "/FullMERN1" },
      { name: "FullStack Java Development", path: "/FullJavaDev" },
      { name: "FullStack DevOps Engineer", path: "/Devops" },
    ],
    testing: [
      { name: "FullStack .NET Developer", path: "/DotNet" },
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
    { name: 'Full Stack Java Development', path: '/PlacementJava' },
    { name: 'Full Stack Web Development', path: '/PlacementWeb' },
    { name: 'Full Stack Testing', path: '/MainTesting' },
    { name: 'DevOps', path: '/MainDevops' },
    { name: 'Digital Marketing', path: '/MainDigitalMarketing' },
    { name: 'Internship', path: '/Certification' },
    { name: 'Certification', path: '/Certification' },
    { name: 'Stipend', path: '/Certification' },

  ];


  const StudentRegistration = () => {
    setIsQuickEnquiryOpen(!isQuickEnquiryOpen);
    setSubmitStatus({ message: '', isError: false });
    Navigate('/StudentRegistration');
  };
  const toggleQuickEnquiry = () => {
    setIsQuickEnquiryOpen(!isQuickEnquiryOpen);
    setSubmitStatus({ message: '', isError: false });
    Navigate('/quickenquiry');
  };
  const LoginBar = [
    { name: "Student login", path: "/StudentLogin" },
    { name: "Admin Login", path: "/adminLogin" },
    { name: "Trainer Login", path: "/trainerLogin" }
  ];

  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
            <div className="bg-black  text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col  sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <span className="flex items-center space-x-2">
            <span>📧</span>
            <span>info@pathlogicstech.in</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>📞</span>
            <span>+91 7364036464</span>
          </span>
        </div>
        {/* <div className="hidden sm:flex space-x-4 sm:space-x-6 mt-2 sm:mt-0 ml-auto"> */}
          {/* <a href="#admission" className="hover:underline">Admission</a> */}
          <div className="hidden sm:flex space-x-4 sm:space-x-6 mt-2 sm:mt-0 ml-auto">
          {/* <a href="#admission" className="hover:underline">Admission</a> */}
          
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsDropdownOpen1((prevState) => !prevState)}
              className="text-white-700 hover:underline "
            >
              Login
            </button>
            {isDropdownOpen1 && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
                style={{ zIndex: 222 }}
              >
                <ul className="space-y-2 p-2">
                  {LoginBar.map((course, index) => (
                    <li key={index}>
                      <Link to={course.path} className="block text-gray-700 hover:text-orange-500 px-4 py-2 text-sm">
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* <a href="/StudentLogin" className="hover:underline">Student Login</a> */}
          <button onClick={StudentRegistration} className="hover:underline">Apply Online</button>
          <button onClick={toggleQuickEnquiry} className="hover:underline">Quick Enquiry</button>
          {/* <a href="#gallery" className="hover:underline">Gallery</a> */}
        </div>
      </div>
    
      <div className="w-full bg-white py-1 px-4 md:px-8 flex justify-between items-center border-b-2 border-orange-500">
        <div className="flex items-center">
          <button onClick={() => navigate('/')} className="text-black focus:outline-none">
            <img src={image} alt="Logo" />
          </button>
        </div>

        <nav className="hidden md:flex space-x-2 sm:space-x-4 md:space-x-6 ml-auto">
          <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium">Home</Link>
          <Link to="/All" className="text-gray-700 hover:text-orange-500 font-medium">Institute</Link>
          <Link to="/fullstack" className="text-gray-700 hover:text-orange-500 font-medium">Full Stack Development</Link>

          {/* Short Term Courses */}
          <div
            className="relative dropdown "
            //onMouseEnter={() => setIsShortTermOpen(true)}
            // onClick={handleShortTermClick}
            onMouseEnter={handleShortTermHover}

            onClick={() => setIsShortTermOpen(true)}
          >
            <button className="text-gray-700 hover:text-orange-500 font-medium">
              Short Term Courses
            </button>
            {isShortTermOpen && (
              <div onMouseLeave={() => setIsShortTermOpen(false)} className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50 ml-[-518px] w-[650px] p-4">
                <div className="grid grid-cols-3 gap-6">
                  {/* Programming Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">Programming Courses</h4>
                    <ul className="space-y-2">
                      {shortTermCourses.programming.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testing */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">DotNet and Testing</h4>
                    <ul className="space-y-2">
                      {shortTermCourses.testing.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advanced Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">Advanced Courses</h4>
                    <ul className="space-y-2">
                      {shortTermCourses.advanced.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">
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
            onMouseEnter={handleLongTermHover}

            onClick={() => setIsLongTermOpen(true)}
          >
            <button className="text-gray-700 hover:text-orange-500 font-medium" >
              Long Term Courses
            </button>
            {isLongTermOpen && (
              <div onMouseLeave={() => setIsLongTermOpen(false)} className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50 ml-[-518px] w-[650px] p-4">
                <div className="grid grid-cols-3 gap-6 ml-4">
                  {/* Programming Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">Programming Courses</h4>
                    <ul className="space-y-2">
                      {longTermCourses.programming.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testing */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">DotNet and Testing</h4>
                    <ul className="space-y-2">
                      {longTermCourses.testing.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advanced Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">Advanced Courses</h4>
                    <ul className="space-y-2">
                      {longTermCourses.advanced.map((course, index) => (
                        <li key={index}>
                          <Link to={course.path} className="text-gray-700 hover:text-orange-500">
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

          <div className="relative dropdown" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => {
              setIsDropdownOpen2(!isDropdownOpen2);
              setIsDropdownOpen(false);
              setIsDropdownOpen1(false);
            }} className="text-gray-700 hover:text-orange-500 font-medium">
              Placement Program
            </button>
            {isDropdownOpen2 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
                <ul className="space-y-2 p-2">
                  {placementProgram.map((course, index) => (
                    <li key={index}>
                      <Link to={course.path} className="block text-gray-700 hover:text-orange-500 px-4 py-2 text-sm">
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>)}
              
          </div>
          <Link to="/AboutUs" className="text-gray-700 hover:text-orange-500 font-medium">
         

          <div>
                About us
                
              </div>
              </Link>
          <Link to="/Workspace" className="text-gray-700 hover:text-orange-500 font-medium">Workshops</Link>
          {/* <Link to="/placement" className="text-gray-700 hover:text-orange-500 font-medium">Placements</Link> */}
        </nav>
      </div>
    </header>
  );
}