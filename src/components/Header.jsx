import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuIconColor = isScrolled ? 'text-secondary' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo in a white box */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="block bg-white p-2 rounded-md shadow-sm border border-gray-200/50">
              <img
                className="h-10 w-auto"
                src="https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759486746/WhatsApp_Image_2025-09-26_at_16.11.59_6db77bf1_owovcn.jpg"
                alt="SNG Eco India Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : (isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary-400')}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"
                        layoutId="underline"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-300 ${menuIconColor}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-100%" },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute top-full left-0 w-full lg:hidden bg-white shadow-xl"
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-light-gray'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
