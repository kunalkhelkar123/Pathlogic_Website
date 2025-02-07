import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
const StudentDashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");

    console.log("userData", userData);

    if (userData) {
      const parsedData = JSON.parse(userData);
      if (parsedData && parsedData.user) {
        setUserData(parsedData.user);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!userData) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Navbar */}
      <div className="w-[18%] bg-orange-600 shadow-lg text-white flex flex-col border-r-2 border-gray-300">
        <div className="p-6 border-b border-orange-600">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <button
                className="w-full py-3 px-4 text-left font-medium justify-center items-center hover:bg-[rgb(9,78,74)] transition-all duration-200 border-b border-r border-gray-300"
                onClick={() => console.log("Navigate to Profile")}
              >
                My Courses
              </button>
            </li>
            <li>
              <button
                className="w-full py-3 px-4 text-left font-medium justify-center items-center hover:bg-[rgb(9,78,74)] transition-all duration-200 border-b border-r border-gray-300"
                onClick={() => console.log("Navigate to Test")}
              >
                Test
              </button>
            </li>
            <li>
              <button
                className="w-full py-3 px-4 text-left font-medium justify-center items-center hover:bg-[rgb(9,78,74)] transition-all duration-200 border-b border-r border-gray-300"
                onClick={() => console.log("Navigate to Results")}
              >
                Results
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
       <div className="flex-1 p-10">
              <h2 className="text-4xl font-semibold mb-10 text-orange-500">
                Welcome, 
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Cards */}
                {[
                  {
                    icon: <FaUserGraduate className="text-4xl mb-4" />,
                    title: "Your current course",
                    description: "Manage course details",
                    path: "/StudentCourseDetails",
                  },
                  {
                    icon: <FaBook className="text-4xl mb-4" />,
                    title: "Given tests",
                    description: "View and update available courses",
                    path: "/StudentDashboard"
                  },
                  {
                    icon: <FaClipboardList className="text-4xl mb-4" />,
                    title: "Results",
                    description: "Manage student test data",
                    path : "/StudentDashboard"
                  },
                  {
                    icon: <FaChalkboardTeacher className="text-4xl mb-4" />,
                    title: "Take test",
                    description: "View and schedule workshops",
                    path: "/StudentDashboard"
                  },
                
                  // {
                  //   icon: <FaUsers className="text-4xl mb-4" />,
                  //   title: "Staff",
                  //   description: "View and assign staff roles",
                  //   path: "/admin/Staffinfo"
                  // },
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

export default StudentDashboard;
