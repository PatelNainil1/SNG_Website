import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { MapPin, Award, Globe, Building, Factory, Users, Store, ChevronLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';

const DistributorsPage = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const legendItems = [
    { label: 'Corporate Head Office', color: 'text-cyan-300' },
    { label: 'Manufacturing Units', color: 'text-purple-400' },
    { label: 'Business Partners', color: 'text-red-500' },
  ];

  const stats = [
    { value: 9, label: 'Certificates', icon: Award, suffix: '+' },
    { value: 4, label: 'Country Export', icon: Globe, suffix: '+' },
    { value: 300, label: 'Projects', icon: Building, suffix: '+' },
    { value: 50, label: 'Major Stock Points', icon: Store, suffix: '+' },
    { value: 400000, label: 'Production Capacity', icon: Factory, suffix: ' Sq. Mtr.' },
    { value: 50, label: 'Corporate Supply', icon: Users, suffix: '+' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100 pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Pan-India
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                  Network
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Explore our extensive network of manufacturing units, corporate offices, and trusted business partners across India.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Main Content */}
        <section ref={ref} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary-600">Home</Link>
              <ChevronLeft className="w-4 h-4 transform rotate-180 mx-2" />
              <span className="font-medium text-gray-700">Distributor Network</span>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Map Image */}
                <motion.div
                  className="lg:col-span-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <img src="https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759515503/Removal-50_pm2eyr.png" alt="SNG Eco India Distributor Network Map" className="w-full h-auto object-contain rounded-lg" />
                </motion.div>

                {/* Legend and Stats */}
                <div className="flex flex-col justify-center space-y-8">
                  {/* Legend */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Legend</h3>
                    <div className="space-y-3">
                      {legendItems.map(item => (
                        <div key={item.label} className="flex items-center">
                          <MapPin className={`w-6 h-6 mr-3 ${item.color}`} />
                          <span className="text-gray-700 font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Milestones</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <div key={stat.label}>
                            <Icon className="h-8 w-8 text-primary-600 mb-2" />
                            <p className="text-2xl font-bold text-secondary">
                              <AnimatedCounter value={stat.value} suffix={stat.suffix.includes('Sq') ? '' : stat.suffix} />
                              {stat.suffix.includes('Sq') && <span className="text-base font-medium"> Sq. Mtr.</span>}
                            </p>
                            <p className="text-xs text-gray-500">{stat.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default DistributorsPage;
