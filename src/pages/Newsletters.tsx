import React from 'react';
import { Mail, Bell, BookOpen } from 'lucide-react';

const Newsletters = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">ESG Insights Newsletter</h1>
            <p className="mt-4 text-xl text-gray-600">
              Stay updated with the latest in sustainability and ESG
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Latest Issues</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'The Rise of Sustainable Finance',
                  date: 'March 2024',
                  description: 'Exploring the latest trends in ESG investing and sustainable finance.',
                  image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80'
                },
                {
                  title: 'Carbon Markets Evolution',
                  date: 'February 2024',
                  description: 'Analysis of global carbon markets and their impact on sustainability goals.',
                  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80'
                },
                {
                  title: 'ESG Reporting Standards',
                  date: 'January 2024',
                  description: 'Updates on international ESG reporting frameworks and compliance.',
                  image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80'
                }
              ].map((issue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full md:w-48 object-cover"
                        src={issue.image}
                        alt={issue.title}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-green-600" />
                        <span className="ml-2 text-sm text-green-600">{issue.date}</span>
                      </div>
                      <a href="#" className="block mt-2">
                        <h3 className="text-xl font-semibold text-gray-900">{issue.title}</h3>
                        <p className="mt-3 text-gray-600">{issue.description}</p>
                      </a>
                      <div className="mt-4">
                        <a
                          href="#"
                          className="text-green-600 hover:text-green-700 font-medium flex items-center"
                        >
                          Read More
                          <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Bell className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get the latest ESG insights, trends, and analysis delivered to your inbox monthly.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                    Areas of Interest
                  </label>
                  <select
                    id="interests"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option>ESG Strategy</option>
                    <option>Sustainable Finance</option>
                    <option>Carbon Markets</option>
                    <option>ESG Reporting</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <Mail className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Newsletter Archives</h3>
              <div className="space-y-4">
                {['2023', '2022', '2021'].map((year, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-900 font-medium">{year}</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-6 w-6 transform group-open:-rotate-180 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 space-y-2">
                      {['December', 'November', 'October'].map((month, monthIndex) => (
                        <a
                          key={monthIndex}
                          href="#"
                          className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                        >
                          {month} {year}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;