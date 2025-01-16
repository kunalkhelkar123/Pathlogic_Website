import React from "react";

const Start = () => {
  return (
    <div className="bg-orange-500 text-white py-6 px-4 grid grid-cols-1 md:grid-cols-4 text-center gap-4">
      {/* Eligibility Section */}
      <div className="flex flex-col items-center border-b border-white md:border-r md:border-b-0 hover:underline cursor-pointer">
        <div className="text-4xl mb-2">👤</div> {/* Replace with actual icon */}
        <p className="font-bold">Eligibility</p>
        <p>BE / B. Tech / ME / M. Tech</p>
      </div>

      {/* Duration Section */}
      <div className="flex flex-col items-center border-b border-white md:border-r md:border-b-0 hover:underline cursor-pointer">
        <div className="text-4xl mb-2">⏳</div> {/* Replace with actual icon */}
        <p className="font-bold">Duration</p>
        <p>6 Months</p>
      </div>

      {/* Apply Now Section */}
      <div className="flex flex-col items-center border-b border-white md:border-r md:border-b-0 hover:underline cursor-pointer">
        <div className="text-4xl mb-2">📄</div> {/* Replace with actual icon */}
        <a href="#" className="font-bold">Apply Now</a>
      </div>

      {/* Download Brochure Section */}
      <div className="flex flex-col items-center hover:underline cursor-pointer">
        <div className="text-4xl mb-2">📘</div> {/* Replace with actual icon */}
        <a href="#" className="font-bold">Download Brochure</a>
      </div>
    </div>
  );
};

export default Start;
