import React from 'react'; 
import certificate from "../../../assets/certificate.jpg";

export default function DigitalCertificate() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
          Industry Recognized 15+ Certification in Digital Marketing
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Complete our Digital Marketing Training at Pathlogics, available both online and in-person, and receive 15+ industry-recognized certifications from global authorities like Google, HubSpot, Meta, and more.
              <br /><br />
              These certifications validate your expertise across SEO, SEM, Social Media Marketing, Email Marketing, Content Strategy, and Analytics, making you a well-rounded digital marketing professional.
              <br /><br />
              Stand out in the competitive market with credentials that boost your resume and open doors to high-paying digital roles across industries worldwide.
            </p>

            <a
              href="/Contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Inquire Now
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-500">
              <img
                src={certificate}
                alt="Digital Marketing Certification"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
