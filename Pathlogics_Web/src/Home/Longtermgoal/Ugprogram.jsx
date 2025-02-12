import React from "react";
import img10 from "../../../src/assets/img10.png"
function Ugprogram(){
    return(<>
    <div className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-between">
      {/* Text Section */}
      {/* <div className="md:w-1/2"> */}
      <div class="px-[78px] py-0"> 
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 pt-[43px]">
          About Our 4-Year UG Programme in Computer Science
        </h1>
        <ul className="space-y-6">
          <li className="flex items-start">
            <span className="bg-yellow-400 w-2 h-8 mr-4"></span>
            <p className="text-gray-700">
              Curriculum developed & delivered by 100+ tech leaders from Google, Microsoft, Uber etc.
            </p>
          </li>
          <li className="flex items-start">
            <span className="bg-yellow-400 w-2 h-8 mr-4"></span>
            <p className="text-gray-700">
              Specialisations in new-age technologies and 1-year internship.
            </p>
          </li>
          <li className="flex items-start">
            <span className="bg-yellow-400 w-2 h-8 mr-4"></span>
            <p className="text-gray-700">
              More than 1200 partner companies for student placements.
            </p>
          </li>
          <li className="flex items-start">
            <span className="bg-yellow-400 w-2 h-8 mr-4"></span>
            <p className="text-gray-700">
              Students graduate with skills that are at par with Sr. Engineer/SDE-I.
            </p>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        <div className="grid grid-cols-2 gap-4">
          <div className=" p-4 rounded-lg">
            <img
              src={img10}
              alt="Students in discussion"
              className="rounded-lg h-[274px] pt-[35px]"
            />
          </div>
          
        </div>
        
      </div>
    </div>
    </>)
}
export default Ugprogram;