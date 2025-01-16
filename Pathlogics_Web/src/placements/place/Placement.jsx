import React from 'react';
import image from '../../assets/placement.jpg';
import { useNavigate } from 'react-router-dom';
function Placement() {
  // let backgroundImage = 'G:\Path\Path Labs\React\Newtab\newtab\src\assets\bg.png'
  const Navigate = useNavigate();
  return (
    <>
    <div  className="flex flex-col items-right justify-center h-screen text-white p-10 "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'

       
      }}>
      <div className="text-left mb-8 ">
        <h1 className="text-5xl font-bold mb-2 animate-slide-down text-white	">Placements</h1>
        <p className="text-lg font-medium animate-slide-up text-white	">
          Making students industry-ready with <br/> an application-oriented training program!
        </p>
      </div>
      <div className="flex gap-4">
        {/* <button className="px-4 py-2 bg-green-500 rounded-lg font-semibold text-white hover:bg-green-600 transform transition-transform duration-300 hover:scale-110">
          Apply Online
        </button> */}
        <button onClick={()=>Navigate('/quickenquiry')} className="px-4 py-2 bg-blue-500 rounded-lg font-semibold text-white hover:bg-blue-600 transform transition-transform duration-300 hover:scale-110">
          Quick Enquiry
        </button>
        <button className="px-4 py-2 bg-teal-500 rounded-lg font-semibold text-white hover:bg-teal-600 transform transition-transform duration-300 hover:scale-110">
          Chat with us
        </button>
      </div>
    </div>
    </>
  );
}

export default Placement;