


// import React from "react";

// import tools from "../../assets/DigitalTools/tools.png"
// // import googleSearch from "../../assets/DigitalTools/googleSearch.png";
// // import googleAnalytics from "../../assets/DigitalTools/googleAnalytics.png";
// // import googleMyBusiness from "../../assets/DigitalTools/googleMyBusiness.png";
// // import mailchimp from "../../assets/DigitalTools/mailchimp.png";
// // import moz from "../../assets/DigitalTools/moz.png";
// // import semrush from "../../assets/DigitalTools/semrush.png";
// // import ahrefs from "../../assets/DigitalTools/ahrefs.png";
// // import seoptimer from "../../assets/DigitalTools/seoptimer.png";
// // import canva from "../../assets/DigitalTools/canva.png";
// // import buffer from "../../assets/DigitalTools/buffer.png";
// // import wordpress from "../../assets/DigitalTools/wordpress.png";
// // import whatsappBusiness from "../../assets/DigitalTools/whatsappBusiness.png";
// // import linkedin from "../../assets/DigitalTools/linkedin.png";
// // import youtubeStudio from "../../assets/DigitalTools/youtubeStudio.png";
// // import googleAds from "../../assets/DigitalTools/googleAds.png";

// // const logos = [
// //   { name: "Google Search Console", file: googleSearch },
// //   { name: "Google Analytics", file: googleAnalytics },
// //   { name: "Google My Business", file: googleMyBusiness },
// //   { name: "Mailchimp", file: mailchimp },
// //   { name: "Moz", file: moz },
// //   { name: "SemRush", file: semrush },
// //   { name: "Ahrefs", file: ahrefs },
// //   { name: "SEOOptimer", file: seoptimer },
// //   { name: "Canva", file: canva },
// //   { name: "Buffer", file: buffer },
// //   { name: "WordPress", file: wordpress },
// //   { name: "WhatsApp Business", file: whatsappBusiness },
// //   { name: "LinkedIn", file: linkedin },
// //   { name: "YouTube Studio", file: youtubeStudio },
// //   { name: "Google Ads", file: googleAds },
// // ];

// export default function DigitalTools() {
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
//           Master These Top Digital Marketing Tools
//         </h2>
//         <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
//           Learn the tools behind every successful campaign. From social media to SEO and ads,
//           master 50+ digital platforms that help you plan, track, and optimize every step of your marketing journey.
//         </p>

//         {/* <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
//           {logos.map((tool, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
//                 <img
//                   src={tool.file}
//                   alt={`${tool.name} logo`}
//                   title={tool.name}
//                   className="object-contain w-full h-full"
//                   loading="lazy"
//                 />
//               </div>
//               <span className="mt-2 text-sm sm:text-base text-gray-700 font-medium">
//                 {tool.name}
//               </span>
//             </div>
//           ))}
//         </div> */}

//         <img src={tools}/>

//         <a
//           href="/digital-marketing-short-term-course"
//           className=" inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white text-base font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:from-blue-700 hover:to-teal-600 transition duration-300"
//         >
//           Know More
//         </a>
//       </div>
//     </section>
//   );
// }



import React from "react";


import MarketingTools from "../../assets/DigitalMarketing/MarketingTools.png"

export default function DigitalTools() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
          Master These Top Digital Marketing Tools
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
          Learn the tools behind every successful campaign. From social media to SEO and ads,
          master 50+ digital platforms that help you plan, track, and optimize every step of your marketing journey.
        </p>

        {/* Image */}
        <div className="mt-10 mb-12 flex justify-center">
          <img
            src={MarketingTools}
            alt="Digital Marketing Tools"
            className="w-full MarketingToolsmax-w-4xl h-auto object-contain rounded-xl shadow-md"
            loading="lazy"
          />
        </div>

        {/* CTA Button */}
        <a
          href="/digital-marketing-short-term-course"
          className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white text-base font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:from-blue-700 hover:to-teal-600 transition duration-300"
        >
          Know More
        </a>
      </div>
    </section>
  );
}
