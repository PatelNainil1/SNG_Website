import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { Star, ChevronLeft, ChevronRight, Download, MessageSquare } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeTab, setActiveTab] = useState('description');

  const imageIndex = product ? (page % product.images.length + product.images.length) % product.images.length : 0;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const selectImage = (index) => {
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  }

  useEffect(() => {
    const currentProduct = products.find(p => p.id === productId);
    if (currentProduct) {
      setProduct(currentProduct);
      setPage([0, 0]);
      setActiveTab('description');
      
      const related = currentProduct.related_products
        ? products.filter(p => currentProduct.related_products.includes(p.id))
        : [];
      setRelatedProducts(related);
    } else {
      navigate('/products');
    }
  }, [productId, navigate]);

  if (!product) {
    return <div className="w-full h-screen flex items-center justify-center"><div className="w-16 h-16 border-4 border-primary-600 border-dashed rounded-full animate-spin"></div></div>;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <ChevronLeft className="w-4 h-4 transform rotate-180 mx-2" />
            <Link to="/products" className="hover:text-primary-600">Products</Link>
            <ChevronLeft className="w-4 h-4 transform rotate-180 mx-2" />
            <span className="font-medium text-gray-700">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="space-y-4">
                <div className="group aspect-square bg-gray-100 rounded-2xl shadow-lg overflow-hidden relative">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={page}
                      src={product.images[imageIndex]}
                      alt={product.name}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }
                      }}
                      className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing"
                    />
                  </AnimatePresence>

                  {product.images.length > 1 && (
                    <>
                      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
                          <button onClick={() => paginate(-1)} className="bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100">
                              <ChevronLeft size={24} />
                          </button>
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
                          <button onClick={() => paginate(1)} className="bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100">
                              <ChevronRight size={24} />
                          </button>
                      </div>
                    </>
                  )}
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-5 gap-4">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => selectImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${imageIndex === index ? 'border-primary-600 scale-105' : 'border-transparent hover:border-gray-300'}`}
                      >
                        <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-3">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} / 5.0</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.short_description}</p>
              <p className="text-3xl font-bold text-primary-600 mb-8">{product.price}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="w-full">
                  <motion.button
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare size={20} />
                    <span>Request a Quote</span>
                  </motion.button>
                </Link>
                <motion.button
                  className="w-full border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  <span>Download Brochure</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Tabs for Description & Specs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Description
                </button>
                {product.technical_specs && (
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'specs' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Technical Specs
                  </button>
                )}
              </nav>
            </div>
            <div className="py-8">
              {activeTab === 'description' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose max-w-none text-gray-600">
                  <p>{product.long_description || product.short_description}</p>
                </motion.div>
              )}
              {activeTab === 'specs' && product.technical_specs && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {product.technical_specs.map(spec => (
                      <div key={spec.name} className="flex justify-between border-b py-2">
                        <dt className="text-sm font-medium text-gray-600">{spec.name}</dt>
                        <dd className="text-sm text-gray-900 font-semibold">{spec.value}</dd>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((related, index) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/products/${related.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                      <img src={related.images[0]} alt={related.name} className="h-48 w-full object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 group-hover:text-primary-600">{related.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{related.price}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetailPage;
