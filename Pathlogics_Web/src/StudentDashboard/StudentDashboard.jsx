import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Welcome, {userData.username}!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Here's your personalized dashboard.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Your Information:
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                <strong>Username:</strong> {userData.username}
              </li>
              <li>
                <strong>Email:</strong> {userData.email}
              </li>
              <li>
                <strong>City:</strong> {userData.city}
              </li>
              <li>
                <strong>Current Year:</strong> {userData.currentYear}
              </li>
              <li>
                <strong>Course:</strong> {userData.courseName}
              </li>
            </ul>
          </div>

          <button
            onClick={() => {
              sessionStorage.removeItem("userData");
              navigate("/");
            }}
            className="mt-8 w-full py-3 px-6 bg-orange-500 text-white text-lg font-medium rounded-md shadow-md hover:bg-[rgb(9,78,74)] focus:outline-none focus:ring-4 focus:ring-[rgb(9,78,74)]"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
