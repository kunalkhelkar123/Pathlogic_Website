// import React from "react";
// function Fifthpage(){
//     return(<>
//     {/* <div className="bg-white py-16 px-6 md:px-20"> */}
//     <div class="pl-[78px] pr-[78px]">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-4 pt-12 animate-fadeIn">
//         The Ten Exciting Challenges
//       </h1>
//       <p className="text-center text-gray-600 mb-12">
//         Each challenge will teach an important entrepreneurial skill to the interns. <br />
//         Successfully clearing each challenge unlocks rewards for them.
//       </p>

//       {/* Challenges */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* 1st Month */}
//         <div className="pl-[142px]">
//           <h2 className="text-lg font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
//             1<sup>st</sup> Phase
//           </h2>
//           <ul className="space-y-4">
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Artificial Intelligence for Startups
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Build a Personal Brand
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               No-Code Website Building
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Ace the Art of Selling
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Develop a Discord Bot
//             </li>
//           </ul>
//         </div>

//         {/* 2nd Month */}
//         <div>
//           <h2 className="text-lg font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
//             2<sup>nd</sup> Phase
//           </h2>
//           <ul className="space-y-4">
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Learn Referral Marketing
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Master Social Media Marketing
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Build a Collaborative Community
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               Build Chrome Plugins
//             </li>
//             <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer">
//               How to Become a Leader?
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     </>)
// }
// export default Fifthpage;


//**************************************************************************************************************************** */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Fifthpage() {
  useEffect(() => {
    
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <>
      <div className="pl-[78px] pr-[78px] bg-teal-800 pb-[91px] m-[90px] mt-0 ">
        
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-black mb-4 pt-12"
          data-aos="fade-up"
        >
          The Ten Exciting Challenges.
        </h1>
        <p
          className="text-center text-white mb-12"
          data-aos="fade-up"
          data-aos-delay="200"

        >
          Each challenge will teach an important entrepreneurial skill to the
          interns. <br />
          Successfully clearing each challenge unlocks rewards for them.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="pl-[142px]" data-aos="fade-right">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-blue-600 inline-block">
              1<sup>st</sup> Phase
            </h2>
            <ul className="space-y-4">
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Artificial Intelligence for Startups.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Build a Personal Brand.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                No-Code Website Building.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Ace the Art of Selling.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Develop a Discord Bot.
              </li>
            </ul>
          </div>

          {/* 2nd Month */}
          <div data-aos="fade-left">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-blue-600 inline-block">
              2<sup>nd</sup> Phase
            </h2>
            <ul className="space-y-4">
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Learn Referral Marketing.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Master Social Media Marketing.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Build a Collaborative Community.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Build Chrome Plugins.
              </li>
              <li
                className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px] hover:bg-orange-600 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                How to Become a Leader?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fifthpage;
