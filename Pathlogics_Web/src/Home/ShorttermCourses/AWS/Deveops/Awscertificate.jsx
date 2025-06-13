// import React from "react";
// import certificate from "../../../../assets/certificate.jpg";
// import { Link } from "react-router-dom";

// export default function CertificateBanner() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 rounded-lg shadow-lg">
//       {/* Left Section: Text Content */}
//       <div className="md:w-1/2">
//         <p className="text-gray-600 text-sm font-semibold">
//           Pathlogics Certificate
//         </p>
//         <h3 className="text-2xl font-extrabold text-black mt-2">
//       Industry Recognized  AWS DevOps Certification 



//         </h3>
//         <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
   
// Upon completing the AWS DevOps course at Pathlogics, you'll receive the AWS DevOps Certification, a clear recognition of your skills in cloud automation, CI/CD pipelines, and AWS services. This certification reflects the practical experience you've gained while working on real-world projects, making you ready to take on exciting roles in the cloud computing world.

// At Pathlogics, we celebrate each milestone of your journey. Our certification ceremony is a moment to acknowledge your growth, hard work, and readiness to step confidently into the world of AWS DevOps. with the AWS DevOps Professional Certification, you’ll have even more opportunities to advance your career in the thriving cloud space. We're with you every step of the way, helping you unlock your potential in the world of AWS DevOps! </p>
//         <Link to="/QuickEnquiry">
//           <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
//             Inquire Now →
//           </button>
//         </Link>
//       </div>

//       {/* Right Section: Certificate Image */}
//       <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
//         <img
//           src={certificate}
//           alt="Certificate Preview"
//           className="w-full max-w-md border-2 rounded-md"
//         />
//       </div>
//     </div>
//   );
// }



import React from "react";
import certificate from "../../../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function AdvJavaCertifications() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10 ">
      <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-10 rounded-lg shadow-lg gap-8">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm font-semibold">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized  AWS DevOps Certification 
          </h3>
          <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
            Upon completing the AWS DevOps course at Pathlogics, you'll receive the AWS DevOps Certification, a clear recognition of your skills in cloud automation, CI/CD pipelines, and AWS services. This certification reflects the practical experience you've gained while working on real-world projects, making you ready to take on exciting roles in the cloud computing world.

 At Pathlogics, we celebrate each milestone of your journey. Our certification ceremony is a moment to acknowledge your growth, hard work, and readiness to step confidently into the world of AWS DevOps. with the AWS DevOps Professional Certification, you’ll have even more opportunities to advance your career in the thriving cloud space. We're with you every step of the way, helping you unlock your potential in the world of AWS DevOps!
         </p>
          <Link to="/QuickEnquiry">
            <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
              Inquire Now →
            </button>
          </Link>
        </div>

        {/* Right Section: Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={certificate}
            alt="Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

