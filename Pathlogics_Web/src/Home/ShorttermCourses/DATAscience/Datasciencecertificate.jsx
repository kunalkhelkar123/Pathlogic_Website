// import React from "react";
// import certificate from "../../../assets/certificate.jpg";
// import { Link } from "react-router-dom";

// export default function CertificateBanner() {
//   return (
//    <div className="min-h-screen bg-white flex items-center justify-center px-2 py-6">
//   <div className="bg-white p-6 sm:p-10 md:p-16 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
    
//     {/* Left Section: Text Content */}
//     <div className="md:w-1/2 text-center md:text-left">
//       <p className="text-gray-600 text-sm font-semibold mb-2">
//         Pathlogics Certificate
//       </p>
//       <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-snug mb-4">
//         Industry Recognized Data Science with Python Certification
//       </h3>
//       <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
//         Upon successful completion of the Data Science with Python course at Pathlogics, you’ll earn a Data Science Certification that showcases your expertise in data analysis, machine learning, and Python programming. This certification is a testament to the practical skills you've developed through hands-on experience, solving real-world problems, and building data models.
//         <br /><br />
//         We celebrate each batch with a certification ceremony, acknowledging your readiness to excel in the data science field. The Data Science Certification course not only adds value to your resume but also gives you a significant advantage in the competitive job market, showing to potential employers that you are prepared to apply Python-driven data science solutions in real business environments.
//       </p>
//       <Link to="/QuickEnquiry">
//         <button className="mt-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-600 transition">
//           Inquire Now →
//         </button>
//       </Link>
//     </div>

//     {/* Right Section: Certificate Image */}
//     <div className="md:w-1/2 flex justify-center">
//       <img
//         src={certificate}
//         alt="Certificate Preview"
//         className="w-[300px] sm:w-[320px] md:w-[500px] lg:w-[500px] border-2 rounded-md shadow-lg"
//       />
//     </div>
//   </div>
// </div>

//   );
// }



import React from "react";
import certificate from "../../../assets/certificate.jpg";
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
            Industry Recognized Data Science with Python Certification
          </h3>
          <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
            Upon successful completion of the Data Science with Python course at Pathlogics, you’ll earn a Data Science Certification that showcases your expertise in data analysis, machine learning, and Python programming. This certification is a testament to the practical skills you've developed through hands-on experience, solving real-world problems, and building data models.
             <br /><br />
           We celebrate each batch with a certification ceremony, acknowledging your readiness to excel in the data science field. The Data Science Certification course not only adds value to your resume but also gives you a significant advantage in the competitive job market, showing to potential employers that you are prepared to apply Python-driven data science solutions in real business environments.
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