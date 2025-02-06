import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { X } from "lucide-react";
import image from "../assets/patho.png"
// import image from "../assets/patho.png";


import axios from "axios";
import { FaHome, FaBook, FaPhoneAlt, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const Navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    enquiry: "",
  });

  useEffect(() => {
    const handleOutsideClick = () => setIsDropdownOpen(false);
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    isError: false,
  });
  const [notificationCount, setNotificationCount] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("notificationCount") || "0", 10);
    }
    return 0;
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/enquiries", {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        course: formData.course,
        enquiry: formData.enquiry,
      });

      if (response.status === 201) {
        setSubmitStatus({
          message: "Form submitted successfully!",
          isError: false,
        });
        setNotificationCount((prevCount) => prevCount + 1);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          course: "",
          enquiry: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        message: "An error occurred while submitting the form.",
        isError: true,
      });
    }
  };

  return (
    <header className="w-full  ">
      <div className="w-full bg-white py-1 px-4 md:px-8 flex justify-between items-center border-b-2 border-orange-500">
        <div className="flex items-center">
          <button
            onClick={() => Navigate("/")}
            className="text-black focus:outline-none"
          >
            <img
              src={image}
              alt="ICON"
              // className="mr-2"
            />
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-2 sm:space-x-4 md:space-x-6 ml-auto">
          <Link
            to="/StudentDashboard"
            className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </Link>

          <Link
            to="/fullstack"
            className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
          >
            <FaBook className="mr-2" />
            Courses
          </Link>

          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsDropdownOpen((prevState) => !prevState)}
              className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
            >
              <FaPhoneAlt className="mr-2" />
              ContactUs
            </button>
          </div>
          <div className="flex items-center space-x-2">
      <i className="fas fa-user-circle text-gray-700 hover:text-orange-500 text-lg"></i>
      <div className="relative">
        <button
          className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
          onMouseEnter={() => setIsDropdownOpen(true)} 
        >
          <FaUserCircle className="mr-2" />
          My Profile
        </button>

        {isDropdownOpen && (
          <div
            className="absolute top-8  w-[130px] bg-white border border-gray-200 shadow-lg rounded-md"
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)} 
          >
            <ul className="space-y-2 p-2">
              <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                Option 1
              </li>
              <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                Option 2
              </li>
              <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                Option 3
              </li>
              <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                {/* Log out link */}
                <Link to="/" className="block p-2 text-gray-700">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
        </nav>
      </div>
    </header>
  );
}
