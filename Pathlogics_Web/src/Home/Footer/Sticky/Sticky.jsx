import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaArrowUp, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Sticky() {
  // Function to scroll to the top
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle chat functionality (this can be integrated with a chat service like WhatsApp)
  const handleChatClick = () => {
    window.open('https://wa.me/+917364036464', '_blank'); // Replace 'yourNumber' with actual WhatsApp number
  };

  return (
    <>
      {/* Sticky Sidebar */}
      <div className="fixed right-2 bottom-16 flex flex-col items-end z-20 space-y-2">

        {/* Social Media Buttons (hidden on mobile, shown on sm and above) */}


        {/* Action Buttons */}
        <div className="flex flex-col space-y-1">
          {/* Scroll to Top Button in the bottom corner */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 sm:w-10 sm:h-10 fixed bottom-4 right-4 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors z-30"
          >
            <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>


          {/* Quick Enquiry Button */}
          <button className="bg-orange-500 text-white py-1 px-4 sm:py-2 sm:px-4 rounded-l-full flex items-center hover:bg-orange-600 transition-colors" onClick={() => navigate('/quickenquiry')}>
            <span className="text-xs sm:text-base mr-1 sm:mr-2">Quick Enquiry</span>
            <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>


          {/* Chat Button */}
          <button
            onClick={handleChatClick}
            className="bg-green-500 text-white py-1 px-4 sm:py-2 sm:px-4 rounded-l-full flex items-center hover:bg-green-600 transition-colors"
          >
            <span className="text-xs sm:text-base mr-1 sm:mr-2">Chat with us</span>
            <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>

          {/* Apply Online Button
          <button className="bg-orange-300 text-white py-1 px-4 sm:py-2 sm:px-4 rounded-l-full flex items-center hover:bg-gray-800 transition-colors">
            <span className="text-xs sm:text-base mr-1 sm:mr-2">Apply Online</span>
            <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
          </button> */}


        </div>
      </div>
    </>
  );
}
