import React from 'react';

const FullstackWeb= () => {

  const courses = [
    { 
        id: 1, 
        name: 'Full Stack Development', 
        description: 'Learn both front-end and back-end technologies to build full-fledged web applications.', 
        link: '/full-stack' 
    },
    { 
        id: 2, 
        name: 'Data Science', 
        description: 'Understand data analysis, machine learning, and statistical modeling to work with large datasets.', 
        link: '/data-science' 
    },
    { 
        id: 3, 
        name: 'Blockchain Development', 
        description: 'Learn blockchain technology, decentralized applications (dApps), and smart contracts.', 
        link: '/blockchain' 
    },
    { 
        id: 4, 
        name: 'MERN Development', 
        description: 'Master MongoDB, Express.js, React, and Node.js to build scalable and modern web applications.', 
        link: '/mern-development' 
    },
    { 
        id: 5, 
        name: 'Salesforce', 
        description: 'Learn to implement CRM solutions and customize Salesforce for business growth.', 
        link: '/salesforce' 
    },
    { 
        id: 6, 
        name: 'Testing', 
        description: 'Gain expertise in manual and automated testing to ensure software quality.', 
        link: '/testing' 
    }
];

  return (
    <div className="min-h-screen py-10  bg-gradient-to-br from-gray-900 to-teal-600"   >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-orange-400 mb-12">More Courses</h1>

        {/* Course Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map(course => (
            <div 
              key={course.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{course.name}</h2>
                <p className="text-gray-600 mb-6">{course.description}</p>
              </div>

              {/* View More Button Fixed at the Bottom */}
              <div className="px-5 py-3  bg-orange-600 text-center">
                <button 
                  className="px-6 py-2 text-white rounded-full hover:bg-orange-800 transition duration-300"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullstackWeb;