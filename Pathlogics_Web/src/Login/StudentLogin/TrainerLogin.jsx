// // src/AdminLogin.js

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true); // Start loading state
//     setError(null); // Reset any previous error

    
//       // Make POST request to login API for Admin
      
//       const response = await axios.post("http://localhost:4000/api/auth/loginadmin/", formData);
//       console.log(response);
//       if (response.status === 200) {
//         // Handle successful login
//         sessionStorage.setItem("adminData", JSON.stringify(response.data));

//         // Redirect to the admin dashboard
//         navigate("/admindashboard");
//         console.log("Admin Login Successful", response.data);
//         alert("Admin login successful!");
//       }
//     // } catch (err) {
//     //   console.error("Login failed", err);
//     //   setError("Invalid username or password.");
//     // } finally {
//     //   setIsLoading(false); // Set loading to false once API call is complete
//     // }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {error && <div className="text-red-500 text-sm text-center">{error}</div>}

//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"} // Toggle between password and text input
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-3 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 name="rememberMe"
//                 className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
//               />
//               <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
//                 Remember me
//               </label>
//             </div>
//             <a href="#" className="text-sm text-blue-500 hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Logging In..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


// #######################

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Bgimg from "../../assets/logo.jpg"; // Import the background image

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading state
    setError(null); // Reset any previous error

    try {
      // Make POST request to login API for Admin
      const response = await axios.post("http://localhost:4000/api/auth/trainerlogin", formData);
      console.log(response);
      if (response.status === 200) {
        // Handle successful login
        sessionStorage.setItem("trainerData", JSON.stringify(response.data));

        // Redirect to the admin dashboard
        navigate("/trainerDashboard");
        console.log("trainer Login Successful", response.data);
        alert("Trainer login successful!");
      }
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid username or password.");
    } finally {
      setIsLoading(false); // Set loading to false once API call is complete
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Bgimg})` }} // Correctly reference the imported background image
    >
      <div className="max-w-md w-full p-8 rounded-xl shadow-lg"
        style={{ backgroundColor: "rgba(155, 147, 147, 0.8)" }} // Set transparency here
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6"><Link to="/"> Trainer Login</Link></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between password and text input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-black hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
