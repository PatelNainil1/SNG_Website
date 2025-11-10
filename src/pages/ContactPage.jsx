import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Send, Loader } from 'lucide-react';
import { supabase } from '../config/supabaseClient';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry_type: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!supabase) {
      toast.error('Contact form is disabled. Please configure Supabase credentials in your .env file.');
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast.success('Message sent successfully! We will get back to you soon.', { id: toastId });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiry_type: 'general',
        message: ''
      });

    } catch (error) {
      toast.error(`Failed to send message: ${error.message}`, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Corporate Office',
      details: [
        '1313, 1314, 13th Floor, Fortune Business Hub,',
        'Nr. Shell Petrol Pump, Science City Road,',
        'Sola, Ahmedabad - 380060, Gujarat, India'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 99798 40402',
        '+91 92279 94669',
      ],
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@sngecoindia.com'
      ],
      color: 'from-primary-700 to-primary-800'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:30 AM - 7:00 PM',
        'Sunday: Closed'
      ],
      color: 'from-primary-800 to-primary-900'
    }
  ];

  const offices = [
    {
      city: 'Ahmedabad',
      type: 'Corporate Office',
      address: '1313, Fortune Business Hub, Sola',
      phone: '+91 92279 94669',
      specialization: 'Sales, Marketing & Administration'
    },
    {
      city: 'Gujarat',
      type: 'Manufacturing Plant',
      address: 'GIDC Industrial Estate',
      specialization: 'WPC Production & Quality Control'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Information' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'dealer', label: 'Dealer Partnership' },
    { value: 'export', label: 'Export Inquiry' },
    { value: 'support', label: 'Technical Support' }
  ];

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
              Get in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Connect with our team of experts for premium WPC solutions,
              technical support, or partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for all your WPC product needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center h-full"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <motion.input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91-XXXXX-XXXXX"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <motion.input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <motion.select
                      name="inquiry_type"
                      value={formData.inquiry_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      whileFocus={{ scale: 1.02 }}
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your requirements..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map and Offices */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Interactive Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="h-64 bg-gray-200 flex items-center justify-center relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.593981504994!2d72.5129593153969!3d23.07549442045951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cb8373a0555%3A0x25e483f65223c316!2sFortune%20Business%20Hub!5e0!3m2!1sen!2sin!4v1628601538352!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="SNG Eco India Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-gray-900">
                  Our Locations
                </h4>
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-1">
                          {office.city} - {office.type}
                        </h5>
                        <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                        <p className="text-primary-600 text-sm font-medium mb-1">{office.phone}</p>
                        <p className="text-gray-500 text-xs">{office.specialization}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
