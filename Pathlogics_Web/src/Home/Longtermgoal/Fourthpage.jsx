import React from "react";
import img3 from "../../../src/assets/xbox.png";
import img4 from "../../../src/assets/Official.png";
import img5 from "../../../src/assets/smartwatch.png";
import img6 from "../../../src/assets/voucher.png";
import img8 from "../../../src/assets/img8.png";
import img9 from "../../../src/assets/img9.png";
function Fourthpage() {
  return (
    <>
      <div className="text-center  text-white  bg-no-repeat bg-center  flex justify-around items-center  bg-Orange px-4 sm:px-6 lg:px-8  ">
        {/* text-center px-8 py-16 text-white  bg-no-repeat bg-center    flex justify-around items-center bg-black */}
        <div class=" bg-black px-[78px] py-0">
         
          <h2 className="text-3xl font-bold mb-4 p-16">Rewards and Recognition</h2>
          <p className="bg-orange-500 inline-block px-4 py-2 rounded-md text-white text-lg">
            During the Internship
          </p>
          {/* <p className="mt-4 text-gray-300">
            Interns will earn SCALER COINS for each completed <br />
            challenge, redeemable for rewards such as
          </p> */}

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src={img3} alt="Xbox" className="mb-4" />
              <p className="text-lg font-semibold">Xbox</p>
            </div>

            
            <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src={img4} 
                alt="Official SST Merchandise"
                className="mb-4"
              />
              <p className="text-lg font-semibold">Official SST Merchandise</p>
            </div>

            
            <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center  scale-100 ">
              <img
                src={img5} 
                alt="Smartwatch"
                className="mb-4"
              />
              <p className="text-lg font-semibold">Smartwatch</p>
            </div>

          
            <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src={img6} alt="Vouchers from Top Brands" className="mb-4" />
              <p className="text-lg font-semibold">Vouchers from Top Brands</p>
            </div>
          </div>

          <div className="bg-orange bg-no-repeat bg-center h-auto py-20 px-10 text-white ">
            <div className="text-center max-w-5xl mx-auto">
              
              <p className="bg-orange-500 inline-block px-6 py-3 rounded-md text-lg font-medium mb-12">
              Post the Internship
              </p>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              
                <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
                  <img
                    src={img8}
                    alt="Official SST Merchandise"
                    className="mb-4 w-32 h-32 object-contain"
                  />
                  <p className="text-center text-lg font-semibold">
                    A prestigious Certificate from Pathlogics Technology
                  </p>
                </div>

             
                <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
                  <img
                    src={img9}
                    alt="Smartwatch"
                    className="mb-4 w-32 h-32 object-contain"
                  />
                  <p className="text-center text-lg font-semibold">
                    Top performers earn a Letter of Recommendation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fourthpage;
