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
      {/* <div className="bg-orange-500 text-white w-72 p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Trainer Panel</h1>
        <nav>
          <ul className="space-y-6">
            {[
              { icon: <FaHome className="text-xl" />, label: "Home" },
              { icon: <FaUserGraduate className="text-xl" />, label: "Student" , path:"trainer/studentinfo" },
              // { icon: <FaPlus className="text-xl" />, label: "Test Question" ,path:"/admin/CourseSection" },
              { icon: <FaUser className="text-xl" />, label: "Profile",path:"/trainerdashboard" },
              // { icon: <FaBook className="text-xl" />, label: "Contact us" ,path:"/admin/CourseSection"},
              { icon: <FaSignOutAlt className="text-xl" />, label: "Logout" ,path:"/trainerLogin"},
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 hover:text-yellow-300 cursor-pointer"
              >
                {item.icon}
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h4 className="text-2xl font-semibold mb-5   text-orange-500">
          Welcome, 
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cards */}
          {[
            {
              icon: <FaUserGraduate className="text-4xl mb-4" />,
              title: "Students",
              description: "Manage student records and update details",
              path: "/trainer/studentinfo",
            },
            {
              icon: <FaBook className="text-4xl mb-4" />,
              title: "Courses",
              description: "View and update available student courses",
              path: "/trainer/courseDetails"
            },
            {
              icon: <FaClipboardList className="text-4xl mb-4" />,
              title: "Tests Questions",
              description: "Manage student test data",
              path : "/trainer/CourseSection"
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
     