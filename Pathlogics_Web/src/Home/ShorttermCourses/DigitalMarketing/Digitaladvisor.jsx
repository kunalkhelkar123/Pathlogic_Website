     import React from "react";
     import img from "../../../assets/talktoadviser.png"
     import { Link } from "react-router-dom";
     export default function Digitaladvisor() {
       return (
         <div className="relative bg-gradient-to-r from-[#001f3f] to-[#004080] text-white rounded-lg  sm:px-6 sm:mx-10 mb-8 md:px-32 flex flex-row md:flex-row items-center justify-between  shadow-lg overflow-hidden">
           {/* Grid Overlay */}
           {/* <div className="absolute inset-0 bg-grid-white/[0.1]"></div> */}
     
           {/* Left Content */}
           <div className="relative z-10 max-w-[1000px]  p-5 sm:pl-10 z-index-10 ">
             <h2 className="text-xl md:text-xl font-bold w-[200px] sm:w-full md:w-full lg:w-full">Have Any Queries, Talk To Our Advisor</h2>
             <p className="mt-3 text-gray-300 uppercase text-xs tracking-wide">
               And Get
             </p>
             <ul className="mt-2 text-gray-200 text-xs space-y-2">
               <li>✨ <span className="font-bold">Free career counseling</span></li>
               <li>✨ <span className="font-bold">Course syllabus</span></li>
               <li>✨ <span className="font-bold">Solve your queries</span></li>
             </ul>
             
             <Link to="/QuickEnquiry" ><button className="mt-5 bg-green-500 hover:bg-green-700 text-white font-semibold sm:px-6 px-2 py-2 rounded-md transition">
             Talk To Our Advisor→
             </button></Link>
           </div>
     
           {/* Right Image */}
           <div className="  ">
          
             <img
               src={img}
         
               alt="Advisor"
               className="w-[182px] z-index-30 -ml-20 mb-[-80px] sm:mb-0 md:mb-0 lg:mb-0  max-w-[1000px] md:w-42 lg:w-[234px] "
             />
           </div>
         </div>
       );
     }
     