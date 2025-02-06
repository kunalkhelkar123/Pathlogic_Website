import React from "react";
function Fifthpage(){
    return(<>
    {/* <div className="bg-white py-16 px-6 md:px-20"> */}
    <div class="px-[78px] py-0">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-4 pt-12">
        The Ten Exciting Challenges
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Each challenge will teach an important entrepreneurial skill to the interns. <br />
        Successfully clearing each challenge unlocks rewards for them.
      </p>

      {/* Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 1st Month */}
        <div className="pl-[142px]">
          <h2 className="text-lg font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
            1<sup>st</sup> Phase
          </h2>
          <ul className="space-y-4">
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Artificial Intelligence for Startups
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Build a Personal Brand
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              No-Code Website Building
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Ace the Art of Selling
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Develop a Discord Bot
            </li>
          </ul>
        </div>

        {/* 2nd Month */}
        <div>
          <h2 className="text-lg font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
            2<sup>nd</sup> Phase
          </h2>
          <ul className="space-y-4">
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Learn Referral Marketing
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Master Social Media Marketing
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Build a Collaborative Community
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              Build Chrome Plugins
            </li>
            <li className="bg-orange-500 text-white rounded-md px-4 py-3 shadow-md flex items-center w-[396px]">
              How to Become a Leader?
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>)
}
export default Fifthpage;