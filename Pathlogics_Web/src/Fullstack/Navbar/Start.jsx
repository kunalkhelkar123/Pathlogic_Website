import React from "react";
import brochurePDF from "./../.././assets/Brochure.pdf";


const Start = () => {
  const handleDownload = () => {
      // setShowPopup(true);
  setTimeout(() => setShowPopup(false), 3000);

  // Open in new tab
  window.open(brochurePDF, "_blank");

  // Create an invisible download link
  const link = document.createElement("a");
  link.href = brochurePDF;
  link.download = "Brochure.pdf"; // Set the file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up the DOM
};
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
        <button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-[5px]"
                type="button"
                onClick={handleDownload}
              >
                Download Brochure
              </button>
      </div>
    </div>
  );
};

export default Start;
