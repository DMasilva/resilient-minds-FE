import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaComments,
  FaHandshake,
  FaQuestionCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import { ImageWithLoader } from '../components/LoadingSpinner';
import wellLitHouse from '../images/well_lit_house.png';
import peopleSeatedTogether from '../images/people_seated_together.png';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      details: ['(612) 443-9032', 'Mon-Fri: 8:00 AM - 6:00 PM'],
      link: 'tel:612-443-9032',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      details: ['resilientmindsolutionllc@gmail.com', 'We respond within 24 hours'],
      link: 'mailto:resilientmindsolutionllc@gmail.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Main Office',
      details: ['1132 28th Ave S', 'Moorhead, MN 56560'],
      link: 'https://maps.google.com/?q=1132+28th+Ave+S,+Moorhead,+MN+56560',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      link: null,
      color: 'from-orange-500 to-orange-600'
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
          <ImageWithLoader
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
            <a 
              href="tel:612-443-9032" 
              className="group bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-50 transition shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <FaPhone className="text-2xl group-hover:scale-110 transition-transform" />
              Call Us Now
            </a>
            <a 
              href="mailto:resilientmindsolutionllc@gmail.com" 
              className="bg-primary-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-600 transition border-2 border-white/30 inline-flex items-center justify-center gap-3"
            >
              <FaEnvelope className="text-2xl" />
              Email Us
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
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${info.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
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

          {/* Direct Contact CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl shadow-2xl p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <FaHandshake className="text-6xl mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Contact us directly to learn more about our services or schedule an appointment. 
                We're here to answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:612-443-9032" 
                  className="bg-white text-primary-700 px-12 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition shadow-2xl inline-flex items-center justify-center gap-4"
                >
                  <FaPhone className="text-2xl" />
                  Call (612) 443-9032
                </a>
                <a 
                  href="mailto:resilientmindsolutionllc@gmail.com" 
                  className="bg-primary-700 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-primary-800 transition border-2 border-white inline-flex items-center justify-center gap-4"
                >
                  <FaEnvelope className="text-2xl" />
                  Send Email
                </a>
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
                <ImageWithLoader
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
    </div>
  );
};

export default Contact;
