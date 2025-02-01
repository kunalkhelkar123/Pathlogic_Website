import React, { useEffect, useState } from "react";

const StudentCourseDetails = () => {
  const [student, setStudentData] = useState(null);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setStudentData(parsedData.user);
        console.log("User data from course details page:", parsedData.user);
      } catch (error) {
        console.error("Error parsing userData from sessionStorage:", error);
      }
    }
  }, []);

  if (!student) {
    return <p className="text-center text-gray-500">Loading user data...</p>;
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-300 to-indigo-400 text-white">
      {/* Left Navbar */}
      <div className="w-[18%] bg-orange-600 shadow-lg text-white flex flex-col border-r-2 border-gray-300 p-6">
        <h2 className="text-2xl font-bold border-b pb-3">Dashboard</h2>
        <nav className="mt-6 space-y-4">
          {['My Courses', 'Test', 'Results'].map((item, index) => (
            <button key={index} className="w-full py-3 px-4 text-left font-medium hover:bg-orange-700 transition-all duration-200 border-b border-gray-300">
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-grow max-w-4xl mx-auto p-8 bg-white text-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-indigo-600">Student Course Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "Student Name", value: student.name },
            { label: "Username", value: student.username },
            { label: "Email", value: student.email },
            { label: "Phone", value: student.phone || "N/A" },
            { label: "City", value: student.city },
            { label: "Pin Code", value: student.pin },
            { label: "College Name", value: student.college_name || "N/A" },
            { label: "Course Name", value: student.course_name || "N/A" },
            { label: "Current Year", value: student.current_year || "N/A" },
            { label: "Year of Admission", value: student.year_of_admission || "N/A" },
            { label: "Year of Passout", value: student.year_of_passout || "N/A" },
            { label: "Interested Course", value: student.interested_course || "N/A" },
            { label: "Active Course", value: student.activecourse_name || "N/A" },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-lg font-semibold text-indigo-600">{item.label}:</p>
              <p className="text-gray-700 text-lg font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCourseDetails;
