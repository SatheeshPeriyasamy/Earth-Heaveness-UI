import React from 'react';
import { Award, Users, Target, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-xl text-gray-600">
              Leading the way in sustainable business transformation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Earthy Heaveness, we're committed to helping organizations navigate the complex landscape of environmental, social, and governance challenges. Our mission is to accelerate the transition to a sustainable future by providing expert guidance and innovative solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Excellence</h3>
                <p className="text-gray-600">Industry-leading expertise and service quality</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Target className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Impact</h3>
                <p className="text-gray-600">Measurable results and lasting change</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Collaboration</h3>
                <p className="text-gray-600">Partnership-driven approach</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Sustainability</h3>
                <p className="text-gray-600">Environmental stewardship</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Team Meeting"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
                bio: '15+ years of sustainability consulting experience'
              },
              {
                name: 'Michael Chen',
                role: 'Head of ESG Strategy',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                bio: 'Former UN sustainable development advisor'
              },
              {
                name: 'Emma Williams',
                role: 'Chief Sustainability Officer',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
                bio: 'Environmental science PhD, sustainability pioneer'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;