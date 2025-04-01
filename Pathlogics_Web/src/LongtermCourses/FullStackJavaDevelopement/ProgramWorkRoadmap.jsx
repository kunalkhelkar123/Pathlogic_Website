import React from 'react';
import roadmap from "../../assets/roadmap.jpg";


export default function Accordian() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center leading-tight px-2 mb-4">
        How Does Java Full Stack Development Program Work?
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black text-center leading-relaxed sm:mb-2">
        Pathlogics’s Roadmap to Becoming a Full Stack Java Developer
      </p>
      <div className="flex justify-center">
        <img
          className="w-full max-w-4xl h-auto object-contain"
          src={roadmap}
          alt="roadmap"
        />
      </div>
    </div>
  );
}









// import React from 'react';
// import roadmap from "../../assets/roadmap.jpg";
// import roadmap1 from "../../assets/roadmap1.png";
// import roadmap2 from "../../assets/roadmap2.png";
// import roadmap3 from "../../assets/roadmap3.png";
// import roadmap4 from "../../assets/roadmap4.png";

// export default function Accordian() {
//   return (
//     <div className="px-4 py-6">
//       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center leading-tight px-2 mb-4">
//         How Does Java Full Stack Development Program Work?
//       </h2>
//       <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black text-center leading-relaxed sm:mb-2">
//         Pathlogics’s Roadmap to Becoming a Full Stack Java Developer
//       </p>

//       {/* Desktop View */}
//       <div className="hidden md:flex justify-center">
//         <img
//           className="w-full max-w-4xl h-auto object-contain"
//           src={roadmap}
//           alt="roadmap"
//         />
//       </div>

//       {/* Mobile View */}
//       <div className="flex flex-col md:hidden">
//         <img className="w-full h-auto object-contain" src={roadmap1} alt="roadmap" />
//         <img className="w-full h-auto object-contain" src={roadmap2} alt="roadmap" />
//         <img className="w-full h-auto object-contain" src={roadmap3} alt="roadmap" />
//         <img className="w-full h-auto object-contain" src={roadmap4} alt="roadmap" />
//       </div>
//     </div>
//   );
// }