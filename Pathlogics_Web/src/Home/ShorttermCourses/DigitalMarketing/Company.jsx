import React from 'react';
import company1 from '../../../assets/company1.jpg';
import company2 from '../../../assets/company2.jpg';
import company3 from '../../../assets/company3.jpg';
import company4 from '../../../assets/company4.jpg';
import company5 from '../../../assets/company5.jpg';
import company6 from '../../../assets/company6.jpg';


const Company = () => {
  const companies = [
    { name: 'Whirlpool', logo: company1 },
    { name: 'Wipro', logo: company2 },
    { name: 'LG Soft India', logo: company3 },
    { name: 'Tech Mahindra', logo: company4 },
    { name: 'Tata ELXSI', logo: company5 },
    { name: 'TISMO', logo: company6 },
    { name: 'Tanla', logo: company2 },
    { name: 'Pathlogic', logo: company1},
    { name: 'VVDN Technologies', logo: company6 },
    { name: 'Value Labs', logo: company3 },
    { name: 'Synopsys', logo: company5 },
    { name: 'Sony', logo: company4 },
    { name: 'Xilinx', logo: company2 },
    { name: 'Voxta', logo: company6 },
    { name: 'Siemens', logo: company4 },
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
                //   alt={${company.name} logo}
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;