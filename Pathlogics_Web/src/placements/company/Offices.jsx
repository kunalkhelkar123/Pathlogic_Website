import React from "react";
import company1 from '../../assets/company1.jpg';
import company2 from '../../assets/company2.jpg';
import company3 from '../../assets/company3.jpg';
import company4 from '../../assets/company4.jpg';
import company5 from '../../assets/company5.jpg';
import company6 from '../../assets/company6.jpg';

function Offices() {
  const companies = [
    { name: "L&T Technology Services", count: 409, logo: company1 },
    { name: "AMI", count: 332, logo: company2 },
    { name: "BOSCH", count: 382, logo: company3 },
    { name: "SAFRAN", count: 302, logo: company4 },
    { name: "Delphi Technologies", count: 274, logo: company5 },
    { name: "HCL", count: 280, logo: company6 },
    { name: "UST Global", count: 300, logo: company1 },
    { name: "ZF", count: 301, logo: company2 },
    { name: "LG Soft India", count: 171, logo: company3 },
    { name: "VVDN Technologies", count: 150, logo: company4 },
    { name: "Wipro", count: 138, logo: company5 },
    { name: "Hyundai MOBIS", count: 154, logo: company6 },
    { name: "DANLAW", count: 134, logo: company1 },
    { name: "Capgemini", count: 286, logo: company2 },
    { name: "APTIV", count: 164, logo: company3 },
    { name: "Brigosha Technologies", count: 193, logo: company4 }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Companies that trusted us in Hiring & Training
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between h-24">
                <div className="flex-1 p-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-24 bg-orange-500 h-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{company.count}</span>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {company.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offices;
