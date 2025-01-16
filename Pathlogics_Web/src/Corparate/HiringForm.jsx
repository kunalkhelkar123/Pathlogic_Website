import React, { useState } from 'react';
import image from './../assets/registrationimage.svg';

export default function HiringForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    companyName: '',
    mobileNumber: '',
    emailId: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      designation: '',
      companyName: '',
      mobileNumber: '',
      emailId: ''
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg shadow-lg p-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src={image} // Replace with your image path
            // alt="Hiring Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label 
              htmlFor="designation" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Designation*
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your designation"
            />
          </div>

          <div>
            <label 
              htmlFor="companyName" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name*
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label 
              htmlFor="mobileNumber" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number*
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label 
              htmlFor="emailId" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email ID*
            </label>
            <input
              type="email"
              id="emailId"
              name="emailId"
              required
              value={formData.emailId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

