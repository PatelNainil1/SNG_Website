import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Recycle, TreePine, Droplets, Shield, Flame, Bug, Factory } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const SustainabilityPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: impactRef, inView: impactInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const environmentalImpact = [
    {
      icon: TreePine,
      title: 'Trees Saved',
      value: '50,000+',
      description: 'Trees saved annually through WPC alternative to wood',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Recycle,
      title: 'Plastic Recycled',
      value: '2,500 Tons',
      description: 'Plastic waste recycled into valuable products yearly',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Factory,
      title: 'Carbon Reduced',
      value: '15,000 Tons',
      description: 'CO2 emissions reduced compared to traditional materials',
      color: 'from-primary-700 to-primary-800'
    },
    {
      icon: Leaf,
      title: 'Zero Deforestation',
      value: '100%',
      description: 'Commitment to forest conservation and eco-friendly practices',
      color: 'from-primary-800 to-primary-900'
    }
  ];

  const ecoFeatures = [
    {
      icon: Droplets,
      title: 'Water Resistant',
      description: 'Superior water resistance for all weather conditions, eliminating the need for chemical treatments.',
      benefits: ['No chemical sealants required', 'Long-lasting protection', 'Reduced maintenance']
    },
    {
      icon: Bug,
      title: 'Termite Proof',
      description: 'Complete protection against termite damage without harmful pesticides or chemicals.',
      benefits: ['No toxic treatments needed', 'Natural resistance', 'Safe for families']
    },
    {
      icon: Flame,
      title: 'Fire Retardant',
      description: 'Enhanced fire safety properties built into the material structure for secure installations.',
      benefits: ['Built-in fire resistance', 'No chemical additives', 'Improved safety standards']
    },
    {
      icon: Shield,
      title: '100% Non-Toxic',
      description: 'Completely safe for health and environment with zero harmful emissions or chemicals.',
      benefits: ['VOC-free', 'Child-safe', 'Indoor air quality friendly']
    },
    {
      icon: Recycle,
      title: '100% Recyclable',
      description: 'Fully recyclable at end of life, contributing to circular economy principles.',
      benefits: ['Complete recyclability', 'Waste reduction', 'Circular economy support']
    },
    {
      icon: Leaf,
      title: 'Renewable Materials',
      description: 'Made from renewable wood fibers and recycled plastic, reducing virgin material usage.',
      benefits: ['Sustainable sourcing', 'Reduced virgin material use', 'Renewable content']
    }
  ];

  const sustainabilityInitiatives = [
    {
      title: 'Green Manufacturing',
      description: 'Our manufacturing processes are designed to minimize environmental impact with energy-efficient machinery and waste reduction programs.',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1764153098/windmill_vy27fo.webp',
      features: ['Solar-powered facilities', 'Water recycling systems', 'Waste heat recovery', 'Zero liquid discharge']
    },
    {
      title: 'Circular Economy',
      description: 'We actively participate in the circular economy by recycling post-consumer plastic waste into high-quality WPC products.',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1764153263/Circular-Economy-Article-Photo-Cover-TONTOTON-1024x576_ixpnws.webp',
      features: ['Plastic waste collection', 'Material recovery programs', 'Product life extension', 'End-of-life recycling']
    },
    {
      title: 'Carbon Footprint Reduction',
      description: 'Comprehensive carbon reduction strategy across our entire value chain, from raw materials to product delivery.',
      image: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1764153407/Untitled-design-2024-08-13T215821.918_pvlko9.jpg',
      features: ['Carbon offset programs', 'Efficient logistics', 'Local sourcing', 'Renewable energy use']
    }
  ];

  const certifications = [
    { name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
    { name: 'FSC Certified', description: 'Responsible Forest Management' },
    { name: 'GREENGUARD Gold', description: 'Low Chemical Emissions' },
    { name: 'LEED Compliant', description: 'Green Building Standards' },
    { name: 'Bureau Veritas', description: 'Quality & Environmental Verification' },
    { name: 'ISI Mark', description: 'Indian Standards Compliance' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"
              animate={{ 
                y: [0, -30, 0], 
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400/20 rounded-full blur-xl"
              animate={{ 
                y: [0, 20, 0], 
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: 'reverse' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-400/20 rounded-full blur-xl"
              animate={{ 
                x: [0, 30, 0], 
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 4, repeatType: 'reverse' }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                Eco-Friendly
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                  Innovation
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Building a sustainable future with 100% recyclable, 
                <br />
                eco-friendly WPC products that protect our planet
              </motion.p>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {['100% Recyclable', 'Water-Proof', 'Termite-Proof', 'Fire-Retardant'].map((feature) => (
                  <motion.div
                    key={feature}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white font-semibold text-sm">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section ref={impactRef} className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={impactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Environmental Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to sustainability translates into measurable environmental benefits
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {environmentalImpact.map((impact, index) => {
                const Icon = impact.icon;
                return (
                <motion.div
                  key={impact.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={impactInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center"
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      animate={impactInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    >
                      {impact.value}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{impact.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{impact.description}</p>
                  </motion.div>
                </motion.div>
              )})}
            </div>
          </div>
        </section>

        {/* Eco-Friendly Benefits */}
        <section ref={benefitsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sustainable Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced eco-friendly technology that delivers superior performance while protecting the environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecoFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 h-full"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0, 171, 180, 0.1)"
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-primary-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )})}
            </div>
          </div>
        </section>

        {/* Sustainability Initiatives */}
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
                Our Green Initiatives
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leading sustainable practices across our entire operation
              </p>
            </motion.div>

            <div className="space-y-16">
              {sustainabilityInitiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="lg:w-1/2">
                    <motion.img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {initiative.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {initiative.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {initiative.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Environmental Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized and certified by leading environmental organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </motion.div>
                </motion.div>
              ))}
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
                Join the Green Revolution
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Choose sustainable WPC products and contribute to a greener, more sustainable future for our planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Eco Products
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default SustainabilityPage;
