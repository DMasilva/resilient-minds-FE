import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBriefcase, 
  FaHeart, 
  FaUsers,
  FaGraduationCap,
  FaDollarSign,
  FaCalendarAlt,
  FaAward,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const Careers = () => {
  const benefits = [
    {
      icon: <FaDollarSign className="text-3xl" />,
      title: 'Competitive Salary',
      description: 'Competitive compensation packages with regular reviews'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling and generous PTO'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Professional Development',
      description: 'Continuing education and training opportunities'
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Retirement Plan',
      description: '401(k) with employer matching'
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Supportive Culture',
      description: 'Collaborative team environment focused on wellness'
    }
  ];

  const openPositions = [
    {
      title: 'Licensed Mental Health Therapist',
      type: 'Full-Time',
      location: 'Moorhead, MN',
      requirements: [
        'Licensed as LICSW, LPCC, or LP in Minnesota',
        '2+ years of clinical experience preferred',
        'Experience with adult mental health populations',
        'Strong assessment and treatment planning skills'
      ],
      responsibilities: [
        'Provide individual and group therapy',
        'Conduct comprehensive assessments',
        'Develop and implement treatment plans',
        'Collaborate with multidisciplinary team'
      ]
    },
    {
      title: 'ARMHS Practitioner',
      type: 'Full-Time / Part-Time',
      location: 'Moorhead, MN & Metro Area',
      requirements: [
        "Bachelor's degree in related field",
        'Experience in mental health services',
        'Valid driver\'s license and reliable transportation',
        'Ability to work flexible hours'
      ],
      responsibilities: [
        'Provide in-home and community-based services',
        'Assist clients with skill development',
        'Document client progress and outcomes',
        'Coordinate with treatment team'
      ]
    },
    {
      title: 'Case Manager',
      type: 'Full-Time',
      location: 'Moorhead, MN',
      requirements: [
        "Bachelor's degree in social work or related field",
        'Experience in case management',
        'Strong organizational skills',
        'Knowledge of community resources'
      ],
      responsibilities: [
        'Coordinate client services and resources',
        'Conduct home visits and assessments',
        'Maintain accurate documentation',
        'Advocate for client needs'
      ]
    },
    {
      title: 'Housing Stabilization Specialist',
      type: 'Full-Time',
      location: 'Metro Area',
      requirements: [
        'Experience in housing services or social work',
        'Knowledge of housing resources and tenant rights',
        'Strong communication skills',
        'Bachelor\'s degree preferred'
      ],
      responsibilities: [
        'Assist clients with housing search and applications',
        'Provide landlord negotiation support',
        'Develop housing sustainability plans',
        'Connect clients with community resources'
      ]
    }
  ];

  const whyJoinUs = [
    'Make a meaningful difference in people\'s lives every day',
    'Work with a passionate, dedicated team of professionals',
    'Access to ongoing training and professional development',
    'Supportive supervision and mentorship',
    'Collaborative, non-hierarchical work environment',
    'Opportunities for career advancement'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Build a rewarding career making a real difference in mental health care. 
                We're looking for compassionate professionals to join our growing team.
              </p>
              <a href="#openings" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                View Open Positions
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <FaUsers className="text-3xl text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Great Team</h3>
                      <p className="text-primary-100">Collaborative culture</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <FaHeart className="text-3xl text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Make Impact</h3>
                      <p className="text-primary-100">Change lives daily</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-3xl text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Grow Skills</h3>
                      <p className="text-primary-100">Ongoing training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at Resilient Minds?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than just a job - it's a calling to make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {whyJoinUs.map((reason, index) => (
              <div key={index} className="flex items-start bg-primary-50 rounded-xl p-6">
                <FaCheckCircle className="text-green-500 text-2xl mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our team members' wellbeing and professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our team and help transform lives through compassionate mental health care
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="card hover:shadow-2xl">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        <FaBriefcase className="mr-2" />
                        {position.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                        <FaMapMarkerAlt className="mr-2" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="btn-primary whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-secondary-600 mr-2 mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <Link to="/contact" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition group">
              Send us your resume
              <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Application Process
            </h2>
            <p className="text-xl text-primary-100">
              Simple steps to join our team
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application and resume' },
              { step: '2', title: 'Review', desc: 'We review your qualifications' },
              { step: '3', title: 'Interview', desc: 'Meet with our team' },
              { step: '4', title: 'Join Us', desc: 'Welcome to the team!' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-white text-primary-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-100">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/30"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FaMapMarkerAlt = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
  </svg>
);

export default Careers;

