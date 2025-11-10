import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Award, Building, Globe, Users, Factory, Recycle, ShieldCheck, Leaf, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';

// --- To manually change the hero image, replace the URL in the line below ---
const heroImageUrl = 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1758864877/gemini-2.5-flash-image-preview_a_lush_3d_render_of_2-3_modern_corporate_buildings_with_a_luxury_and_international_look_featuring_p-0_uiguzy.png';

const featuredProducts = [
  { id: 'wpc-door-frame', name: 'WPC Solid Door Frame', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/00abb4/white?text=Door+Frame' },
  { id: 'wpc-solid-doors', name: 'WPC Solid Doors', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/232323/white?text=Solid+Door' },
  { id: 'wpc-solid-boards', name: 'WPC Solid Boards', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/009aa3/white?text=Solid+Board' },
  { id: 'wpc-window-frame', name: 'WPC Window Frame', image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/00818a/white?text=Window+Frame' },
];

const stats = [
  { value: 9, label: 'Certificates', icon: Award, suffix: '+' },
  { value: 300, label: 'Projects', icon: Building, suffix: '+' },
  { value: 400000, label: 'Production (sq. mtr)', icon: Factory, suffix: '+' },
  { value: 50, label: 'Corporate Supply', icon: Users, suffix: '+' },
  { value: 4, label: 'Country Exports', icon: Globe, suffix: '+' },
  { value: 50, label: 'Major Stock Points', icon: Recycle, suffix: '+' },
];

const clientLogos = [
  { name: 'Client 1', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759517710/Adani_2012_logo_dgve88.png' },
  { name: 'Client 2', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759517887/download_buavot.jpg' },
  { name: 'Client 3', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518853/Screenshot_2025-10-04_003851_acokpi.png' },
  { name: 'Client 4', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518853/Screenshot_2025-10-04_003901_s7zsjs.png' },
  { name: 'Client 5', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518853/Screenshot_2025-10-04_003920_n4np1q.png' },
  { name: 'Client 6', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518853/Screenshot_2025-10-04_004139_dpvcau.png' },
  { name: 'Client 7', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518853/Screenshot_2025-10-04_003910_wy72vp.png' },
  { name: 'Client 8', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518853/Screenshot_2025-10-04_004130_bfldf2.png' },
  { name: 'Client 9', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518854/Screenshot_2025-10-04_004147_q4rfmu.png' },
  { name: 'Client 10', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518854/Screenshot_2025-10-04_003943_gvpf8e.png' },
  { name: 'Client 11', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518854/Screenshot_2025-10-04_003932_n4lcsj.png' },
  { name: 'Client 12', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518854/Screenshot_2025-10-04_003952_viacoh.png' },
  { name: 'Client 13', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518854/Screenshot_2025-10-04_004157_lv74s2.png' },
  { name: 'Client 14', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518855/Screenshot_2025-10-04_004008_thwa25.png' },
  { name: 'Client 15', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518855/Screenshot_2025-10-04_004017_ubjrob.png' },
  { name: 'Client 16', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518855/Screenshot_2025-10-04_004209_xp1mqo.png' },
  { name: 'Client 17', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518855/Screenshot_2025-10-04_004035_mvompx.png' },
  { name: 'Client 18', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518855/Screenshot_2025-10-04_004001_j2dcwu.png' },
  { name: 'Client 19', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518855/Screenshot_2025-10-04_004054_zxqrdd.png' },
  { name: 'Client 20', logo: 'https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759518855/Screenshot_2025-10-04_004044_vz1l1w.png' },
];

const keyBenefits = [
    {
        icon: ShieldCheck,
        title: "Unmatched Durability",
        description: "Our WPC products are 100% waterproof, termite-proof, and fire-retardant, ensuring longevity and safety."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Choice",
        description: "Made from recycled plastic and wood fibers, Green Plastwood helps save forests and reduce plastic waste."
    },
    {
        icon: Zap,
        title: "Premium Quality",
        description: "Engineered for excellence with high-density materials, providing superior strength and a flawless finish."
    }
];

const HomePage = () => {
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: featuredRef, inView: featuredInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        >
            <motion.div 
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            The Future of 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500 mt-2">
            	Sustainable Building
            </span>
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Experience the luxury of Green Plastwood — premium WPC products that are durable, beautiful, and kind to our planet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link to="/products">
              <motion.button 
                className="mt-10 px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-full shadow-lg transition-all duration-300"
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 0px 30px rgba(0, 171, 180, 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Collection
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Green Plastwood?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">The definitive choice for modern construction, combining elegance with responsibility.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {keyBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full" >
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={featuredRef} className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-secondary"
          >
            Featured Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-gray-600 text-xl"
          >
            Discover our flagship WPC solutions engineered for excellence.
          </motion.p>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link to={`/products/${product.id}`} className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-square">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                        />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors flex-grow">{product.name}</h3>
                        <p className="mt-4 text-sm font-semibold text-primary-600 flex items-center">
                            View Details
                            <ArrowRight className="inline w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </p>
                    </div>
                </Link>
              </motion.div>
            ))}
          </div>
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/products">
              <motion.button 
                className="mt-16 px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 hover:bg-primary-50"
                whileTap={{ scale: 0.95 }}
              >
                View All Products <ArrowRight className="inline ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">We are proud of our journey and the milestones we've achieved in making construction sustainable.</p>
            </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Icon className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-center text-3xl font-bold text-gray-800">Trusted by Industry Leaders</h2>
           <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {clientLogos.map((client, index) => <li key={`${client.name}-${index}`}><img src={client.logo} alt={client.name} className="h-16 w-auto transition-transform duration-300 hover:scale-110 " /></li>)}
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {clientLogos.map((client, index) => <li key={`${client.name}-2-${index}`}><img src={client.logo} alt={client.name} className="h-16 w-auto transition-transform duration-300 hover:scale-110 " /></li>)}
              </ul>
           </div>
        </div>
      </section>

      {/* Distributor Network CTA */}
      <section className="relative py-20 bg-gray-800 text-white">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dwdrfqkxi/image/upload/v1759519279/pan-left-view-digital-connections-260nw-1929438428_yruglw.webp" className="w-full h-full object-cover opacity-70" alt="India Map Background" />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">Our Pan-India Network</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              With a robust network of business partners and distributors, we are present across the nation to serve you better.
            </p>
            <Link to="/distributors">
              <motion.button 
                className="mt-8 px-8 py-3 bg-white text-primary-700 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 hover:bg-primary-50"
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Network <ArrowRight className="inline ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build a Greener Future?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your project. Our team is ready to provide you with the best sustainable WPC solutions.
            </p>
            <Link to="/contact">
                <motion.button
                    className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Our Experts
                </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
