import React from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Earthy Heaveness</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#resources" className="text-gray-700 hover:text-green-600 transition-colors">Resources</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Client Portal
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">About</a>
            <a href="#resources" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">Resources</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">Contact</a>
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md">
              Client Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;