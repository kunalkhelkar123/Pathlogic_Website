// import React from 'react'

// function Areas() {
//   return (
//     <div className="space-y-6 bg- mx-auto w-[80vw] pt-[70px] pr-[10px] px-2 py-8">
//                     <p className="text-base text-center leading-7 font-semibold text-black-600 ">
//                     <h1 className="text-center " >ARE YOU LOCATED IN ANY OF THESE AREAS IN PUNE ?</h1>  
//                     <h3 className="text-center">You can conviniently travel to PathLogics if you are located in any of these areas.</h3>
//                     Baner, Katraj, Narhe, JM Road, Hinjewadi, Wakad, Shivaji Nagar, Kothrud, Pashan, Bavdhan, Aundh, Karve Nagar, Warje.
//                     <h3 className="text-center">We have a lot of students from these areas in Pune.</h3>

//                     PathLogics Technologies is the best IT Training Institute in Pune.
//                     </p> 
//                   </div>
//   )
// }

// export default Areas;

import React from 'react';

function Areas() {
  return (
    <div className="bg-gradient-to-r from-orange-200 to-orange-500 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-gray-800">
          ARE YOU LOCATED IN ANY OF THESE AREAS IN PUNE?
        </h1>
        <h3 className="text-lg text-gray-700">
          You can conveniently travel to{' '}
          <span className="text-orange-600 font-semibold"> PathLogics</span> if
          you are located in any of these areas.
        </h3>

        <div className="bg-blue-50 border-l-4 p-4 rounded-lg shadow-md">
          <p className="text-gray-800 font-medium">
            Baner, Katraj, Narhe, JM Road, Hinjewadi, Wakad, Shivaji Nagar,
            Kothrud, Pashan, Bavdhan, Aundh, Karve Nagar, Warje.
          </p>
        </div>

        {/* <h3 className="text-lg text-gray-700">
          We have a lot of students from these areas in Pune.
        </h3> */}

        <p className="text-xl font-semibold text-orange-600">
          PathLogics Technologies is the <span className="text-gray">best IT Training Institute in Pune.</span>
        </p>
      </div>
    </div>
  );
}

export default Areas;
