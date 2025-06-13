// import React from "react";

// export default function CertificationSection() {
//   return (
//     <section className="w-full py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
           
// Industry Recognized 15+ Certification in Digital Marketing

//           </h1>
//           <p className="text-lg text-gray-600 max-w-4xl mx-auto">
//           Get 15+ Globally Recognized Certificate Such Google, HubSpot, Join Digital Marketing Training In Pune With Certificates. Boost your resume and stand out in today’s competitive digital world!

//             <span className="font-semibold">
//               Digital Marketing Training In Pune With Certificate
//             </span>
//           </p>
//         </div>

//         {/* Certification Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Google Ads Certification */}
//           <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 text-center">
//             <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">A</span>
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-2">6 Google Ads Certification</h3>
//           </div>

//           {/* HubSpot Certification */}
//           <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 text-center">
//             <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
//               <div className="text-slate-800 font-bold text-lg">HubSpot</div>
//             </div>
//             <h3 className="text-xl font-bold mb-2">6 Hubspots Certification</h3>
//           </div>

//           {/* Certificate of Completion */}
//           <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 text-center">
//   <div className="w-24 h-24 border-2 border-white rounded-full mx-auto mb-6 flex items-center justify-center bg-transparent">
//     <div className="text-yellow-400 font-bold text-xs leading-tight text-center">
//       Pathlogics<br />Technology
//     </div>
//   </div>
//   <h3 className="text-xl font-bold mb-2">Certificate Of Completion</h3>
// </div>
//         </div>

//         {/* Certification Details */}
//         <div className="text-center space-y-2 text-gray-700">
//           <p>
//             <span className="font-semibold">6 Google Ads Certification :</span> Search Ads, Display Ads, Shopping Ads,
//             Video Ads, App, Measurement
//           </p>
//           <p>
//             <span className="font-semibold">6 Hubspot Certification :</span> Content Marketing, Social Media Marketing,
//             Digital Marketing, Digital Advertise, SEO, Email Marketing
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import hubspot from "../../assets/DigitalMarketing/hubspot.png"
import googleads from "../../assets/DigitalMarketing/googleads.png"
import pathlogics from "../../assets/DigitalMarketing/pathlogics.png"

export default function CertificationSection() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl  font-bold text-slate-800 mb-4">
            Industry Recognized 15+ Certification in Digital Marketing
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Get 15+ Globally Recognized Certificate Such Google, HubSpot, Join Digital Marketing Training In Pune With Certificates. Boost your resume and stand out in today’s competitive digital world!{" "}
            <span className="font-semibold">
              Digital Marketing Training In Pune With Certificate
            </span>
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Google Ads Certification */}
          <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src={googleads}
                alt="Google Ads"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">6 Google Ads Certification</h3>
          </div>

          {/* HubSpot Certification */}
          <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src={hubspot}
                alt="HubSpot"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">6 HubSpot Certifications</h3>
          </div>

          {/* Certificate of Completion */}
          <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-24 h-24 border-2 border-white rounded-full mx-auto mb-6 flex items-center justify-center bg-white">
              <img
                src={pathlogics}
                alt="Pathlogics Technology"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Certificate Of Completion</h3>
          </div>
        </div>

        {/* Certification Details */}
        <div className="text-center space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">6 Google Ads Certification:</span> Search Ads, Display Ads, Shopping Ads,
            Video Ads, App, Measurement
          </p>
          <p>
            <span className="font-semibold">6 HubSpot Certification:</span> Content Marketing, Social Media Marketing,
            Digital Marketing, Digital Advertise, SEO, Email Marketing
          </p>
        </div>
      </div>
    </section>
  );
}
