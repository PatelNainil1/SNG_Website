import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              SNG Eco India Pvt Ltd.
            </div>
            <p className="text-sm">Leading Indian manufacturer of WPC products under the brand Green Plastwood, offering luxury, eco-friendly, and durable solutions.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/SNGECOIND"target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="https://www.linkedin.com/in/green-plastwood-a47942218"target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/green_plastwood"target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/products" className="hover:text-primary transition-colors">Products</NavLink></li>
              <li><NavLink to="/sustainability" className="hover:text-primary transition-colors">Sustainability</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-primary transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/products" className="hover:text-primary transition-colors">WPC Door Frames</NavLink></li>
              <li><NavLink to="/products" className="hover:text-primary transition-colors">WPC Solid Doors</NavLink></li>
              <li><NavLink to="/products" className="hover:text-primary transition-colors">WPC Solid Boards</NavLink></li>
              <li><NavLink to="/products" className="hover:text-primary transition-colors">WPC Louvers</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="flex-shrink-0 mr-3 mt-1 text-primary" />
                <span>1313, 1314, 13 Floor, Fortune Business Hub,
Nr. Shell Petrol Pump, Science City Road,
Sola, Ahmedabad‑380060, Gujarat, India.</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="flex-shrink-0 mr-3 mt-1 text-primary" />
                <span>+91 92279 94669</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="flex-shrink-0 mr-3 mt-1 text-primary" />
                <span>sngecoindia.ec@gmail.com
</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {year} SNG Eco India Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
