import React, { useState } from "react";

const StudentProfileForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    username: "",
    address: "",
    email: "",
    phoneNumber: "",
    activeCourse: "",
    fees: "",
    isActive: false,
    admissionDate: "",
    courseName: "",
    currentYear: "",
    yearOfPassout: "",
    interestedCourse: "",
    isActiveCourse: false,
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle toggle for IsActive and IsActiveCourse fields
  const handleToggle = (e) => {
    const { name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Student Profile
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Student Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter student name"
              required
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter username"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter address"
              rows="4"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter phone number"
            />
          </div>

          {/* Active Course */}
          <div className="mb-4">
            <label className="block text-gray-700">Active Course</label>
            <input
              type="text"
              name="activeCourse"
              value={formData.activeCourse}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter active course"
            />
          </div>

          {/* Fees */}
          <div className="mb-4">
            <label className="block text-gray-700">Fees</label>
            <input
              type="number"
              name="fees"
              value={formData.fees}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter fees"
            />
          </div>

          {/* Is Active */}
          <div className="mb-4">
            <label className="block text-gray-700">Is Active</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="isActive"
                  value={true}
                  checked={formData.isActive === true}
                  onChange={handleToggle}
                  className="mr-2"
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  name="isActive"
                  value={false}
                  checked={formData.isActive === false}
                  onChange={handleToggle}
                  className="mr-2"
                />
                Inactive
              </label>
            </div>
          </div>

          {/* Admission Date */}
          <div className="mb-4">
            <label className="block text-gray-700">Admission Date</label>
            <input
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Course Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Course Name</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter course name"
            />
          </div>

          {/* Current Year */}
          <div className="mb-4">
            <label className="block text-gray-700">Current Year</label>
            <input
              type="text"
              name="currentYear"
              value={formData.currentYear}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter current year"
            />
          </div>

          {/* Year of Passout */}
          <div className="mb-4">
            <label className="block text-gray-700">Year of Passout</label>
            <input
              type="text"
              name="yearOfPassout"
              value={formData.yearOfPassout}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter year of passout"
            />
          </div>

          {/* Interested Course */}
          <div className="mb-4">
            <label className="block text-gray-700">Interested Course</label>
            <input
              type="text"
              name="interestedCourse"
              value={formData.interestedCourse}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter interested course"
            />
          </div>

          {/* Is Active Course */}
          <div className="mb-4">
            <label className="block text-gray-700">Is Active Course</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="isActiveCourse"
                  value={true}
                  checked={formData.isActiveCourse === true}
                  onChange={handleToggle}
                  className="mr-2"
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  name="isActiveCourse"
                  value={false}
                  checked={formData.isActiveCourse === false}
                  onChange={handleToggle}
                  className="mr-2"
                />
                Inactive
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center flex gap-6 mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Delete
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentProfileForm;
