import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaHome, 
  FaUsers, 
  FaBrain,
  FaHandHoldingHeart,
  FaArrowRight,
  FaQuoteLeft,
  FaCheckCircle,
  FaPhone,
  FaCalendarAlt,
  FaShieldAlt,
  FaStar,
  FaAward,
  FaHandsHelping,
  FaLightbulb,
  FaUserMd,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { ImageWithLoader } from '../components/LoadingSpinner';
import twoPeopleWalking from '../images/two_people_walking.png';
import plantSprouting from '../images/plant_sprouting.png';
import peopleSeatedTogether from '../images/people_seated_together.png';
import wellLitHouse from '../images/well_lit_house.png';
import erikaYoney from '../images/erika.png';

const Home = () => {
  const services = [
    {
      icon: <FaBrain className="text-4xl" />,
      title: 'Adult Rehabilitative Mental Health (ARMHS)',
      description: 'Comprehensive mental health rehabilitation programs designed to help adults manage and overcome mental health challenges.',
      link: '/services'
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Housing Stabilization Services',
      description: 'Support services to help individuals maintain stable housing and create a safe, supportive living environment.',
      link: '/services'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Individual & Group Therapy',
      description: 'Professional counseling services tailored to your needs, available in individual or group settings.',
      link: '/services'
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl" />,
      title: 'Crisis Intervention',
      description: '24/7 crisis support to provide immediate assistance during mental health emergencies.',
      link: '/services'
    }
  ];

  const serviceAreas = [
    'Clay County, MN',
    'Becker County, MN',
    'Ottertail County, MN',
    'Polk County, MN',
    'Hennepin County, MN',
    'Ramsey County, MN',
    'Anoka County, MN'
  ];

  const whyChooseUs = [
    'Experienced and licensed mental health professionals',
    'Personalized treatment plans tailored to your needs',
    'Compassionate, judgment-free environment',
    'Flexible scheduling including evening and weekend appointments',
    'Insurance and sliding scale options available',
    'Evidence-based treatment approaches'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom section-padding py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-block mb-6">
                <span className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Trusted Mental Health Care Since 2019
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Journey to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-300">
                  Mental Wellness
                </span>
                Starts Here
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                Comprehensive mental health services designed to help you achieve independence, 
                resilience, and lasting peace of mind.
              </p>

              {/* Quick Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact" 
                  className="group bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt />
                  Schedule Appointment
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <a 
                  href="tel:612-443-9032" 
                  className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition border-2 border-white/30 flex items-center justify-center gap-2"
                >
                  <FaPhone />
                  (612) 443-9032
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-green-400 text-xl" />
                  <span className="text-sm text-primary-100">100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400 text-xl" />
                  <span className="text-sm text-primary-100">Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="text-blue-400 text-xl" />
                  <span className="text-sm text-primary-100">Evidence-Based Care</span>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="mt-6 bg-red-600/20 border-2 border-red-400 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-white font-medium">
                  <span className="text-red-300">🆘 Crisis Support:</span> Call or text <strong>988</strong> for immediate help - Available 24/7
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10">
                  <ImageWithLoader
                    src={peopleSeatedTogether} 
                    alt="Supportive therapy environment" 
                    className="rounded-2xl shadow-2xl w-full object-cover"
                  />
                </div>
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 z-20">
                  <div className="text-4xl font-bold text-primary-600 mb-1">500+</div>
                  <div className="text-gray-600 text-sm font-medium">Lives Changed Annually</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-2xl p-6 z-20 text-white">
                  <div className="text-4xl font-bold mb-1">7</div>
                  <div className="text-green-100 text-sm font-medium">Counties Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="text-white text-center">
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mb-2 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Visual Impact */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <ImageWithLoader
                src={wellLitHouse} 
                alt="Peaceful and supportive environment" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-xl p-6 shadow-2xl max-w-xs">
                <FaLightbulb className="text-4xl mb-3" />
                <p className="font-semibold text-lg">Our Mission</p>
                <p className="text-sm text-primary-100 mt-2">
                  Empowering you to achieve mental wellness and independence
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Resilient Minds</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Compassionate Care,
                <span className="text-gradient block">Lasting Results</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Since 2019, Resilient Minds has been dedicated to providing comprehensive mental health 
                services that transform lives. Based in Moorhead, Minnesota, we serve Northwestern Minnesota 
                and the Metro Area with a commitment to excellence, compassion, and evidence-based treatment.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our approach goes beyond treating symptoms - we partner with you to build resilience, 
                develop coping strategies, and create a sustainable path toward mental wellness and independence.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 bg-primary-50 rounded-lg p-4">
                  <FaCheckCircle className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Whole Person Care</p>
                    <p className="text-sm text-gray-600">Physical, social & spiritual wellbeing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-secondary-50 rounded-lg p-4">
                  <FaCheckCircle className="text-secondary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Expert Leadership</p>
                    <p className="text-sm text-gray-600">Board-certified clinical supervision</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn-primary inline-flex items-center gap-2 group">
                Discover Our Story
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Mental Health Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From therapy and rehabilitation to housing support and crisis intervention - 
              we're here for every step of your mental health journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-secondary-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition group/link"
                  >
                    Learn More
                    <FaArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-transparent rounded-bl-full"></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Service is Right for You?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect fit for your mental health needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Explore All Services
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Leadership Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-700 to-secondary-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-full min-h-[500px] lg:min-h-0">
                <ImageWithLoader
                  src={erikaYoney} 
                  alt="Dr. Erika Yoney - Clinical Supervisor" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent lg:bg-gradient-to-r"></div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 text-white relative">
                <div className="inline-block mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    Meet Our Clinical Supervisor
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Dr. Erika Yoney
                </h2>
                <p className="text-2xl text-primary-200 font-semibold mb-6">
                  PMHNP-BC, DNP
                </p>

                <p className="text-xl text-primary-100 leading-relaxed mb-6">
                  "I'm committed to providing high quality, whole person mental health services. 
                  My approach honors the unique needs of each patient across their lifetime."
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FaAward className="text-yellow-400 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Board Certified</p>
                      <p className="text-primary-200 text-sm">American Nurses Credentialing Center (ANCC)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaUsers className="text-blue-400 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Specializes In</p>
                      <p className="text-primary-200 text-sm">Children, Adolescents & Family Mental Health</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaLightbulb className="text-green-400 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Expert in</p>
                      <p className="text-primary-200 text-sm">Prevention, Early Intervention & Holistic Care</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition group"
                >
                  Learn More About Dr. Yoney
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">The Resilient Minds Difference</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience compassionate, evidence-based care from a team dedicated to your lasting wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-primary-600"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                      <FaCheckCircle className="text-white text-2xl" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-lg leading-relaxed">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
              <FaQuoteLeft className="text-primary-600 text-5xl mb-6 opacity-50" />
              <p className="text-2xl text-gray-700 italic leading-relaxed mb-6">
                "The team at Resilient Minds changed my life. Their compassionate approach 
                and evidence-based treatments helped me overcome challenges I never thought 
                I could face. I'm forever grateful."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Sarah M.</p>
                  <p className="text-gray-600">Client since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Where We Serve
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Serving Communities Across Minnesota
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              From Northwestern Minnesota to the Twin Cities Metro Area - bringing quality mental health care to your community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all border border-white/20 hover:border-white/40"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-3xl text-white" />
                </div>
                <p className="font-semibold text-lg">{area}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <p className="text-lg text-primary-100 mb-4">
              Don't see your area listed? We may still be able to help!
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-200 transition"
            >
              Contact Us to Inquire
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Strong Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Take the First Step?
                </h2>
                <p className="text-xl text-accent-100 mb-8 leading-relaxed">
                  Your journey to better mental health starts today. Our compassionate team 
                  is ready to support you with evidence-based care tailored to your unique needs.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <FaCalendarAlt className="text-3xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Flexible Scheduling</p>
                      <p className="text-accent-100 text-sm">Evening and weekend appointments available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <FaShieldAlt className="text-3xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">100% Confidential</p>
                      <p className="text-accent-100 text-sm">Your privacy is our top priority</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <FaHandsHelping className="text-3xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Insurance Accepted</p>
                      <p className="text-accent-100 text-sm">Sliding scale options available</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-accent-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaCalendarAlt />
                    Schedule Appointment
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <a 
                    href="tel:612-443-9032" 
                    className="bg-accent-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-800 transition border-2 border-white/30 flex items-center justify-center gap-2"
                  >
                    <FaPhone />
                    (612) 443-9032
                  </a>
                </div>
              </div>

              {/* Image/Visual */}
              <div className="relative h-full min-h-[400px] lg:min-h-0 hidden lg:block">
                <ImageWithLoader
                  src={twoPeopleWalking} 
                  alt="Moving forward together" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Crisis Banner */}
          <div className="mt-12 bg-red-600 text-white rounded-2xl p-8 text-center shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <FaPhone className="text-3xl" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">In Crisis? Help is Available 24/7</p>
                <p className="text-red-100 text-lg">You're not alone. Support is just a call away.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:988" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-50 transition inline-flex items-center gap-2"
              >
                <FaPhone />
                Call or Text: 988
              </a>
              <Link 
                to="/resources" 
                className="text-white font-semibold hover:text-red-100 transition inline-flex items-center gap-2"
              >
                More Crisis Resources
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

