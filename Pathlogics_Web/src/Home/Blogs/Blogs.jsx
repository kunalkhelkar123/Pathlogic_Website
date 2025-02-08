import React from 'react';
import abc from "../../../src/assets/Awss.png"
export default function Blogs() {
  return (
    <>
      {/* Main content with image and text */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 min-h-screen p-4 md:p-8 lg:p-12 xl:p-16">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6 p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Unbeatable placement records that most institutes only dream of!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Our graduates achieve exceptional career success, setting new standards in the industry.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
           src={abc} // Replace with your actual image path later
            alt="500px,300px"
            className="w-full h-auto sm:w-auto sm:h-auto max-w-xs sm:max-w-md md:max-w-full rounded-lg shadow-md"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Padding to ensure separation between sections */}
      <div className=""></div>

      {/* Placement statistics */}
      <div className="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8 lg:p-12 xl:p-16">
        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold">MNC's hired in 2022</p>
          <hr className="my-1 border-orange-500 w-2/3 mx-auto" />
          <h1 className="text-orange-500 text-5xl sm:text-6xl font-bold">712+</h1>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold">Offers in 2022</p>
          <hr className="my-1 border-orange-500 w-2/3 mx-auto" />
          <h1 className="text-orange-500 text-5xl sm:text-6xl font-bold">2208+</h1>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold">MNC's hired in 2023</p>
          <hr className="my-1 border-orange-500 w-2/3 mx-auto" />
          <h1 className="text-orange-500 text-5xl sm:text-6xl font-bold">576</h1>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold">Offers in 2023</p>
          <hr className="my-1 border-orange-500 w-2/3 mx-auto" />
          <h1 className="text-orange-500 text-5xl sm:text-6xl font-bold">1512</h1>
        </div>
      </div>
    </>
  );
}
