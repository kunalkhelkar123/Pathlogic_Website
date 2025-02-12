import React from 'react'
import { Link } from "react-router-dom"

function LetsConnect() {
  return (
    <div className="space-y-4 p-9 mx-auto  pt-[70px] bg-gradient-to-r from-orange-200 to-orange-500 pr-[10px] flex flex-col items-center justify-center">
              <div className="w-[100vw]">< div className="text-center text-base text-center leading-7 font-bold text-black-600 text-lg"> LETS CONNECT...</div>
              <h3 className="text-center text-2xl text-center leading-7 font-bold text-black-600">Get Trained and Get Hired!!</h3>
              </div>
              <div className="w-[100vw] p-2 flex justify-center item-center">
                <Link to="/QuickEnquiry">
              <button className=" bg-orange-600 hover:bg-orange-700 flex justify-center items-center rounded-[5px] text-base text-center leading-7 font-semibold text-white py-2 px-2">Are You Interested ? </button>
              </Link></div>
            </div>
  )
}

export default LetsConnect;