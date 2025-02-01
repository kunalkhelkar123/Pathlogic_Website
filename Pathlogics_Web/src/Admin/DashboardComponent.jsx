import React from "react";
import {
  FaHome,
  FaBuilding,
  FaUser,
  FaSignOutAlt,
  FaPlus,
  FaBook,
  FaTasks,
  FaClipboardList,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardComponent = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="bg-orange-500 text-white w-72 p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        <nav>
          <ul className="space-y-6">
            {[
              { icon: <FaHome className="text-xl" />, label: "Home" },
              { icon: <FaUserGraduate className="text-xl" />, label: "Student" },
              { icon: <FaPlus className="text-xl" />, label: "Test" },
              { icon: <FaUser className="text-xl" />, label: "Profile" },
              { icon: <FaBook className="text-xl" />, label: "Contact us" },
              { icon: <FaSignOutAlt className="text-xl" />, label: "Logout" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 hover:text-yellow-300 cursor-pointer"
              >
                {item.icon}
                <a href="/adminLogin">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-4xl font-semibold mb-10 text-orange-500">
          Welcome, Admin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cards */}
          {[
            {
              icon: <FaUserGraduate className="text-4xl mb-4" />,
              title: "Students",
              description: "Manage student records and details",
              path: "/admin/Studentinfo",
            },
            {
              icon: <FaBook className="text-4xl mb-4" />,
              title: "Courses",
              description: "View and update available courses",
              path: "/admin/courseDetails"
            },
            {
              icon: <FaClipboardList className="text-4xl mb-4" />,
              title: "Tests",
              description: "Manage student test data",
              path : "/admin/CourseSection"
            },
            {
              icon: <FaChalkboardTeacher className="text-4xl mb-4" />,
              title: "Workshops",
              description: "View and schedule workshops",
              path: "/admin/Workshop"
            },
          
            {
              icon: <FaUsers className="text-4xl mb-4" />,
              title: "Staff",
              description: "View and assign staff roles",
              path: "/admin/Staffinfo"
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-orange-500 text-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition flex flex-col items-center"
            >
              {card.icon}
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="mt-2 text-center">{card.description}</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                <Link to={card.path}>View</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
     