import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaArrowUp, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-4 px-4 bg-opacity-90 relative">
      {/* Background world map pattern */}
      {/*<div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=World+Map+Pattern')] opacity-10 -z-0"></div>*/}
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Baner Column */}
        <div className={`flex flex-col items-stretch justify-self-stretch gap-2`}>
          <h3 className="text-white text-xl font-semibold mb-4 pb-2 border-b-2 border-orange-500">Baner</h3>
          <p className="text-justify mb-2 md:mb-10">Office Number 203, Mont Vert Spectra, Pallod Farms, Baner, Pune, Maharashtra 411045</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>
              <Link to={`tel:+917364036464`}>+91 7364036464</Link>
            </span>
          </div>
          {/* <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>040 23 73 6669</span>
          </div> */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span><Link to={`mailto:info@pathlogics.in`}>info@pathlogics.in</Link></span>
          </div>
          
        </div>

        {/* Katraj Column */}
        <div className={`flex flex-col items-stretch justify-between gap-2`}>
          <h3 className="text-white text-xl font-semibold mb-4 pb-2 border-b-2 border-orange-500">Katraj</h3>
          <p className="text-justify mb-2">Sr. No. 30/2/31, 3rd Floor, Vyankatesh Developer Above ,Bank of Baroda, Dhankawadi, Corner, Balaji Nagar, Katraj, Pune 411043</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span><Link to={`tel:+917364036464`}>+91 7364036464</Link></span>
          </div>
          {/* <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>080 26546474</span>
          </div> */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span><Link to={`mailto:info@pathlogics.in`}>info@pathlogics.in</Link></span>
          </div>
        </div>

        {/* Chennai Column */}
        <div className={`flex flex-col items-stretch justify-between gap-2`}>
          <h3 className="text-white text-xl font-semibold mb-4 pb-2 border-b-2 border-orange-500">Narhe </h3>
          <p className="text-justify mb-2">5th floor Dangat Patil Empire Near, Landmark Navale Bridge, above Hotel Shivsagar, Vadagaon Budruk Pune 411041.</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span><Link to={`tel:+917364036464`}>+91 7364036464</Link></span>
          </div>
          {/* <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>044 24543969</span>
          </div> */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span><Link to={`mailto:info@pathlogics.in`}>info@pathlogics.in</Link></span>
          </div>
         
        </div>

        {/* Company Column */}
        <div className={`flex flex-col items-stretch justify-start gap-2`}>
          <h3 className="text-white text-xl font-semibold mb-4 pb-2 border-b-2 border-orange-500">Company</h3>
          <ul className="space-y-2">
            <li><Link to={`/`} className={`hover:text-orange-500`} >Home</Link></li>
            <li><Link to={`/Aboutus`} className={`hover:text-orange-500 capitalize`} >About Us</Link></li>
            <li><Link to={`/QuickEnquiry`} className={`hover:text-orange-500 capitalize`} >Contact Us</Link></li>
            <li><Link to={`/fullstack`} className={`hover:text-orange-500 capitalize`} >Full Stack Development</Link></li>
            <li><Link to={`/workspace`} className={`hover:text-orange-500 capitalize`} >Workshops</Link></li>
            {/*<li><a href="#" className="hover:text-orange-500">About Pathlogics Technologies</a></li>*/}
            {/*<li><a href="#" className="hover:text-orange-500">Careers</a></li>*/}
            {/* <li><a href="#" className="hover:text-orange-500">Testimonials</a></li> */}
            {/* <li><a href="#" className="hover:text-orange-500">Gallery</a></li> */}
            {/* <li><a href="#" className="hover:text-orange-500">FAQ's</a></li> */}
            {/* <li><a href="#" className="hover:text-orange-500">Policies</a></li> */}
            {/* <li><a href="#" className="hover:text-orange-500">Blog</a></li> */}
            {/*<li><a href="#" className="hover:text-orange-500">Contact Us</a></li>*/}
            {/* <li><a href="#" className="hover:text-orange-500">Site Map</a></li> */}
          </ul>
        </div>
      </div>

      <div className={`container w-full mx-auto mt-8`}>
          <h3 className="text-white text-xl font-semibold mb-4 pb-2 border-b-2 border-orange-500">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to={`https://www.linkedin.com/company/pathlogics-technologies/`}
                  target={`_blank`}
                  className={`text-gray-300 hover:text-orange-500`} >
              <FaLinkedin size={24} />
            </Link>
            <Link to={`https://www.facebook.com/pathlogics`}
                  target={`_blank`}
                  className={`text-gray-300 hover:text-orange-500`} >
              <FaFacebook size={24} />
            </Link>
            <Link to={`https://x.com/pathlogics`}
                  target={`_blank`}
                  className={`text-gray-300 hover:text-orange-500`} >
              <FaTwitter size={24} />
            </Link>
            <Link to={`https://www.instagram.com/pathlogics`}
                  target={`_blank`}
                  className={`text-gray-300 hover:text-orange-500`} >
              <FaInstagram size={24} />
            </Link>
            {/*<a href="https://www.linkedin.com/company/pathlogics-technologies/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">*/}
            {/*  <FaLinkedin size={24} />*/}
            {/*</a>*/}
            {/*<a href="https://www.facebook.com/pathlogics" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">*/}
            {/*  <FaFacebook size={24} />*/}
            {/*</a>*/}
            {/*<a href="https://x.com/pathlogics" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">*/}
            {/*  <FaTwitter size={24} />*/}
            {/*</a>*/}
            {/*<a href="https://www.instagram.com/pathlogics" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500">*/}
            {/*  <FaInstagram size={24} />*/}
            {/*</a>*/}
          </div>
      </div>

      <div className={`z-10`}>
        <p className="text-sm text-center text-gray-400 mt-2 mb-0">© {new Date().getFullYear()} <Link to={`/`} className={`text-gray-300 hover:text-orange-500`} >Pathlogics Technologies</Link>. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;