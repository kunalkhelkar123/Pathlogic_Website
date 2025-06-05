


// import React from "react";
// import certificate from "../../assets/certificate.jpg";
// import { Link } from "react-router-dom";

// export default function NodeCertificate() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 pb-6 md:px-12 md:pb-12 rounded-lg shadow-lg">
//       {/* Left Section: Text Content */}
//       <div className="md:w-1/2 md:pr-10">
//         <div className="pl-2">
//           <p className="text-gray-600 text-sm font-semibold">Pathlogics Certificate</p>
//           <h3 className="text-2xl font-extrabold text-black mt-2">
//             Industry Recognized Node.js Certification
//           </h3>
//           <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
//             Once you complete the <strong>Node.js Certification Course</strong> at Pathlogics, you’ll walk away with more than just knowledge. You’ll earn a recognized Node.js certificate that proves you’ve got real, hands-on skills.
//           </p>
//           <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
//             We also host a small certification ceremony at the end of each batch to celebrate your hard work and dedication. It's your moment to shine!
//           </p>
//           <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
//             This certificate isn’t just a piece of paper — it’s something you can proudly add to your resume or LinkedIn, showing the world (and future employers) that you're ready to take on real backend or full-stack projects with confidence.
//           </p>
//           <Link to="/ContactUs">
//             <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
//               Inquire Now →
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Right Section: Certificate Image */}
//       <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-start">
//         <img
//           src={certificate}
//           alt="Certificate Preview"
//           className="w-full max-w-[450px] h-auto border-2 rounded-md object-contain"
//         />
//       </div>
//     </div>
//   );
// }
import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function NodeCertificate() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 pb-6 md:px-12 md:pb-12 rounded-lg shadow-lg">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2 md:pr-10">
        <div className="pl-2">
          <p className="text-gray-600 text-sm font-semibold">Pathlogics Certificate</p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized Node.js Certification
          </h3>
          <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
            Once you complete the <strong>Node.js Certification Course</strong> at Pathlogics, you’ll walk away with more than just knowledge. You’ll earn a recognized Node.js certificate that proves you’ve got real, hands-on skills.
          </p>
          <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
            We also host a small certification ceremony at the end of each batch to celebrate your hard work and dedication. It's your moment to shine!
          </p>
          <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
            This certificate isn’t just a piece of paper — it’s something you can proudly add to your resume or LinkedIn, showing the world (and future employers) that you're ready to take on real backend or full-stack projects with confidence.
          </p>
          <Link to="/ContactUs">
            <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
              Inquire Now →
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section: Certificate Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-start pr-6 md:pr-12">
        <img
          src={certificate}
          alt="Certificate Preview"
          className="w-full max-w-[450px] h-auto border-2 rounded-md object-contain"
        />
      </div>
    </div>
  );
}
