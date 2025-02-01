import React from 'react';
import { Building2 } from 'lucide-react';

const TrustedBy = () => {
  const companies = [
    { name: 'TechCorp', icon: <Building2 className="h-8 w-8 text-gray-400" /> },
    { name: 'EcoSystems', icon: <Building2 className="h-8 w-8 text-gray-400" /> },
    { name: 'GreenTech', icon: <Building2 className="h-8 w-8 text-gray-400" /> },
    { name: 'SustainCo', icon: <Building2 className="h-8 w-8 text-gray-400" /> },
    { name: 'FutureEnergy', icon: <Building2 className="h-8 w-8 text-gray-400" /> },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 tracking-wide uppercase">
          Trusted by Industry Leaders
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                {company.icon}
                <span className="mt-2 text-sm text-gray-500">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;