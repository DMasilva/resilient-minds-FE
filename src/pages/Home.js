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
  FaCheckCircle
} from 'react-icons/fa';
import twoPeopleWalking from '../images/two_people_walking.png';
import plantSprouting from '../images/plant_sprouting.png';

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${plantSprouting})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom section-padding py-32 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
              Mental Health Support When You Need It Most
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-100 mb-8 drop-shadow-md">
              Comprehensive adult mental health services dedicated to promoting peaceful, 
              independent living and unlocking your full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-4">
                Request an Appointment
              </Link>
              <Link to="/services" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaHeart className="text-accent-400 mr-2" />
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle className="text-green-400 mr-2" />
                <span className="text-sm font-medium">Licensed Professionals</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-primary-100">Lives Changed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-primary-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-sm text-primary-100">Counties Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-primary-100">Confidential</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="text-white text-center">
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mb-2 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
            <p className="text-sm">Scroll to learn more</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-gradient">Resilient Minds</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Resilient Minds is a comprehensive adult mental health center established with the goal 
              of providing competent and effective rehabilitation programs for patients of all ages. 
              Based in Moorhead, Minnesota, we serve Northwestern Minnesota and the Metro Area, 
              helping individuals build resilience and achieve lasting mental wellness.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition group">
              Learn More About Us
              <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive mental health services designed to support your journey 
              toward wellness and independence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition group"
                >
                  Learn More
                  <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Resilient Minds?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Resilient Minds, we believe in providing compassionate, evidence-based care 
                that empowers individuals to take control of their mental health journey. 
                Our experienced team is dedicated to your success.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <img 
                  src={plantSprouting} 
                  alt="Plant sprouting - growth and healing" 
                  className="w-32 h-32 object-contain mx-auto mb-6"
                />
                <FaQuoteLeft className="text-primary-600 text-3xl mb-4" />
                <p className="text-lg text-gray-700 italic mb-6">
                  "The team at Resilient Minds changed my life. Their compassionate approach 
                  and evidence-based treatments helped me overcome challenges I never thought 
                  I could face. I'm forever grateful."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Client since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Areas We Cover
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Providing services to Northwestern Minnesota and the Metro Area
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition"
              >
                <FaHome className="text-3xl mx-auto mb-3 text-primary-200" />
                <p className="font-semibold">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-400 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-accent-100">
            Take the first step towards better mental health. Our team is ready to support you 
            with compassionate, professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-accent-700 hover:bg-gray-100">
              Request an Appointment
            </Link>
            <a href="tel:612-443-9032" className="btn-secondary border-white text-accent-700">
              Call Us: (612) 443-9032
            </a>
          </div>
          <p className="mt-8 text-sm text-accent-200">
            Crisis? Call 988 for immediate support - Available 24/7
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

