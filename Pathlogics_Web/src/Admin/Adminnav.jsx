import React, { useState } from "react";
import { FaHome, FaBook, FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import logo from "../assets/patho.png"
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

export default function AdminNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full h-[100px]">
      <div className="w-full h-[100px] bg-white py-1 px-4 md:px-8 flex justify-between items-center border-b-2 border-orange-500">
        {/* Logo Section */}
        <div className="flex items-center ">
          <button className="text-black focus:outline-none">
            <img
              src={logo} // Replace with the correct logo path
              alt="Logo"
              className="h-20 w-auto" // Adjust the height and width as needed
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
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

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-2 sm:space-x-4 md:space-x-6 ml-auto">
        <Link
            to="#"
            className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
          >
            <FaHome className="mr-2" />
            Info
          </Link>
          <Link
            to="/admindashboard"
            className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
          >
            <FaBook className="mr-2" />
            students
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
          >
            <FaPhoneAlt className="mr-2" />
            Contact Us
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-orange-500 font-medium flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <FaUserCircle className="mr-2" />
              My Profile
            </button>
            {isDropdownOpen && (
              <div
                className="absolute top-8 w-[130px] bg-white border border-gray-200 shadow-lg rounded-md"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <ul className="space-y-1 ">
                  <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                    Option 1
                  </li>
                  <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                    Option 2
                  </li>
                  {/* <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                    Option 3
                  </li> */}
                  <li className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
                  <Link to="/adminLogin" className="block p-2 text-gray-700">
                    Log out
                  </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
    