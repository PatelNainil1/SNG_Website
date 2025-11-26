import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Determine if the header should have a solid background
  // We force solid background if menu is open so the close button is visible
  const isHeaderActive = isScrolled || isOpen;
  const menuIconColor = isHeaderActive ? 'text-secondary' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isHeaderActive ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo in a white box */}
          <div className="flex-shrink-0 z-50">
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
          <div className="lg:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`transition-colors duration-300 p-2 rounded-md hover:bg-gray-100/10 ${menuIconColor}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-0 w-full bg-white shadow-xl lg:hidden overflow-hidden"
            style={{ zIndex: 40 }}
          >
            <nav className="h-full overflow-y-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        isActive 
                          ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-600' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              {/* Extra padding at bottom for scrolling */}
              <div className="h-20"></div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
