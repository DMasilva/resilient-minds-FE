import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBrain, 
  FaHome, 
  FaUsers, 
  FaHandHoldingHeart,
  FaUserMd,
  FaPeopleCarry,
  FaHeartbeat,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaAward,
  FaPhone,
  FaCalendarAlt,
  FaClipboardList,
  FaLightbulb
} from 'react-icons/fa';
import { ImageWithLoader } from '../components/LoadingSpinner';
import wellLitHouse from '../images/well_lit_house.png';
import twoPeopleWalking from '../images/two_people_walking.png';
import plantSprouting from '../images/plant_sprouting.png';
import peopleSeatedTogether from '../images/people_seated_together.png';

const Services = () => {
  const mainServices = [
    {
      icon: <FaBrain className="text-5xl" />,
      title: 'Adult Rehabilitative Mental Health Services (ARMHS)',
      shortDesc: 'Comprehensive mental health rehabilitation for adults',
      description: 'ARMHS provides individualized mental health rehabilitation services to help adults develop and enhance psychiatric stability, social competencies, personal and emotional adjustment, and independent living and community skills.',
      features: [
        'Individual skill development',
        'Symptom management strategies',
        'Community integration support',
        'Independent living skills training',
        'Crisis prevention planning',
        'Medication management education'
      ],
      eligibility: [
        'Adults 18 years and older',
        'Diagnosed with a mental health condition',
        'Difficulty with daily living activities',
        'Need support to maintain community living'
      ]
    },
    {
      icon: <FaHome className="text-5xl" />,
      title: 'Housing Stabilization Services',
      shortDesc: 'Support for maintaining stable housing',
      description: 'Our Housing Stabilization Services help individuals with mental health conditions secure and maintain stable housing, creating a foundation for recovery and independence.',
      features: [
        'Housing search assistance',
        'Landlord communication support',
        'Housing sustainability planning',
        'Tenant rights education',
        'Budget and financial planning',
        'Emergency housing resources'
      ],
      eligibility: [
        'At risk of homelessness',
        'Recently homeless',
        'Experiencing housing instability',
        'Mental health diagnosis affecting housing'
      ]
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: 'Individual & Group Therapy',
      shortDesc: 'Professional counseling tailored to your needs',
      description: 'Our licensed therapists provide evidence-based individual and group therapy sessions to address a wide range of mental health concerns in a supportive, confidential environment.',
      features: [
        'Cognitive Behavioral Therapy (CBT)',
        'Dialectical Behavior Therapy (DBT)',
        'Trauma-focused therapy',
        'Depression and anxiety treatment',
        'Stress management',
        'Relationship counseling'
      ],
      eligibility: [
        'Open to all adults seeking support',
        'No specific diagnosis required',
        'Insurance and self-pay options available',
        'Virtual and in-person sessions'
      ]
    },
    {
      icon: <FaHandHoldingHeart className="text-5xl" />,
      title: 'Crisis Intervention Services',
      shortDesc: 'Immediate support during mental health emergencies',
      description: 'Our crisis intervention team provides immediate assessment, support, and stabilization services for individuals experiencing mental health emergencies.',
      features: [
        '24/7 crisis hotline access',
        'Emergency assessment',
        'Safety planning',
        'Referral coordination',
        'Family support and education',
        'Follow-up care planning'
      ],
      eligibility: [
        'Anyone experiencing a mental health crisis',
        'Individuals at risk of harm',
        'Family members seeking help',
        'Walk-ins welcome'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <FaUserMd />,
      title: 'Psychiatric Consultation',
      description: 'Medication evaluation and management by licensed psychiatrists'
    },
    {
      icon: <FaPeopleCarry />,
      title: 'Case Management',
      description: 'Coordination of care and community resource navigation'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Wellness Programs',
      description: 'Holistic programs focusing on physical and mental wellbeing'
    },
    {
      icon: <FaChartLine />,
      title: 'Skills Development',
      description: 'Life skills training for personal and professional growth'
    }
  ];

  const insuranceProviders = [
    'Medical Assistance (MA)',
    'Medicare',
    'Blue Cross Blue Shield',
    'HealthPartners',
    'Medica',
    'UCare',
    'PreferredOne',
    'Self-Pay Options'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithLoader
            src={peopleSeatedTogether} 
            alt="Mental health services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-secondary-900/95"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-white text-center section-padding py-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
            <FaHeartbeat className="text-2xl" />
            <span className="font-semibold text-lg uppercase tracking-wider">Comprehensive Care</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-100 leading-relaxed mb-12">
            Comprehensive mental health services designed to support your journey 
            toward wellness, independence, and a fulfilling life.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
              <FaAward className="text-3xl" />
              <span className="font-semibold">Evidence-Based</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
              <FaShieldAlt className="text-3xl" />
              <span className="font-semibold">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl">
              <FaStar className="text-3xl" />
              <span className="font-semibold">Compassionate Care</span>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 text-white">
            <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaLightbulb />
                What We Provide
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional mental health services tailored to your unique needs and goals
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image Side */}
                  <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      {index === 0 && (
                        <ImageWithLoader
                          src={twoPeopleWalking} 
                          alt="ARMHS - Support and guidance" 
                          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      {index === 1 && (
                        <ImageWithLoader
                          src={wellLitHouse} 
                          alt="Housing Stabilization - Safe and stable home" 
                          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      {index === 2 && (
                        <ImageWithLoader
                          src={plantSprouting} 
                          alt="Therapy - Growth and healing" 
                          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      {index === 3 && (
                        <ImageWithLoader
                          src={peopleSeatedTogether} 
                          alt="Crisis Intervention - Immediate support" 
                          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 text-white rounded-2xl mb-6 shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl mb-6 border-l-4 border-primary-600">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        What We Offer
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6 shadow-lg mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Who Can Benefit
                      </h4>
                      <ul className="space-y-3">
                        {service.eligibility.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-bold hover:from-primary-700 hover:to-secondary-700 transition shadow-xl group"
                    >
                      Schedule a Consultation
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaHeartbeat />
                Complementary Support
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to support your comprehensive care and overall wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 text-center border-2 border-gray-100 hover:border-primary-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-2xl mb-6 text-3xl group-hover:scale-110 transition-transform shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaClipboardList />
                Getting Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to begin your mental health journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', icon: <FaPhone />, title: 'Contact Us', desc: 'Call or fill out our online form to schedule an appointment', color: 'from-blue-500 to-blue-600' },
              { step: '2', icon: <FaUserMd />, title: 'Initial Assessment', desc: 'Meet with our team for a comprehensive evaluation', color: 'from-green-500 to-green-600' },
              { step: '3', icon: <FaClipboardList />, title: 'Personalized Plan', desc: 'Receive a customized treatment plan tailored to your needs', color: 'from-purple-500 to-purple-600' },
              { step: '4', icon: <FaHeartbeat />, title: 'Begin Treatment', desc: 'Start your journey with ongoing support and care', color: 'from-red-500 to-red-600' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 text-center h-full border-2 border-gray-100 hover:border-primary-300">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg`}>
                      {item.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-xl mb-6 text-2xl mt-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Connector Arrow */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <FaArrowRight className="text-3xl text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Below Steps */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Begin?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Take the first step today - our team is here to help you every step of the way
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-4 rounded-xl font-bold hover:from-primary-700 hover:to-secondary-700 transition shadow-xl inline-flex items-center justify-center gap-3"
                >
                  <FaCalendarAlt />
                  Request an Appointment
                </Link>
                <a 
                  href="tel:612-443-9032" 
                  className="bg-white text-primary-700 px-10 py-4 rounded-xl font-bold border-2 border-primary-600 hover:bg-primary-50 transition inline-flex items-center justify-center gap-3"
                >
                  <FaPhone />
                  (612) 443-9032
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithLoader
            src={twoPeopleWalking} 
            alt="Accessible mental health care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-secondary-900/95"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-white">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
                Affordable Care
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Insurance & Payment Options
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make quality care accessible
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {insuranceProviders.map((provider, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition border border-white/20 hover:border-white/40"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-3xl text-white" />
                </div>
                <p className="font-bold text-lg">{provider}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Insurance?</h3>
            <p className="text-lg text-primary-100 mb-6">
              Contact us - we may still be able to help! We also offer sliding scale fees and self-pay options.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition shadow-xl"
            >
              <FaCheckCircle />
              Check Your Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-12 lg:p-16 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                  Our compassionate team is here to support you. Reach out today to learn more 
                  about our services and schedule your first appointment. Your journey to wellness starts now.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <FaShieldAlt className="text-3xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">100% Confidential</p>
                      <p className="text-primary-100 text-sm">Your privacy is our priority</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <FaAward className="text-3xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Licensed Professionals</p>
                      <p className="text-primary-100 text-sm">Expert, compassionate care</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition shadow-xl inline-flex items-center justify-center gap-3"
                  >
                    <FaCalendarAlt />
                    Request Appointment
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <a 
                    href="tel:612-443-9032" 
                    className="bg-primary-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-800 transition border-2 border-white/30 inline-flex items-center justify-center gap-3"
                  >
                    <FaPhone />
                    (612) 443-9032
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-full min-h-[400px] lg:min-h-0 hidden lg:block">
                <ImageWithLoader
                  src={peopleSeatedTogether} 
                  alt="Start your journey" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

