import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaTimes,
  FaCheckCircle,
  FaComments,
  FaHandshake,
  FaUserMd,
  FaArrowRight,
  FaPaperPlane,
  FaQuestionCircle
} from 'react-icons/fa';
import api from '../services/api';
import wellLitHouse from '../images/well_lit_house.png';
import peopleSeatedTogether from '../images/people_seated_together.png';
import twoPeopleWalking from '../images/two_people_walking.png';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferred_contact: 'email',
    message: '',
    is_urgent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await api.submitContactForm(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        
        // Reset form and close modal after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setShowModal(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            preferred_contact: 'email',
            message: '',
            is_urgent: false
          });
        }, 3000);
      } else {
        setError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      details: ['(612) 443-9032', 'Mon-Fri: 8:00 AM - 6:00 PM'],
      link: 'tel:612-443-9032'
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      details: ['resilientmindsolutionllc@gmail.com', 'We respond within 24 hours'],
      link: 'mailto:resilientmindsolutionllc@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Main Office',
      details: ['1132 28th Ave S', 'Moorhead, MN 56560'],
      link: 'https://maps.google.com'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      link: null
    }
  ];

  const locations = [
    {
      name: 'Moorhead Office (Main)',
      address: '1132 28th Ave S, Moorhead, MN 56560',
      phone: '(612) 443-9032',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM'
    },
    {
      name: 'Twin Cities Metro Office',
      address: 'Coming Soon - Minneapolis/St. Paul Area',
      phone: '(612) 443-9032',
      hours: 'Virtual appointments available now'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={wellLitHouse} 
            alt="Contact Resilient Minds" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-secondary-900/95"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-white text-center section-padding py-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
            <FaComments className="text-2xl" />
            <span className="font-semibold text-lg uppercase tracking-wider">Let's Connect</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-100 leading-relaxed mb-12">
            We're here to help. Reach out to us and take the first step 
            toward better mental health and wellness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setShowModal(true)}
              className="group bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-50 transition shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <FaCalendarAlt className="text-2xl group-hover:scale-110 transition-transform" />
              Request Appointment
            </button>
            <a 
              href="tel:612-443-9032" 
              className="bg-primary-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-600 transition border-2 border-white/30 inline-flex items-center justify-center gap-3"
            >
              <FaPhone className="text-2xl" />
              Call Now
            </a>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 text-white">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Crisis Banner */}
      <section className="bg-red-600 py-8 relative z-10 -mt-1">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <FaExclamationTriangle className="text-3xl" />
              </div>
              <div>
                <p className="font-bold text-xl mb-1">In Crisis? Immediate Help Available 24/7</p>
                <p className="text-red-100">Free, confidential support from trained counselors</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="tel:988" 
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition inline-flex items-center gap-2"
              >
                <FaPhone />
                Call 988
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gradient-to-br from-white to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaHandshake />
                Ways to Reach Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We're Here for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the way that works best for you to get in touch with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 text-center border-2 border-gray-100 hover:border-primary-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="block text-gray-600 hover:text-primary-600 transition"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={idx === 0 ? 'font-bold text-lg text-gray-900 mb-2' : 'text-sm text-gray-600'}>
                        {detail}
                      </p>
                    ))}
                  </a>
                ) : (
                  <div className="text-gray-600">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={idx === 0 ? 'font-bold text-lg text-gray-900 mb-2' : 'text-sm'}>
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section for Form */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={twoPeopleWalking} 
                alt="Take the first step" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-primary-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 lg:p-16 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <FaUserMd className="text-6xl mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Fill out our appointment request form and we'll contact you within 24 hours 
                  to schedule your first visit. Your journey to wellness starts here.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="group bg-white text-primary-700 px-12 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition shadow-2xl inline-flex items-center gap-4"
                >
                  <FaCalendarAlt className="text-2xl" />
                  Request Appointment
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaMapMarkerAlt />
                Where to Find Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our convenient location or schedule a virtual appointment from the comfort of your home
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={peopleSeatedTogether} 
                  alt="Our welcoming office" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Welcoming Environment</h3>
                  <p className="text-lg">Comfortable, confidential spaces designed for your peace of mind</p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="order-1 lg:order-2 space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-xl p-8 border-2 border-primary-200 hover:border-primary-400 transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {location.name}
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg text-gray-900">Address</p>
                        <p>{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaPhone className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg text-gray-900">Phone</p>
                        <a href={`tel:${location.phone}`} className="text-primary-600 hover:text-primary-700 font-medium">
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaClock className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg text-gray-900">Hours</p>
                        <p>{location.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <FaQuestionCircle />
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our services and appointments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'Do you accept walk-ins?',
                  a: 'For crisis situations, we do accept walk-ins. However, we strongly recommend scheduling an appointment to ensure availability and minimal wait time.'
                },
                {
                  q: 'What insurance do you accept?',
                  a: 'We accept Medical Assistance, Medicare, and most major insurance plans including Blue Cross Blue Shield, HealthPartners, Medica, and more. Contact us to verify your coverage.'
                },
                {
                  q: 'Do you offer telehealth appointments?',
                  a: 'Yes! We offer secure telehealth appointments for many of our services, making it convenient for clients who prefer remote sessions or have transportation challenges.'
                },
                {
                  q: 'How long does it take to get an appointment?',
                  a: 'We strive to schedule new client appointments within 1-2 weeks. For urgent situations, we make every effort to accommodate sooner.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-l-4 border-primary-600">
                  <div className="flex items-start gap-4 mb-4">
                    <FaCheckCircle className="text-primary-500 text-2xl mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-10">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Help */}
            <div className="mt-12 bg-primary-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-primary-100 mb-6 text-lg">
                Our team is here to help answer any questions you may have about our services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:612-443-9032" 
                  className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition inline-flex items-center justify-center gap-2"
                >
                  <FaPhone />
                  Call Us
                </a>
                <a 
                  href="mailto:resilientmindsolutionllc@gmail.com" 
                  className="bg-primary-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-800 transition border-2 border-white/30 inline-flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-t-3xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Request an Appointment
                  </h2>
                  <p className="text-primary-100 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white hover:text-gray-200 transition p-2 hover:bg-white/10 rounded-lg"
                >
                  <FaTimes className="text-3xl" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {error && (
                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 mb-6 flex items-start gap-3">
                  <FaExclamationTriangle className="text-red-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-green-500 text-5xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-600 mb-2">
                    Your appointment request has been received.
                  </p>
                  <p className="text-gray-500">
                    We'll contact you within 24 hours to schedule your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-lg"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-lg"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-lg"
                        placeholder="(612) 443-9032"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-lg"
                    >
                      <option value="">Select a service...</option>
                      <option value="armhs">Adult Rehabilitative Mental Health (ARMHS)</option>
                      <option value="housing">Housing Stabilization Services</option>
                      <option value="therapy">Individual/Group Therapy</option>
                      <option value="crisis">Crisis Intervention</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Contact */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="email"
                          checked={formData.preferred_contact === 'email'}
                          onChange={handleChange}
                          className="w-5 h-5 text-primary-600 mr-3"
                        />
                        <span className="text-gray-700 font-medium">Email</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="phone"
                          checked={formData.preferred_contact === 'phone'}
                          onChange={handleChange}
                          className="w-5 h-5 text-primary-600 mr-3"
                        />
                        <span className="text-gray-700 font-medium">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none text-lg"
                      placeholder="Tell us briefly about what brings you here today..."
                    ></textarea>
                  </div>

                  {/* Urgent */}
                  <div className="flex items-start bg-red-50 border-2 border-red-200 rounded-xl p-4">
                    <input
                      type="checkbox"
                      id="is_urgent"
                      name="is_urgent"
                      checked={formData.is_urgent}
                      onChange={handleChange}
                      className="w-5 h-5 text-red-600 mt-1 mr-3"
                    />
                    <label htmlFor="is_urgent" className="text-gray-700 font-medium">
                      This is an urgent matter (We'll prioritize your request)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-5 rounded-xl font-bold text-xl hover:from-primary-700 hover:to-secondary-700 transition shadow-xl flex items-center justify-center gap-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Submit Request
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you consent to us contacting you regarding your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

