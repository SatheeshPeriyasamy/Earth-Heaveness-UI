import React from 'react';
import { ArrowRight, Award, Users, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Business with
              <span className="text-green-600"> Sustainable ESG Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Navigate the future of sustainable business with our expert ESG consulting services.
              We help organizations build resilient, sustainable, and profitable futures.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-green-600" />
                  <span className="ml-2 font-semibold text-gray-900">20+ Years</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Industry Experience</p>
              </div>
              <div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-green-600" />
                  <span className="ml-2 font-semibold text-gray-900">500+</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Clients Worldwide</p>
              </div>
              <div>
                <div className="flex items-center">
                  <BarChart className="h-6 w-6 text-green-600" />
                  <span className="ml-2 font-semibold text-gray-900">95%</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Sustainable Business"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900">ISO Certified</p>
                  <p className="text-sm text-gray-600">ESG Consulting Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;