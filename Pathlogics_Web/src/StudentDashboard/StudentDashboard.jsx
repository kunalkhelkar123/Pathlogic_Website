// src/Dashboard.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const StudentDashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch user data (for demo, this is simulated)
  useEffect(() => {
    // Simulating fetching user data from sessionStorage
    const userData = sessionStorage.getItem("userData");
  
    console.log("userData", userData);
  
    if (userData) {
      const parsedData = JSON.parse(userData); // Parse the stored JSON string
      if (parsedData && parsedData.user) {
        setUserData(parsedData.user); // Access user data directly and set it
      } else {
        navigate("/"); // If user data doesn't exist or is malformed, redirect to login
      }
    } else {
      navigate("/"); // If no user data is found, redirect to login
    }
  }, [navigate]);
  
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Welcome, {userData.username}!</h2>
        <p className="text-lg text-gray-600">This is your dashboard.</p>
        <div className="mt-4">
          <h3 className="text-xl font-medium text-gray-700">Your Information:</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li><strong>Username:</strong> {userData.username}</li>
            <li><strong>Email:</strong> {userData.email}</li>
            <li><strong>City:</strong> {userData.city}</li>
            <li><strong>Current Year:</strong> {userData.currentYear}</li>
            <li><strong>Course:</strong> {userData.courseName}</li>
          </ul>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem("userData"); // Clear user data
            navigate("/"); // Redirect to login page
          }}
          className="mt-6 w-full py-2 px-4 bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
