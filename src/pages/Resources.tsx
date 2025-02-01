import React from 'react';
import { BookOpen, Download, FileText, Video, Newspaper } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
            <p className="mt-4 text-xl text-gray-600">
              Expert insights and tools for your ESG journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="h-8 w-8 text-green-600" />,
              title: 'ESG Guides',
              description: 'Comprehensive guides on ESG implementation and best practices',
              items: [
                'ESG Implementation Handbook',
                'Sustainability Metrics Guide',
                'Carbon Footprint 101',
                'ESG Reporting Templates'
              ]
            },
            {
              icon: <FileText className="h-8 w-8 text-green-600" />,
              title: 'Case Studies',
              description: 'Real-world examples of successful ESG transformations',
              items: [
                'Tech Sector Carbon Reduction',
                'Supply Chain Optimization',
                'Renewable Energy Transition',
                'Social Impact Programs'
              ]
            },
            {
              icon: <Video className="h-8 w-8 text-green-600" />,
              title: 'Webinars',
              description: 'Expert-led sessions on key ESG topics',
              items: [
                'ESG Strategy Development',
                'Climate Risk Assessment',
                'Stakeholder Engagement',
                'ESG Data Management'
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <Download className="h-5 w-5 text-green-600 mr-2" />
                    <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'The Future of ESG Reporting',
                date: 'March 15, 2024',
                category: 'Trends',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
              },
              {
                title: 'Sustainable Supply Chain Strategies',
                date: 'March 10, 2024',
                category: 'Best Practices',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Newspaper className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-green-600">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;