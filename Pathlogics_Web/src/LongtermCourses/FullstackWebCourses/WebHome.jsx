import React, { useState, useEffect } from 'react';

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        <div className="flex items-center justify-center animate-show-hide">
         
        </div>
      </div>
    </div>
  );
}

// Main Promotion Component
export default function WebHome() {   
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(loadingTimer); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="relative min-h-[600px] w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
      <div id='codetyping' className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150038835.jpg?t=st=1731492180~exp=1731495780~hmac=a2ec4a94cbb20f46e884936d229ec7c6403f727e98a35dd7c38857f1cc455df1&w=826')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Full Stack Web Development
              <span className="block text-gray-400">(MERN Stack)</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Boost your career with hands-on experience in all facets of web development
            </p>
          </div>

         

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
