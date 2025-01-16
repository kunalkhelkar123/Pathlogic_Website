import React, { useState, useEffect } from 'react';
import placeholder from '../../assets/preview.png'; // Replace with your actual transparent image path

// Loader Component
function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        <div className="flex items-center justify-center animate-show-hide">
          <img
            src={placeholder}
            alt="Loader"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// Main Promotion Component
export default function Promotion() {   
  const [loading, setLoading] = useState(true);

  // Simulate loading behavior (e.g., waiting for data or content to load)
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false); // After 6 seconds, stop showing loader and display content
    }, 1000); // 6-second loading time

    return () => clearTimeout(loadingTimer); // Cleanup the timer on component unmount
  }, []);

  if (loading) {
    return <Loader />; // Show the loader if still loading
  }

  return (
    <div className="relative min-h-[600px] w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
      <div id='codetyping' className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150038835.jpg?t=st=1731492180~exp=1731495780~hmac=a2ec4a94cbb20f46e884936d229ec7c6403f727e98a35dd7c38857f1cc455df1&w=826')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Full Stack Development
              <span className="block text-gray-400">(MERN Stack)</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Boost your career with hands-on experience in all facets of development
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center">
              Apply Online
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-300 flex items-center">
              Quick Enquiry
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>

            <button className="px-6 py-3 border border-green-500 bg-green-500 bg-opacity-10 text-green-500 rounded-md hover:bg-opacity-20 transition-colors duration-300 flex items-center">
              Chat with us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </button>
          </div> */}

          <div className="mt-8 w-full max-w-2xl border border-gray-800 bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur">
            <div className="space-y-4">
              <div className="h-2 w-20 rounded bg-blue-500 opacity-50"></div>
              <h2 className="text-xl font-semibold text-white">Why Choose MERN Stack?</h2>
              <p className="text-gray-400">
                Master MongoDB, Express.js, React, and Node.js - the powerful combination of technologies 
                that enables you to build modern, scalable web applications from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
