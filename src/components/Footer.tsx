import React from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-semibold">Earthy Heaveness</span>
            </div>
            <p className="mt-4 text-gray-400">
              Leading the way in sustainable business practices and ESG consulting.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/newsletters" className="text-gray-400 hover:text-white transition-colors">Newsletters</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services#esg-strategy" className="text-gray-400 hover:text-white transition-colors">ESG Strategy</a></li>
              <li><a href="/services#carbon-footprint" className="text-gray-400 hover:text-white transition-colors">Carbon Footprint</a></li>
              <li><a href="/services#sustainability" className="text-gray-400 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="/services#compliance" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="/services#reporting" className="text-gray-400 hover:text-white transition-colors">ESG Reporting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">contact@earthyheaveness.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">123 Sustainability St, Green City, 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Earthy Heaveness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;