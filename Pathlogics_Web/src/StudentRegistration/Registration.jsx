import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons
import axios from "axios"; // Import Axios

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    pin: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    collegeName: "",
    courseName: "",
    currentYear: "",
    yearOfAdmission: "",
    yearOfPassout: "",
    interestedCourse: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const [isLoading, setIsLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(null); // State to handle error messages

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Validate terms and conditions agreement
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    setIsLoading(true); // Set loading to true when API request starts
    setError(null); // Reset error state

    try {
      // Make the POST request to the backend API
      const response = await axios.post("http://localhost:4000/api/auth/register", formData);

      if (response.status === 201) {
        // Registration successful
        console.log("Registration Successful", response.data);
        alert("Account created successfully!");

        // Reset form data after successful registration
        setFormData({
          name: "",
          email: "",
          city: "",
          pin: "",
          phone: "",
          username: "",
          password: "",
          confirmPassword: "",
          agreeToTerms: false,
          collegeName: "",
          courseName: "",
          currentYear: "",
          yearOfAdmission: "",
          yearOfPassout: "",
          interestedCourse: "",
        });
      } else {
        // Handle other statuses, if needed
        console.log(`Unexpected response status: ${response.status}`);
        alert(`Unexpected error: ${response.statusText}`);
      }
    } catch (err) {
      // Handle errors based on the response status
      if (err.response) {
        // Server responded with a status code outside the 2xx range
        switch (err.response.status) {
          case 400:
            console.error("Bad Request", err.response.data);
            alert("Bad Request: Please check the entered data.");
            break;
          case 401:
            console.error("Unauthorized", err.response.data);
            alert("Email Address already exists!");
            break;
            case 402:
              console.error("Unauthorized", err.response.data);
              alert("username already exists!");
              break;
          case 500:
            console.error("Internal Server Error", err.response.data);
            alert("An internal server error occurred. Please try again later.");
            break;
          default:
            console.error("Error", err.response.data);
            alert("An error occurred. Please try again.");
            break;
        }
      } else if (err.request) {
        // No response from server
        console.error("No response from server", err.request);
        alert("No response from the server. Please try again later.");
      } else {
        // Something else went wrong
        console.error("Error", err.message);
        alert("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false); // Set loading to false when API request is done
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Student Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* City Field */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {/* Phone  number Field */}
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your pin code"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Pin Code Field */}
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                Pin Code
              </label>
              <input
                type="text"
                id="pin"
                value={formData.pin}
                onChange={handleChange}
                placeholder="Enter your pin code"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* College Name Field */}
            <div>
              <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
                Current College Name
              </label>
              <input
                type="text"
                id="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                placeholder="Enter your college name"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Course Name Field */}
            <div>
              <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
                Current Course Name
              </label>
              <select
                id="courseName"
                value={formData.courseName}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your course</option>
                <option value="BSc Computer Science">BSc Computer Science</option>
                <option value="BTech Computer Engineering">BTech Computer Engineering</option>
                <option value="BCA">BCA</option>
                <option value="MSc Computer Science">MSc Computer Science</option>
                <option value="MTech Computer Engineering">MTech Computer Engineering</option>
                <option value="MCA">MCA</option>
                <option value="IT Diploma">IT Diploma</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Data Science">Data Science</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Other">Other</option>

              </select>
            </div>



            {/* Current Year Field */}
            <div>
              <label htmlFor="currentYear" className="block text-sm font-medium text-gray-700">
                Current Year
              </label>
              <select
                id="currentYear"
                value={formData.currentYear}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your current year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                {/* <option value="5">5th Year</option>
    <option value="6">6th Year</option> */}
              </select>
            </div>


            {/* Year of Admission Field */}
            <div>
              <label htmlFor="yearOfAdmission" className="block text-sm font-medium text-gray-700">
                Year of Admission
              </label>
              <select
                id="yearOfAdmission"
                value={formData.yearOfAdmission}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your year of admission</option>
                {Array.from({ length: 21 }, (_, index) => 2010 + index).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>


            {/* Year of Passout Field */}
            <div>
              <label htmlFor="yearOfPassout" className="block text-sm font-medium text-gray-700">
                Year of Passout
              </label>
              <select
                id="yearOfPassout"
                value={formData.yearOfPassout}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your year of passout</option>
                {Array.from({ length: 21 }, (_, index) => 2010 + index).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>


            {/* Interested Course Field */}
            <div>
              <label htmlFor="interestedCourse" className="block text-sm font-medium text-gray-700">
                Current Course Name
              </label>
              <select
                id="interestedCourse"
                value={formData.interestedCourse}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select your course</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Java Development">Java Development</option>
                <option value="Python Data Science">Python Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
                {/* <option value="Cyber Security">Cyber Security</option> */}
                {/* <option value="Blockchain Development">Blockchain Development</option> */}
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Mobile App Development">Mobile App Development</option>
                {/* <option value="Data Engineering">Data Engineering</option> */}
                <option value="UI/UX Design">UI/UX Design</option>
                {/* <option value="Game Development">Game Development</option> */}
                <option value="DevOps">DevOps</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Software Testing">Software Testing</option>
                {/* <option value="Business Intelligence">Business Intelligence</option> */}
              </select>
            </div>


            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a password"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                className="absolute right-3 top-10 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show or hide icon */}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle visibility
                className="absolute right-3 top-10 text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} {/* Show or hide icon */}
              </button>
            </div>
          </div>
          {/* Terms and Conditions Checkbox */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-blue-500 hover:underline"
                >
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading} // Disable button while loading
              className={`w-auto  py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 ${isLoading ? 'bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'}`}
            >
              {isLoading ? "Creating..." : "Create Account"}
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
