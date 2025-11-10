import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DistributorsPage = lazy(() => import('./pages/DistributorsPage'));

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="w-16 h-16 border-4 border-primary-600 border-dashed rounded-full animate-spin"></div></div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/distributors" element={<DistributorsPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
