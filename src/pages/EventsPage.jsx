import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Camera, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ImageModal from '../components/ImageModal';

const EventsPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: eventsRef, inView: eventsInView } = useInView({ threshold: 0.1, triggerOnce: true });

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

  const eventsData = [
    {
      name: 'India Wood 2025',
      date: 'February 2025',
      location: 'Bangalore, India',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/006e78/ffffff?text=India+Wood+2025',
      description: 'Showcasing our latest innovations in WPC technology at the premier woodworking exhibition.'
    },
    {
      name: 'HBLF Gandhinagar 2024',
      date: 'October 2024',
      location: 'Gandhinagar, Gujarat',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/008a95/ffffff?text=HBLF+2024',
      description: 'Connecting with industry leaders at the Hardware & Building Materials Expo.'
    },
    {
      name: 'Build India Expo 2024',
      date: 'September 2024',
      location: 'New Delhi, India',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/00abb4/ffffff?text=Build+India+2024',
      description: 'Presenting our sustainable building solutions to a national audience.'
    },
    {
      name: 'International Timber Expo',
      date: 'August 2024',
      location: 'Mumbai, India',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/2abdc8/ffffff?text=Timber+Expo+2024',
      description: 'Highlighting the future of eco-friendly timber alternatives.'
    },
    {
      name: 'GreenBuild Conference',
      date: 'July 2024',
      location: 'Virtual Event',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/5ccfdb/ffffff?text=GreenBuild+2024',
      description: 'Participating in global conversations on sustainable construction.'
    },
    {
      name: 'Architect@Work',
      date: 'June 2024',
      location: 'Kochi, India',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/93e2e9/ffffff?text=Architect@Work',
      description: 'Engaging with architects and designers to inspire future projects.'
    },
    {
      name: 'Realty+ Conclave & Awards',
      date: 'May 2024',
      location: 'Pune, India',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/bfeef2/000000?text=Realty%2B+2024',
      description: 'Celebrating excellence and networking within the real estate sector.'
    },
    {
      name: 'Dealer & Distributor Meet',
      date: 'April 2024',
      location: 'Chandigarh, India',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/dff6f8/000000?text=Dealer+Meet+2024',
      description: 'Strengthening our partnerships and planning for future growth.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100 pt-20">
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
                  <Calendar className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Events & 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                  Exhibitions
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Connecting with industry leaders and showcasing our innovations at premier events across the globe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events Grid */}
        <section ref={eventsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={eventsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {eventsData.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{event.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>{event.location}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                        {event.description}
                      </p>
                      <motion.button
                        onClick={() => openModal(event.image)}
                        className="mt-auto w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Camera className="w-5 h-5" />
                        <span>View Gallery</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                See You at the Next Event!
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Stay updated on our upcoming events and exhibitions. Let's connect and build a sustainable future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Upcoming Events</span>
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </PageTransition>
  );
};

export default EventsPage;
