import React from "react";
import img from "../../../src/assets/background.jpg";
import img2 from "../../../src/assets/student.png";
function Thirdpage(){
    return(<>
    <div
              className={`text-center px-20 py-19 text-white  bg-no-repeat bg-center h-75 flex justify-around items-center `}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className=" max-w-3xl mx-auto p-6 ">
                <h1 className="text-4xl font-extrabold text-white mb-6 text-center pr-20 sm:text-left">
                  Introducing the Young <br />
                  Innovator Internship Challenge
                </h1>
    
                <h4 className="text-lg text-white leading-relaxed mb-6 text-center sm:text-left ">
                  A one-of-a-kind internship challenge that rewards you for <br />
                  learning and improving. Designed exclusively for <br/>
                   engineering, BCA, MCA, ,B.Tech,BE,or any  
                   graduation <br/> students, this internship programme will <br />
                  take students through ten gamified challenges. Clear <br />
                  each level with guidance from industry leaders to win <br />
                  Scaler Coins and redeem them to get prizes like Xbox, <br />
                  smartwatches, SST merchandise, and more.
                </h4>
              </div>
    
              <div className="flex items-center">
                <img
                  src={img2}
                  alt=""
                  // style={{ width: "300px", height: "300px" }}
                  className="text-4xl font-extrabold text-white mb-6 text-center rounded-lg w-[395px] h-[300px] pr-[51px]"
                />
              </div>
            </div>
    </>)
}
export default Thirdpage;