// // import React from "react";

// // const UserTable = () => {
// //   const users = [
// //     {
// //       name: "John Doe",
// //       email: "john.doe@example.com",
// //       phone: "123-456-7890",
// //       activeCourse: "React Basics",
// //       isActive: true,
// //     },
// //     {
// //       name: "Jane Smith",
// //       email: "jane.smith@example.com",
// //       phone: "987-654-3210",
// //       activeCourse: "Advanced Node.js",
// //       isActive: false,
// //     },
// //     {
// //       name: "Robert Johnson",
// //       email: "robert.johnson@example.com",
// //       phone: "555-123-4567",
// //       activeCourse: "Python for Beginners",
// //       isActive: true,
// //     },
// //   ];

// //   return (
// //     <div className="p-6 bg-gray-50 min-h-screen">
// //       <h2 className="text-3xl font-semibold mb-6">User Information</h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full border border-gray-300">
// //           <thead className="bg-indigo-600 text-white">
// //             <tr>
// //               <th className="px-6 py-3 text-left">Name</th>
// //               <th className="px-6 py-3 text-left">Email</th>
// //               <th className="px-6 py-3 text-left">Phone No</th>
// //               <th className="px-6 py-3 text-left">Active Course</th>
// //               <th className="px-6 py-3 text-left">Is Active</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {users.map((user, index) => (
// //               <tr
// //                 key={index}
// //                 className={`${
// //                   index % 2 === 0 ? "bg-white" : "bg-gray-100"
// //                 } hover:bg-gray-200`}
// //               >
// //                 <td className="px-6 py-4">{user.name}</td>
// //                 <td className="px-6 py-4">{user.email}</td>
// //                 <td className="px-6 py-4">{user.phone}</td>
// //                 <td className="px-6 py-4">{user.activeCourse}</td>
// //                 <td className="px-6 py-4">
// //                   {user.isActive ? (
// //                     <span className="text-green-600 font-semibold">Active</span>
// //                   ) : (
// //                     <span className="text-red-600 font-semibold">Inactive</span>
// //                   )}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserTable;

// // ############################

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Studentinfo = () => {
//   const initialUsers = [
//     {
//       name: "John Doe",
//       email: "john.doe@example.com",
//       phone: "123-456-7890",
//       activeCourse: "React Basics",
//       isActive: true,
//     },
//     {
//       name: "Jane Smith",
//       email: "jane.smith@example.com",
//       phone: "987-654-3210",
//       activeCourse: "Advanced Node.js",
//       isActive: false,
//     },
//     {
//       name: "Robert Johnson",
//       email: "robert.johnson@example.com",
//       phone: "555-123-4567",
//       activeCourse: "Python for Beginners",
//       isActive: true,
//     },
//   ];

//   const [users, setUsers] = useState(initialUsers);

//   // Toggle Active/Inactive status
//   const toggleActiveStatus = (index) => {
//     const updatedUsers = [...users];
//     updatedUsers[index].isActive = !updatedUsers[index].isActive;
//     setUsers(updatedUsers);
//   };
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-semibold mb-6">User Information</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead className="bg-orange-600 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left border border-gray-300">
//                 Sr. No.
//               </th>
//               <th className="px-6 py-3 text-left border border-gray-300">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left border border-gray-300">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left border border-gray-300">
//                 Phone No
//               </th>
//               <th className="px-6 py-3 text-left border border-gray-300">
//                 Active Course
//               </th>
//               <th className="px-6 py-3 text-left border border-gray-300">
//                 Is Active
//               </th>
//               <th className="px-6 py-3 text-left border border-gray-300">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr
//                 key={index}
//                 className={`${
//                   index % 2 === 0 ? "bg-white" : "bg-gray-100"
//                 } hover:bg-gray-200`}
//               >
//                 <td className="px-6 py-4 border border-gray-300">
//                   {index + 1}
//                 </td>{" "}
//                 {/* SR No. */}
//                 <td className="px-6 py-4 border border-gray-300">
//                   {user.name}
//                 </td>
//                 <td className="px-6 py-4 border border-gray-300">
//                   {user.email}
//                 </td>
//                 <td className="px-6 py-4 border border-gray-300">
//                   {user.phone}
//                 </td>
//                 <td className="px-6 py-4 border border-gray-300">
//                   {user.activeCourse}
//                 </td>
//                 <td className="px-6 py-4 border border-gray-300">
//                   <button
//                     onClick={() => toggleActiveStatus(index)}
//                     className={`px-3 py-1 rounded-full ${
//                       user.isActive
//                         ? "bg-green-600 text-white"
//                         : "bg-red-600 text-white"
//                     }`}
//                   >
//                     {user.isActive ? "Active" : "Inactive"}
//                   </button>
//                 </td>
//                 <td className="px-6 py-4 border border-gray-300">
//                   <button
//                     onClick={toggleModal}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
//                   >
//                     View More
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Studentinfo;
import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentInfo = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({}); // State to handle form data

  // Fetch student details on component mount
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/admin/getStudent");
        console.log("Fetched Student Data:", response.data);
        setUsers(response.data?.StudentData || []); // Set data to state
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentDetails();
  }, []);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle active/inactive status
  const toggleActiveStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].isActive = !updatedUsers[index].isActive;
    setUsers(updatedUsers);
  };

  // Open the modal and set selected user data
  const toggleModal = (user) => {
    setSelectedUser(user);
    setFormData(user); // Populate the form with the selected user's data
    setIsModalOpen(!isModalOpen);
  };

  // Handle form submission for updating the profile
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUsers = [...users];
    const index = updatedUsers.findIndex((user) => user.email === selectedUser.email);
    if (index !== -1) {
      updatedUsers[index] = formData;
      setUsers(updatedUsers);
      setIsModalOpen(false); // Close the modal after updating
    }
  };

  // Handle cancel button in the modal
  const handleCancel = () => {
    setIsModalOpen(false); // Close modal without saving changes
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">User Information</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-orange-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left border border-gray-300">Sr. No.</th>
              <th className="px-6 py-3 text-left border border-gray-300">Name</th>
              <th className="px-6 py-3 text-left border border-gray-300">Email</th>
              <th className="px-6 py-3 text-left border border-gray-300">Phone No</th>
              <th className="px-6 py-3 text-left border border-gray-300">Active Course</th>
              <th className="px-6 py-3 text-left border border-gray-300">Is Active</th>
              <th className="px-6 py-3 text-left border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-gray-200`}
              >
                <td className="px-6 py-4 border border-gray-300">{index + 1}</td>
                <td className="px-6 py-4 border border-gray-300">{user.name}</td>
                <td className="px-6 py-4 border border-gray-300">{user.email}</td>
                <td className="px-6 py-4 border border-gray-300">{user.phone}</td>
                <td className="px-6 py-4 border border-gray-300">{user.activecourse_name}</td>
                <td className="px-6 py-4 border border-gray-300">
                  <button
                    onClick={() => toggleActiveStatus(index)}
                    className={`px-3 py-1 rounded-full ${
                      user.isActive ? "bg-green-600 text-white" : "bg-red-600 text-white"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  <button
                    onClick={() => toggleModal(user)} // Open modal with user data
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing Student Profile */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl h-auto overflow-y-auto">
            <h3 className="text-2xl font-semibold mb-4">Edit Student Profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-6">
                <div className="mb-4">
                  <label className="block text-gray-700">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter student name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter username"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter address"
                  />
                </div>
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
                <div className="mb-4">
                  <label className="block text-gray-700">Fees</label>
                  <input
                    type="text"
                    name="fees"
                    value={formData.fees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter fees"
                  />
                </div>
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
                <div className="mb-4">
                  <label className="block text-gray-700">Is Active Course</label>
                  <input
                    type="checkbox"
                    name="isActiveCourse"
                    checked={formData.isActiveCourse}
                    onChange={(e) => setFormData({ ...formData, isActiveCourse: e.target.checked })}
                    className="form-checkbox"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  onClick={handleUpdate}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};



export default StudentInfo;
