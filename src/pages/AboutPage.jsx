import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Factory, Users, Globe, Award, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const timelineEvents = [
    {
      year: '2012',
      title: 'Company Founded',
      description: 'SNG Eco India Pvt. Ltd. established with a vision to revolutionize the building materials industry with eco-friendly WPC products.',
      icon: Calendar
    },
    {
      year: '2015',
      title: 'First Manufacturing Plant',
      description: 'Set up our first state-of-the-art manufacturing facility with advanced WPC production technology.',
      icon: Factory
    },
    {
      year: '2018',
      title: 'Brand Launch - Green Plastwood',
      description: 'Launched our premium brand "Green Plastwood" focusing on high-quality WPC door frames and building products.',
      icon: Target
    },
    {
      year: '2020',
      title: 'Expansion Phase',
      description: 'Expanded operations with two additional manufacturing plants, increasing production capacity to 50 million meters annually.',
      icon: Globe
    },
    {
      year: '2022',
      title: 'International Recognition',
      description: 'Achieved multiple certifications and started exporting to 4+ countries, establishing global presence.',
      icon: Award
    },
    {
      year: '2025',
      title: 'Market Leadership',
      description: 'Became the leading WPC manufacturer in India with 300+ successful projects and 50+ major stock points.',
      icon: Users
    }
  ];

  const achievements = [
    { number: '13+', label: 'Years of Excellence', icon: Calendar },
    { number: '50M+', label: 'Meters Annual Capacity', icon: Factory },
    { number: '300+', label: 'Successful Projects', icon: Target },
    { number: '4+', label: 'Countries Export', icon: Globe },
    { number: '9+', label: 'Quality Certificates', icon: Award },
    { number: '50+', label: 'Stock Points', icon: Users }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                SNG Eco India
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Leading the revolution in sustainable building materials since 2012.
              We are committed to creating eco-friendly WPC products that combine innovation,
              quality, and environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
              </motion.button>
							<a href="https://drive.google.com/file/d/12MQgCExTSKq3JnMX3Qr25wVg9aM0Z-n9/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
						</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 171, 180, 0.1)"
                  }}
                >
                  <Icon className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-600 font-medium">{achievement.label}</p>
                </motion.div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              A timeline of innovation, growth, and sustainable excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-700 rounded-full" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8 w-full`}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-8 lg:mb-0 w-full`}>
                    <motion.div
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-2xl font-bold text-primary-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Icon */}
                  <div className="lg:relative lg:z-10 flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12 hidden lg:block" />
                </motion.div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Enhanced */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-400">
                  Our Vision
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To become the global leader in sustainable WPC manufacturing, setting new standards
                  for eco-friendly construction materials that harmonize innovation with environmental
                  responsibility, creating a greener tomorrow for generations to come.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-400">
                  Our Mission
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To manufacture premium quality WPC products that exceed customer expectations while
                  contributing to a sustainable future through innovative, eco-friendly building solutions.
                  We are committed to continuous improvement, customer satisfaction, and environmental stewardship.
                </p>
              </div>
            </motion.div>
          </div>
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
              Partner with Industry Leaders
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join our network of satisfied partners and customers who trust SNG Eco India
              for their premium WPC product needs.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Become a Partner
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
