import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, CheckCircle } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const CertificatesPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: certificatesRef, inView: certificatesInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: exhibitionsRef, inView: exhibitionsInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const certificates = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      issuer: 'Bureau Veritas',
      validUntil: '2026',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812646/c1.jpeg_xer9x4.jpg',
      type: 'Quality',
      benefits: ['Quality Assurance', 'Process Excellence', 'Customer Satisfaction']
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management Systems',
      issuer: 'Bureau Veritas',
      validUntil: '2026',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812646/c-8_gwlx6l.jpg',
      type: 'Environmental',
      benefits: ['Environmental Protection', 'Sustainable Practices', 'Compliance']
    },
    {
      name: 'ISI Mark Certification',
      description: 'Indian Standards Institute Mark',
      issuer: 'Bureau of Indian Standards',
      validUntil: '2025',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812647/c-3_vypivm.jpg',
      type: 'Standards',
      benefits: ['National Standards', 'Product Quality', 'Market Trust']
    },
    {
      name: 'CE Marking',
      description: 'European Conformity',
      issuer: 'European Commission',
      validUntil: '2027',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812646/c-2_guh9nz.jpg',
      type: 'International',
      benefits: ['European Market Access', 'Safety Compliance', 'Global Recognition']
    },
    {
      name: 'GREENGUARD Gold',
      description: 'Low Chemical Emissions',
      issuer: 'UL Environment',
      validUntil: '2025',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812642/c-7_bsvklm.jpg',
      type: 'Health',
      benefits: ['Indoor Air Quality', 'Health Safety', 'Chemical Emissions Control']
    },
    {
      name: 'LEED Compliant',
      description: 'Leadership in Energy and Environmental Design',
      issuer: 'US Green Building Council',
      validUntil: '2026',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812641/c-6_goo7gu.jpg',
      type: 'Green Building',
      benefits: ['Sustainable Construction', 'Energy Efficiency', 'Environmental Benefits']
    },
    {
      name: 'FSC Certified',
      description: 'Forest Stewardship Council',
      issuer: 'Forest Stewardship Council',
      validUntil: '2025',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812640/c-5_jggaqx.jpg',
      type: 'Sustainability',
      benefits: ['Responsible Forestry', 'Sustainable Sourcing', 'Environmental Conservation']
    },
    {
      name: 'Export Quality Certificate',
      description: 'Export Quality Assurance',
      issuer: 'Export Inspection Council',
      validUntil: '2025',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812641/c-4_prn39o.jpg',
      type: 'Export',
      benefits: ['International Quality', 'Export Compliance', 'Global Standards']
    }
  ];

  const exhibitions = [
    {
      name: 'India Wood 2024',
      location: 'Bangalore, India',
      date: 'March 2024',
      description: 'Premier woodworking and furniture manufacturing exhibition in India',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812646/e-7_pr5nyx.jpg',
      highlights: ['Product Launch', 'Industry Networking', 'Technology Showcase'],
      awards: ['Best Innovation Award', 'Sustainability Excellence']
    },
    {
      name: 'HBLF Gandhinagar 2023',
      location: 'Gandhinagar, Gujarat',
      date: 'October 2023',
      description: 'Hardware & Building Materials Exhibition',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812645/e-4_r1g0dn.jpg',
      highlights: ['New Product Display', 'Dealer Meet', 'Technical Seminars'],
      awards: ['Best Booth Design', 'Popular Choice Award']
    },
    {
      name: 'Build India Expo 2023',
      location: 'New Delhi, India',
      date: 'September 2023',
      description: 'Building materials and construction technology exhibition',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812646/e-5_fxflyt.jpg',
      highlights: ['International Presence', 'Export Opportunities', 'Government Recognition'],
      awards: ['Excellence in Manufacturing']
    },
    {
      name: 'GPBS 2025',
      location: 'Mumbai, India',
      date: 'January 2025',
      description: 'Wood and timber products exhibition',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759812647/e-8_awpnbt.jpg',
      highlights: ['Sustainable Products', 'Industry Partnerships', 'Innovation Center'],
      awards: ['Green Product Award']
    }
  ];

  const certificationTypes = [
    { type: 'Quality', count: 2, color: 'from-primary-500 to-primary-600' },
    { type: 'Environmental', count: 2, color: 'from-primary-600 to-primary-700' },
    { type: 'Safety', count: 2, color: 'from-primary-700 to-primary-800' },
    { type: 'International', count: 3, color: 'from-primary-800 to-primary-900' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Certificates &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                Achievements
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Recognized excellence in quality, safety, and environmental standards.
              Our certifications reflect our commitment to delivering world-class WPC products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification Overview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certification Categories
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive certification portfolio across various domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationTypes.map((category, index) => (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Shield className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.type}</h3>
                  <p className="text-3xl font-bold text-primary-600">{category.count}</p>
                  <p className="text-gray-600 text-sm">Certifications</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section ref={certificatesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={certificatesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Quality, safety, and environmental excellence validated by leading certification bodies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.name}
                initial={{ opacity: 0, y: 50 }}
                animate={certificatesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
  										src={certificate.image}
  										alt={certificate.name}
  										className="w-full h-64 object-contain bg-gray-50"
  										whileHover={{ scale: 1.05 }}
  										transition={{ duration: 0.6 }}
											/>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary-600">
                        {certificate.type}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {certificate.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{certificate.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <p><span className="font-medium">Issued by:</span> {certificate.issuer}</p>
                      <p><span className="font-medium">Valid until:</span> {certificate.validUntil}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                      {certificate.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-primary-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <motion.button
                        onClick={() => openModal(certificate.image)}
                        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Gallery</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions & Trade Shows */}
      <section ref={exhibitionsRef} className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={exhibitionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exhibitions & Awards
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing innovation and excellence at premier industry events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.name}
                initial={{ opacity: 0, y: 50 }}
                animate={exhibitionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={exhibition.image}
                      alt={exhibition.name}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {exhibition.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exhibition.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">{exhibition.location}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exhibition.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exhibition.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Awards Received:</h4>
                        <div className="space-y-1">
                          {exhibition.awards.map((award) => (
                            <div key={award} className="flex items-center space-x-2 text-sm text-gray-600">
                              <Award className="w-4 h-4 text-yellow-500" />
                              <span>{award}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => openModal(exhibition.image)}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Gallery
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default CertificatesPage;
