import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaExclamationTriangle
} from 'react-icons/fa';
import api from '../services/api';

const Contact = () => {
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
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
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
        console.error('Submission failed:', result);
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error:', err);
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
      <section className="gradient-bg text-white section-padding py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
            We're here to help. Reach out to us and take the first step 
            toward better mental health.
          </p>
        </div>
      </section>

      {/* Crisis Banner */}
      <section className="bg-accent-600 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left gap-4">
            <FaExclamationTriangle className="text-4xl flex-shrink-0" />
            <div>
              <p className="font-bold text-lg mb-1">In Crisis? Get Immediate Help</p>
              <p>
                National Crisis Hotline: <a href="tel:988" className="underline font-semibold hover:text-accent-200">988</a>
                <span className="mx-3">|</span>
                Suicide Prevention: <a href="tel:1-800-273-8255" className="underline font-semibold hover:text-accent-200">1-800-273-8255</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                      <p key={idx} className={idx === 0 ? 'font-semibold' : 'text-sm'}>
                        {detail}
                      </p>
                    ))}
                  </a>
                ) : (
                  <div className="text-gray-600">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={idx === 0 ? 'font-semibold' : 'text-sm'}>
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Form and Map Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Request an Appointment
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours to 
                  schedule your appointment.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 mb-6">
                  <p className="text-red-700 text-center">{error}</p>
                </div>
              )}

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Your request has been received. We'll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        placeholder="(218) 216-8745"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="armhs">Adult Rehabilitative Mental Health (ARMHS)</option>
                      <option value="housing">Housing Stabilization Services</option>
                      <option value="therapy">Individual/Group Therapy</option>
                      <option value="crisis">Crisis Intervention</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="email"
                          checked={formData.preferred_contact === 'email'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="phone"
                          checked={formData.preferred_contact === 'phone'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Phone</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                      placeholder="Tell us briefly about what brings you here today..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="is_urgent"
                      name="is_urgent"
                      checked={formData.is_urgent}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="is_urgent" className="text-sm text-gray-700">
                      This is an urgent matter (We'll prioritize your request)
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    <FaCalendarAlt className="mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you consent to us contacting you regarding your request.
                  </p>
                </form>
              )}
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Locations
                </h2>
                <p className="text-gray-600">
                  Visit us at one of our convenient locations or schedule a virtual appointment.
                </p>
              </div>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="card">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {location.name}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-start">
                        <FaMapMarkerAlt className="mr-3 mt-1 text-primary-600 flex-shrink-0" />
                        {location.address}
                      </p>
                      <p className="flex items-center">
                        <FaPhone className="mr-3 text-primary-600 flex-shrink-0" />
                        <a href={`tel:${location.phone}`} className="hover:text-primary-600 transition">
                          {location.phone}
                        </a>
                      </p>
                      <p className="flex items-start">
                        <FaClock className="mr-3 mt-1 text-primary-600 flex-shrink-0" />
                        {location.hours}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FaMapMarkerAlt className="text-5xl mx-auto mb-3" />
                    <p className="font-semibold">Interactive Map</p>
                    <p className="text-sm">1132 28th Ave S, Moorhead, MN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
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
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

