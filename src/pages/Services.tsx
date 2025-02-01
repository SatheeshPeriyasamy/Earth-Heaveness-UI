import React from 'react';
import { BarChart3, TreePine, FileCheck, LineChart, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: 'ESG Strategy Development',
    description: 'Comprehensive ESG strategy development aligned with your business objectives and stakeholder expectations.',
    features: ['Materiality Assessment', 'Stakeholder Engagement', 'Goal Setting', 'Implementation Roadmap']
  },
  {
    icon: <TreePine className="h-8 w-8 text-green-600" />,
    title: 'Carbon Footprint Management',
    description: 'Measure, track, and reduce your organization\'s carbon footprint with our expert guidance.',
    features: ['Emissions Calculation', 'Reduction Strategies', 'Offset Programs', 'Progress Tracking']
  },
  {
    icon: <FileCheck className="h-8 w-8 text-green-600" />,
    title: 'ESG Compliance',
    description: 'Stay compliant with evolving ESG regulations and reporting requirements.',
    features: ['Regulatory Analysis', 'Compliance Assessment', 'Risk Management', 'Audit Support']
  },
  {
    icon: <LineChart className="h-8 w-8 text-green-600" />,
    title: 'Sustainability Reporting',
    description: 'Create comprehensive sustainability reports that showcase your ESG initiatives and progress.',
    features: ['GRI Standards', 'SASB Framework', 'TCFD Alignment', 'Impact Measurement']
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-green-600" />,
    title: 'Supply Chain Sustainability',
    description: 'Optimize your supply chain for sustainability and responsible sourcing.',
    features: ['Supplier Assessment', 'Risk Evaluation', 'Performance Monitoring', 'Improvement Programs']
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive ESG solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;