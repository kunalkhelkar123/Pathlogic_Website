import React from 'react';
import company1 from '../../assets/company1.jpg';
import company2 from '../../assets/company2.jpg';
import company3 from '../../assets/company3.jpg';
import company4 from '../../assets/company4.jpg';
import company5 from '../../assets/company5.jpg';
import company6 from '../../assets/company6.jpg';
import company7 from  '../../assets/companies/1.png';
import company8 from  '../../assets/companies/2.png';
import company9 from  '../../assets/companies/3.png';
import company10 from '../../assets/companies/4.png';
import company11 from '../../assets/companies/5.png';
import company12 from '../../assets/companies/6.png';
import company13 from '../../assets/companies/9.png';
import company14 from '../../assets/companies/8.png';
import company15 from '../../assets/companies/10.png';
import company16 from '../../assets/companies/11.png';
import company17 from '../../assets/companies/12.png';
import company18 from '../../assets/companies/13.png';
import company19 from '../../assets/companies/14.png';
import company20 from '../../assets/companies/15.png';
import company21 from '../../assets/companies/16.png';






const Companie = () => {
  const companies = [
    { name: 'Whirlpool', logo: company1 },
    { name: 'Wipro', logo: company2 },
    { name: 'LG Soft India', logo: company3 },
    // { name: 'Tech Mahindra', logo: company4 },
    { name: 'Tata ELXSI', logo: company5 },
    
    { name: 'Siemens', logo: company7 },
    { name: 'Siemens', logo: company8 },
    { name: 'Siemens', logo: company9 },
    { name: 'Siemens', logo: company10 },
    { name: 'Siemens', logo: company11 },
    { name: 'Siemens', logo: company12 },
    { name: 'Siemens', logo: company13 },
    { name: 'Siemens', logo: company14 },
    { name: 'Siemens', logo: company15 },
    { name: 'Siemens', logo: company16 },
    { name: 'Siemens', logo: company17 },
    { name: 'Siemens', logo: company18 },
    { name: 'Siemens', logo: company19 },
    { name: 'TISMO', logo: company6 },
    { name: 'Siemens', logo: company20 },
    { name: 'Siemens', logo: company21 },




  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
          Renowned companies that recruited from us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            >
              <div className="relative w-full aspect-[3/1]">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="object-contain w-full h-full filter  hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companie;