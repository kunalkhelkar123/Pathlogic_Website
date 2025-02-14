


// import React from "react";
// import img3 from "../../../src/assets/xbox.png";
// import img4 from "../../../src/assets/Official.png";
// import img5 from "../../../src/assets/smartwatch.png";
// import img6 from "../../../src/assets/voucher.png";
// import img8 from "../../../src/assets/img8.png";
// import img9 from "../../../src/assets/img9.png";
// import { motion } from "framer-motion";

// export default function Fourthpage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-orange-700 text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center space-y-16">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-extrabold">🎉 Rewards and Recognition</h2>
//           <p className="mt-4 bg-orange-500 inline-block px-6 py-3 rounded-md text-lg font-semibold">
//             During the Internship
//           </p>
//         </motion.div>

//         {/* Rewards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { img: img3, title: "Xbox" },
//             { img: img4, title: "Official SST Merchandise" },
//             { img: img5, title: "Smartwatch" },
//             { img: img6, title: "Vouchers from Top Brands" },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center transition"
//             >
//               <img src={item.img} alt={item.title} className="mb-4 w-32 h-32 object-contain" />
//               <p className="text-lg font-semibold">{item.title}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Post-Internship Section */}
//         <div className="bg-gradient-to-br from-gray-900 to-teal-700 bg-opacity-20 py-16 px-8 rounded-xl">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <p className="bg-orange-500 inline-block px-6 py-3 rounded-md text-lg font-semibold">
//               Post the Internship
//             </p>
//           </motion.div>

//           {/* Post Internship Rewards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
//             {[
//               { img: img8, title: "A prestigious Certificate from Pathlogics Technology" },
//               { img: img9, title: "Top performers earn a Letter of Recommendation" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center transition"
//               >
//                 <img src={item.img} alt={item.title} className="mb-4 w-36 h-36 object-contain" />
//                 <p className="text-center text-lg font-semibold">{item.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import img3 from "../../../src/assets/xbox.png";
import img4 from "../../../src/assets/Official.png";
import img5 from "../../../src/assets/smartwatch.png";
import img6 from "../../../src/assets/voucher.png";
import img8 from "../../../src/assets/img8.png";
import img9 from "../../../src/assets/img9.png";
import { motion } from "framer-motion";

export default function Fourthpage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-800 to-gray-700 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg">🎉 Rewards & Recognition</h2>
          <p className="mt-4 bg-orange-600 text-white inline-block px-8 py-4 rounded-md text-lg font-semibold shadow-lg">
            During the Internship
          </p>
        </motion.div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { img: img3, title: "Xbox" },
            { img: img4, title: "Official SST Merchandise" },
            { img: img5, title: "Smartwatch" },
            { img: img6, title: "Vouchers from Top Brands" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col items-center transition backdrop-blur-md hover:shadow-2xl hover:brightness-110"
            >
              <img src={item.img} alt={item.title} className="mb-4 w-40 h-40 object-contain" />
              <p className="text-lg font-semibold text-center">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Post-Internship Section */}
        <div className="bg-gradient-to-r from-gray-800 via-teal-600 to-gray-800 bg-opacity-80 py-16 px-8 rounded-xl shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="bg-orange-600 text-white inline-block px-8 py-4 rounded-md text-lg font-semibold shadow-lg">
              Post the Internship
            </p>
          </motion.div>

          {/* Post Internship Rewards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {[
              { img: img8, title: "A prestigious Certificate from Pathlogics Technology" },
              { img: img9, title: "Top performers earn a Letter of Recommendation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col items-center transition backdrop-blur-md hover:shadow-2xl hover:brightness-110"
              >
                <img src={item.img} alt={item.title} className="mb-4 w-48 h-48 object-contain" />
                <p className="text-lg font-semibold text-center">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
