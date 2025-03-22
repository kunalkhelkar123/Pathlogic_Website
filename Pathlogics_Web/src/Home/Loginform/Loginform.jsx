import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-gray-900 text-white px-6 py-8 flex flex-col md:px-20 md:py-12">
      {/* Text and Email Subscription in Row */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <p className="text-lg font-bold text-center md:text-left md:w-2/3">
          Join our Linkedin Newsletter for IT Insights & Updates
        </p>

        {/* Email Subscription Input */}
        <div className="flex flex-col sm:flex-row items-center border-2 border-white bg-gray-900 sm:bg-white sm:rounded-full p-2 shadow-md w-full sm:w-auto mt-4 md:mt-0">
          <FaEnvelope className="sm:text-gray-600 text-white mx-3 sm:text-xl md:text-xl lg:text-xl text-4xl" />
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-full sm:border-0 border-2 sm:w-64 rounded-full bg-white sm:bg-transparent focus:outline-none text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition mt-2 sm:mt-0 sm:ml-2">
            Subscribe <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* LinkedIn Button Below Text */}
      <div className="mt-4 flex justify-center md:justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition">
          Let’s Connect on Linkedin <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
