import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (

    <>
      <div className="bg-gray-900 text-white px-6 py-8 flex flex-col md:px-20 md:py-12">
        {/* Text and Email Subscription in Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <p className="text-lg font-bold text-center md:text-left md:w-2/3">
            Join our Linkedin Newsletter for IT Insights & Updates
          </p>

          {/* Email Subscription Input */}

          <div className="mt-4 flex   justify-start md:justify-start">
            <Link target="_blank" to="https://www.linkedin.com/company/pathlogics-technologies/">
            
            <button className="bg-blue-500 text-white   sm:px-4 sm:py-2 sm:mr-36 p-2  flex items-start gap-2 transition border border-teal-600 bg-teal-600  rounded-md hover:bg-teal-800">
              {/* px-4 sm:px-6 py-2 sm:py-3 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition */}
              Let’s Connect on Linkedin <FaPaperPlane />
            </button></Link>

          </div>


        </div>
        <div>





          {/* //////////// */}


          {/*   */}
        </div>

        {/* LinkedIn Button Below Text */}



      </div>


      <div>


        
      </div>
    </>
  );
}
