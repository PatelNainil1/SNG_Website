import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Grid, List, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'frames', name: 'Frames', count: products.filter(p => p.category === 'frames').length },
    { id: 'doors', name: 'Doors', count: products.filter(p => p.category === 'doors').length },
    { id: 'boards', name: 'Boards & Planks', count: products.filter(p => p.category === 'boards').length },
    { id: 'pallets', name: 'Fly Ash Brick Pallets', count: products.filter(p => p.category === 'pallets').length },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
              Our Premium 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                WPC Products
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover our comprehensive range of eco-friendly Wood-Plastic Composite products 
              designed for modern construction and sustainable living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products Grid/List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group h-full"
              >
                <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : 'flex flex-col'
                }`}>
                  {/* Product Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'md:w-80 flex-shrink-0' : ''
                  }`}>
                    {product.bestseller && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Bestseller
                        </span>
                      </div>
                    )}
                    <motion.img
                      src={product.images[0]}
                      alt={product.name}
                      className={`w-full object-cover ${viewMode === 'list' ? 'h-full' : 'h-64'}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Details */}
                  <div className={`p-6 flex-1 flex flex-col`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1 ml-4 flex-shrink-0">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                      {product.short_description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, viewMode === 'grid' ? 3 : 4).map((feature) => (
                        <span
                          key={feature}
                          className="flex items-center space-x-1 px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          <CheckCircle className="w-3 h-3" />
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-lg font-bold text-primary-600">{product.price}</p>
                      </div>
                      <Link to={`/products/${product.id}`} className="flex space-x-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>View Details</span>
                          <ArrowRight size={16} />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our expert team can help you design custom WPC products tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Custom Quote
                </motion.button>
              </Link>
          <a href="https://drive.google.com/file/d/12MQgCExTSKq3JnMX3Qr25wVg9aM0Z-n9/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
						<motion.button
    className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
                Download Catalog
              </motion.button>
		</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
