// import React from "react";
// import img3 from "../../../src/assets/xbox.png";
// import img4 from "../../../src/assets/Official.png";
// import img5 from "../../../src/assets/smartwatch.png";
// import img6 from "../../../src/assets/voucher.png";
// import img8 from "../../../src/assets/img8.png";
// import img9 from "../../../src/assets/img9.png";
// function Fourthpage() {
//   return (
//     <>
//       <div className="text-center  text-white  bg-no-repeat bg-center  flex justify-around items-center  bg-Orange px-4 sm:px-6 lg:px-8  ">
        
//         <div class=" bg-black px-[78px] py-0">
         
//           <h2 className="text-3xl font-bold mb-4 p-16">Rewards and Recognition</h2>
//           <p className="bg-orange-500 inline-block px-4 py-2 rounded-md text-white text-lg">
//             During the Internship
//           </p>
          

         
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//             <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
//               <img src={img3} alt="Xbox" className="mb-4" />
//               <p className="text-lg font-semibold">Xbox</p>
//             </div>

            
//             <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
//               <img
//                 src={img4} 
//                 alt="Official SST Merchandise"
//                 className="mb-4"
//               />
//               <p className="text-lg font-semibold">Official SST Merchandise</p>
//             </div>

            
//             <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center  scale-100 ">
//               <img
//                 src={img5} 
//                 alt="Smartwatch"
//                 className="mb-4"
//               />
//               <p className="text-lg font-semibold">Smartwatch</p>
//             </div>

          
//             <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
//               <img src={img6} alt="Vouchers from Top Brands" className="mb-4" />
//               <p className="text-lg font-semibold">Vouchers from Top Brands</p>
//             </div>
//           </div>

//           <div className="bg-orange bg-no-repeat bg-center h-auto py-20 px-10 text-white ">
//             <div className="text-center max-w-5xl mx-auto">
              
//               <p className="bg-orange-500 inline-block px-6 py-3 rounded-md text-lg font-medium mb-12">
//               Post the Internship
//               </p>

              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              
//                 <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
//                   <img
//                     src={img8}
//                     alt="Official SST Merchandise"
//                     className="mb-4 w-32 h-32 object-contain"
//                   />
//                   <p className="text-center text-lg font-semibold">
//                     A prestigious Certificate from Pathlogics Technology
//                   </p>
//                 </div>

             
//                 <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
//                   <img
//                     src={img9}
//                     alt="Smartwatch"
//                     className="mb-4 w-32 h-32 object-contain"
//                   />
//                   <p className="text-center text-lg font-semibold">
//                     Top performers earn a Letter of Recommendation
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Fourthpage;


import React, { useState } from "react";
import img3 from "../../../src/assets/xbox.png";
import img4 from "../../../src/assets/Official.png";
import img5 from "../../../src/assets/smartwatch.png";
import img6 from "../../../src/assets/voucher.png";
import img8 from "../../../src/assets/img8.png";
import img9 from "../../../src/assets/img9.png";

const rewards = [
  { img: img3, name: "Xbox", desc: "Win an Xbox as a top performer!" },
  { img: img4, name: "Official SST Merchandise", desc: "Get exclusive branded goodies!" },
  { img: img5, name: "Smartwatch", desc: "Stay on top of time with a premium smartwatch!" },
  { img: img6, name: "Vouchers from Top Brands", desc: "Exciting shopping vouchers for the best brands!" },
];

const postInternshipRewards = [
  { img: img8, name: "Prestigious Certificate", desc: "A certificate from Pathlogics Technology." },
  { img: img9, name: "Letter of Recommendation", desc: "Earn a top performer recommendation letter!" },
];

function Fourthpage() {
  const [selectedReward, setSelectedReward] = useState(null);

  return (
    <>
      <div className="text-center text-white bg-no-repeat bg-center flex justify-around items-center  px-4 sm:px-6 lg:px-8">
        {/* <div className="bg-black px-[78px] py-0"> */}
        <div className="bg-black pl-[78px] pr-[78px]">
          <h2 className="text-3xl font-bold mb-4 p-16 animate-fadeIn">Rewards and Recognition</h2>
          <p className="bg-orange-500 inline-block px-4 py-2 rounded-md text-white text-lg">During the Internship</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedReward(reward)}
              >
                <img src={reward.img} alt={reward.name} className="mb-4 w-32 h-32 object-contain" />
                <p className="text-lg font-semibold">{reward.name}</p>
              </div>
            ))}
          </div>

          {/* Post Internship Section */}
          <div className="bg-orange bg-no-repeat bg-center h-auto py-20 px-10 text-white">
            <div className="text-center max-w-5xl mx-auto">
              <p className="bg-orange-500 inline-block px-6 py-3 rounded-md text-lg font-medium mb-12">Post the Internship</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {postInternshipRewards.map((reward, index) => (
                  <div
                    key={index}
                    className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    onClick={() => setSelectedReward(reward)}
                  >
                    <img src={reward.img} alt={reward.name} className="mb-4 w-32 h-32 object-contain" />
                    <p className="text-center text-lg font-semibold">{reward.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for reward details */}
        {selectedReward && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
              <h3 className="text-xl font-semibold mb-2">{selectedReward.name}</h3>
              <img src={selectedReward.img} alt={selectedReward.name} className="mb-4 w-40 h-40 object-contain" />
              <p className="text-gray-700">{selectedReward.desc}</p>
              <button
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                onClick={() => setSelectedReward(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Fourthpage;

