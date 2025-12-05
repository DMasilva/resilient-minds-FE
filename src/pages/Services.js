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
  FaArrowRight
} from 'react-icons/fa';
import wellLitHouse from '../images/well_lit_house.png';
import twoPeopleWalking from '../images/two_people_walking.png';
import plantSprouting from '../images/plant_sprouting.png';

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
      <section className="gradient-bg text-white section-padding py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
            Comprehensive mental health services designed to support your journey 
            toward wellness, independence, and a fulfilling life.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  {index === 0 && (
                    <img 
                      src={twoPeopleWalking} 
                      alt="ARMHS - Support and guidance" 
                      className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src={wellLitHouse} 
                      alt="Housing Stabilization - Safe and stable home" 
                      className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                    />
                  )}
                  {index === 2 && (
                    <img 
                      src={plantSprouting} 
                      alt="Therapy - Growth and healing" 
                      className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                    />
                  )}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition group"
                  >
                    Schedule a Consultation
                    <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-primary-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      What We Offer
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Who Can Benefit
                    </h3>
                    <ul className="space-y-3">
                      {service.eligibility.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className="text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complementary services to support your comprehensive care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4 text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to begin your mental health journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Contact Us', desc: 'Call or fill out our online form to schedule an appointment' },
              { step: '2', title: 'Initial Assessment', desc: 'Meet with our team for a comprehensive evaluation' },
              { step: '3', title: 'Personalized Plan', desc: 'Receive a customized treatment plan tailored to your needs' },
              { step: '4', title: 'Begin Treatment', desc: 'Start your journey with ongoing support and care' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We accept most major insurance plans and offer flexible payment options
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {insuranceProviders.map((provider, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition"
              >
                <FaCheckCircle className="text-3xl mx-auto mb-3 text-primary-200" />
                <p className="font-semibold">{provider}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-primary-100 mb-6">
              Don't see your insurance? Contact us - we may still be able to help!
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Check Your Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to support you. Reach out today to learn more 
            about our services and schedule your first appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request an Appointment
            </Link>
            <a href="tel:612-443-9032" className="btn-secondary">
              Call: (612) 443-9032
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

