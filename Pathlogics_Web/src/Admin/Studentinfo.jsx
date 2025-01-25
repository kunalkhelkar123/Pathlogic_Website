// import React from "react";

// const UserTable = () => {
//   const users = [
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

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-semibold mb-6">User Information</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead className="bg-indigo-600 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left">Name</th>
//               <th className="px-6 py-3 text-left">Email</th>
//               <th className="px-6 py-3 text-left">Phone No</th>
//               <th className="px-6 py-3 text-left">Active Course</th>
//               <th className="px-6 py-3 text-left">Is Active</th>
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
//                 <td className="px-6 py-4">{user.name}</td>
//                 <td className="px-6 py-4">{user.email}</td>
//                 <td className="px-6 py-4">{user.phone}</td>
//                 <td className="px-6 py-4">{user.activeCourse}</td>
//                 <td className="px-6 py-4">
//                   {user.isActive ? (
//                     <span className="text-green-600 font-semibold">Active</span>
//                   ) : (
//                     <span className="text-red-600 font-semibold">Inactive</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserTable;
   
// ############################


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Studentinfo = () => {
  const initialUsers = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      activeCourse: "React Basics",
      isActive: true,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      activeCourse: "Advanced Node.js",
      isActive: false,
    },
    {
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "555-123-4567",
      activeCourse: "Python for Beginners",
      isActive: true,
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  // Toggle Active/Inactive status
  const toggleActiveStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].isActive = !updatedUsers[index].isActive;
    setUsers(updatedUsers);
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
                <td className="px-6 py-4 border border-gray-300">{index + 1}</td> {/* SR No. */}
                <td className="px-6 py-4 border border-gray-300">{user.name}</td>
                <td className="px-6 py-4 border border-gray-300">{user.email}</td>
                <td className="px-6 py-4 border border-gray-300">{user.phone}</td>
                <td className="px-6 py-4 border border-gray-300">{user.activeCourse}</td>
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
                  <Link to="/StudentProfileForm">
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                    View More
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentinfo;
