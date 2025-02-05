import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import image from "../../assets/patho.png"
import axios from "axios";
// import image from "../../assets/patho.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    enquiry: ''
  });
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [notificationCount, setNotificationCount] = useState(() => {
    return typeof window !== 'undefined' ? parseInt(localStorage.getItem('notificationCount') || '0', 10) : 0;
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const StudentRegistration = () => {
    setIsQuickEnquiryOpen(!isQuickEnquiryOpen);
    setSubmitStatus({ message: '', isError: false });
    Navigate('/StudentRegistration');
  };
  const toggleQuickEnquiry = () => {
    setIsQuickEnquiryOpen(!isQuickEnquiryOpen);
    setSubmitStatus({ message: '', isError: false });
    navigate('/quickenquiry');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/enquiries', formData);
      if (response.status === 201) {
        setSubmitStatus({ message: 'Form submitted successfully!', isError: false });
        setNotificationCount(prevCount => prevCount + 1);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          course: '',
          enquiry: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ message: 'An error occurred while submitting the form.', isError: true });
    }
  };

  const LoginBar = [
    { name: "Student login", path: "/StudentLogin" },
    { name: "Admin Login", path: "/adminLogin" },
    { name: "Trainer Login", path: "/trainerLogin" }
  ];

  const shortTermCourses = [
    { name: 'Full stack Java Development', path: '/JavaDevelopment' },
    { name: 'Full stack web Development', path: '/fullstack' },
    { name: 'Aws/Devops', path: '/Aws' },
    { name: 'Software testing', path: '/Testing' },
    { name: 'Salesforce Developer', path: '/SalesforceDeveloper' }, 
    { name: 'DataScience with python', path: '/DataSciencewithpython' },
     { name: 'Digital marketing training', path: '/Digitalmarketingtraining' }
  ];
  const corparate = [

    { name: 'Hire for us ', path: "/again " },
    { name: 'train for us', path: "/more" },
  ]

  return (
    <header className="w-full  ">
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
          {/* <a href="/StudentLogin" className="hover:underline">Student Login</a>
          <a href="/adminlogin" className="hover: unbderline">Admin Login</a> */}
          <button onClick={StudentRegistration} className="hover:underline">Apply Online</button>
          <button onClick={toggleQuickEnquiry} className="hover:underline">Quick Enquiry</button>
        </div>
      </div>

      <div className="w-full bg-white py-1 px-4 md:px-8 flex justify-between items-center border-b-2 border-orange-500">
        <div className="flex items-center">
          <button onClick={() => Navigate('/')} className="text-black focus:outline-none">
            <img
              src={image}
              alt=""
            // className="mr-2"
            />
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-2 sm:space-x-4 md:space-x-6 ml-auto">
          <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium">Home</Link>
          <Link to="/All" className="text-gray-700 hover:text-orange-500 font-medium">Institute</Link>
          <Link to="/fullstack" className="text-gray-700 hover:text-orange-500 font-medium">Full Stack Development</Link>


          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsDropdownOpen((prevState) => !prevState)}
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Short Term Courses
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
                style={{ zIndex: 222 }}
              >
                <ul className="space-y-2 p-2">
                  {shortTermCourses.map((course, index) => (
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







          {/* <div className="relative">
            <button
              onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Corparates
            </button>
            {isDropdownOpen1 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg" style={{zIndex:222}}>
                <ul className="space-y-2 p-2">
                  {corparate.map((course, index) => (
                    <li key={index}>
                      <Link to={course.path} className="block text-gray-700 hover:text-orange-500 px-4 py-2 text-sm">{course.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}
          <Link to="/Workspace" className="text-gray-700 hover:text-orange-500 font-medium">Workshops</Link>
          <Link to="/placement" className="text-gray-700 hover:text-orange-500 font-medium">Placements</Link>
        </nav>
      </div>
    </header>
  );
}
