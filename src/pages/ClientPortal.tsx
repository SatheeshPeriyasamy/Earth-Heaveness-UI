import React, { useState } from 'react';
import { Lock, User, LineChart, FileText, MessageSquare, Settings } from 'lucide-react';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginForm = () => (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Lock className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">Client Portal Login</h2>
      </div>
      <form className="space-y-6">
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
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-green-600 hover:text-green-500">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setIsLoggedIn(true);
          }}
          className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );

  const Dashboard = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <User className="h-12 w-12 text-green-600 bg-green-100 rounded-full p-2" />
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome back, John</h2>
            <p className="text-gray-600">Last login: March 15, 2024</p>
          </div>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          View Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Carbon Footprint</h3>
            <LineChart className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">245 tCO2e</p>
          <p className="text-sm text-green-600">-12% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">ESG Score</h3>
            <FileText className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">78/100</p>
          <p className="text-sm text-green-600">+5 points since last assessment</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Active Projects</h3>
            <Settings className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">4</p>
          <p className="text-sm text-gray-600">2 pending approval</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h3>
            <div className="space-y-4">
              {[
                { name: 'Q1 2024 ESG Report', date: 'March 15, 2024', status: 'Completed' },
                { name: 'Carbon Footprint Analysis', date: 'March 10, 2024', status: 'In Review' },
                { name: 'Sustainability Assessment', date: 'March 5, 2024', status: 'Completed' }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{report.name}</h4>
                    <p className="text-sm text-gray-600">{report.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Messages</h3>
            <div className="space-y-4">
              {[
                { sender: 'Sarah Johnson', message: 'Q1 report review completed', time: '2h ago' },
                { sender: 'ESG Team', message: 'New sustainability target set', time: '5h ago' },
                { sender: 'System', message: 'Data upload successful', time: '1d ago' }
              ].map((message, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <MessageSquare className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{message.sender}</p>
                    <p className="text-sm text-gray-600">{message.message}</p>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Client Portal</h1>
            <p className="mt-4 text-xl text-gray-600">
              Access your ESG data and reports
            </p>
          </div>
        </div>
      </div>

      {isLoggedIn ? <Dashboard /> : <LoginForm />}
    </div>
  );
};

export default ClientPortal;