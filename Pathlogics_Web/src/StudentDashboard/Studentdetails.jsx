import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentInfo = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({}); // State to handle form data
  const [datachanges, setDataChanges] = useState(false);
  // Fetch student details on component mount
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/admin/getStudent",{});
        // console.log("Fetched Student Data:", response.data);
        setUsers(response.data?.StudentData || []); // Set data to state
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };
    fetchStudentDetails();
  }, [datachanges]); // Empty dependency array ensures it runs only on mount


  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/admin/getStudent",{});
      // console.log("Fetched Student Data:", response.data);
      setUsers(response.data?.StudentData || []); // Set data to state
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };


  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelstatus = async (id, isactive) =>{
    console.log("inside updating status ")
    console.log("insaide Handel Status",  id)
    console.log("insaide Handel Status",  isactive)
    try {
      const response = await fetch('http://localhost:4000/api/admin/updateStatus', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, isactive }), // Send user ID and new status
      });

      if (response.ok) {
        setDataChanges(!datachanges);
        fetchStudentDetails();
        // console.log('Status updated successfully!');
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Open the modal and set selected user data
  const toggleModal = (user) => {
    setSelectedUser(user);
    setFormData(user); // Populate the form with the selected user's data
    setIsModalOpen(!isModalOpen);
  };

  const trainer = [
    { title: "Shailesh Sir", id: "1", name: "MERN Stack" },
    { title: "Kunal Sir", id: "2", name: "MERN Stack" },
    // { title: "React.JS", id: "3", name: "reactjs" }
  ]

  const courses = [
    { title: "Core Java", id: "1", name: "corejava" },
    { title: "Advanced Java", id: "2", name: "advancedjava" },
    { title: "React.JS", id: "3", name: "reactjs" },
    { title: "Angular.JS", id: "4", name: "angularjs" },
    { title: "Node.JS", id: "5", name: "nodejs" },
    { title: "Python Programming", id: "6", name: "python" },
    { title: "React Native", id: "7", name: "reactnative" },
    { title: "Full Stack Java Development", id: "8", name: "fullstackjava" },
    { title: ".NET Core Development", id: "9", name: "netcore" },
    { title: ".NET with Angular", id: "10", name: "netangular" },
    { title: "Software Testing", id: "11", name: "softwaretesting" },
    { title: "Power BI", id: "12", name: "powerbi" },
    { title: "Data Science with Python", id: "13", name: "datascience" },
    { title: "AWS & DevOps", id: "14", name: "awsdevops" },
    { title: "Digital Marketing Training", id: "15", name: "digitalmarketing" },
    { title: "FullStack Java Developer", id: "16", name: "fullstackjavadeveloper" },
    { title: "FullStack .Net Developer", id: "17", name: "fullstacknetdeveloper" },
    { title: "FullStack Devops Engineer", id: "18", name: "fullstackdevops" },
    { title: "FullStack Salesforce Developer", id: "19", name: "fullstacksalesforce" },
    { title: "FullStack Testing", id: "20", name: "fullstacktesting" },
    { title: "FullStack Python Developer", id: "21", name: "fullstackpython" },
    { title: "FullStack Development with AI", id: "22", name: "fullstackai" },
    { title: "Diploma in Digital Marketing", id: "23", name: "diplomadigitalmarketing" },
    { title: "FullStack Web Developer", id: "24", name: "fullstackwebdeveloper" },
    { title: "Manual Testing", id: "25", name: "manualtesting" },
    { title: "Selenium with Java", id: "26", name: "seleniumwithjava" },
    { title: "Salesforce Development", id: "27", name: "salesforcedevelopment" }
  ];

  

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      // Ensure formData contains the correct data (including id for the update)
      if (!formData.id) {
        alert("Student ID is missing");
        return;
      }
  
      // Send the updated data to the backend via PUT request
      console.log("FormData from update status", formData); // Log form data for debugging
  
      console.log("updating student")
      const response = await axios.put('http://localhost:4000/api/admin/updateStudent', formData);
  
      console.log("Update Response:", response.data); // Log the response for debugging
  
      // If the update is successful, update the users array in the state
      const updatedUsers = [...users];
      const index = updatedUsers.findIndex((user) => user.id === selectedUser.id); // Using `id` to identify the user
  
      if (index !== -1) {
        // Update the user data in the array with the new formData
        updatedUsers[index] = { ...updatedUsers[index], ...formData }; // Merge old data with updated form data
        setUsers(updatedUsers); // Update the users state
      }
  
      // Close the modal after successful update
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating student data:", error); // Log error for debugging
      alert("Failed to update student profile. Please try again."); // Alert for user
    }
  };

  
  // Handle cancel button in the modal
  const handleCancel = () => {
    setIsModalOpen(false); // Close modal without saving changes
  };

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-center text-3xl font-semibold mb-6">Student Information</h2>
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
                  {user.isactive == "TRUE" ? (
                            <>
                              <label className="mr-8"> Active </label>
                              <button
                                onClick={() => handelstatus(user.id, user.isactive)}
                                className="w-30 px-4 py-2 bg-red-800 text-white rounded-md  mt-4 sm:mt-0"
                              >
                                Inactivate
                              </button>
                            </>
                          ) : (
                            <>
                              <label className="mr-6"> Inactive </label>
                              <button
                                onClick={() => handelstatus(user.id, user.isactive)}
                                className="w-30 px-4 py-2 bg-green-800 text-white rounded-md  mt-4 sm:mt-0"
                              >
                                Activate
                              </button>
                            </>
                          )}
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
              <h3 className="text-2xl font-semibold mb-4">Update Student Profile</h3>
              <h1>Student ID :{formData.id}</h1>
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-3 gap-6">
                  <div className="mb-4">
                    <label className="block text-gray-700">Student Name</label>
                    <input
                      type="text"
                      name="name" // Corrected name attribute
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
                      value={formData.city}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Active Course</label>
                    <input
                      type="text"
                      name="activecourse_name"
                      value={formData.activecourse_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter active course"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">College Name</label>
                    <input
                      type="text"
                      name="college_name"
                      value={formData.college_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter fees"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Admission Date</label>
                    <input
                      type="date"
                      name="created_at"
                      value={formData.created_at}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Course Name</label>
                    <input
                      type="text"
                      name="course_name"
                      value={formData.course_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter course name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Current Year</label>
                    <input
                      type="text"
                      name="current_year"
                      value={formData.current_year}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter current year"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Year of Passout</label>
                    <input
                      type="text"
                      name="year_of_passout"
                      value={formData.year_of_passout}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter year of passout"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Interested Course</label>
                    <input
                      type="text"
                      name="interested_course"
                      value={formData.interested_course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter interested course"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Branch Name</label>
                    <input
                      type="text"
                      name="Branch Name"
                      value={formData.course_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter Your College Branch"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Course Name</label>
                  <select
                    name="activecourse_name"
                    value={formData.activecourse_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select a Course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.name}>
                        {course.title}
                        
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Trainer Name</label>
                  <select
                    name="trainer"
                    value={formData.trainer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select a trainer</option>
                    {trainer.map((trainer) => (
                      <option key={trainer.id} value={trainer.title}>
                        {trainer.title}
                        
                      </option>
                    ))}
                  </select>
                </div>



                <div className="flex justify-between mt-6">
                  <button
                    type="submit"
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
    </>
  );
};

export default StudentInfo;
