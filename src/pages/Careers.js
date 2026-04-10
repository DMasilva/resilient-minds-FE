import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBriefcase, 
  FaGraduationCap,
  FaDollarSign,
  FaCalendarAlt,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaAngleDown,
  FaAngleUp
} from 'react-icons/fa';

const JobCard = ({ position }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Card Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {position.title}
            </h3>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                <FaBriefcase className="text-xs" />
                {position.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                <FaMapMarkerAlt className="text-xs" />
                {position.location}
              </span>
              {position.schedule && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium">
                  <FaCalendarAlt className="text-xs" />
                  {position.schedule}
                </span>
              )}
              {position.salary && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                  <FaDollarSign className="text-xs" />
                  {position.salary}
                </span>
              )}
            </div>
          </div>
          
          {/* Apply Button */}
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Apply Now
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>

      {/* Expandable Content */}
      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-left group mb-4"
        >
          <span className="text-lg font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">
            {isExpanded ? 'Hide Details' : 'View Job Details'}
          </span>
          {isExpanded ? (
            <FaAngleUp className="text-gray-400 group-hover:text-primary-600 transition-colors" />
          ) : (
            <FaAngleDown className="text-gray-400 group-hover:text-primary-600 transition-colors" />
          )}
        </button>

        {isExpanded && (
          <div className="space-y-6 pt-4 border-t border-gray-100 animate-fadeIn">
            {/* Requirements */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary-600 rounded"></span>
                Requirements
              </h4>
              <ul className="space-y-2.5">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-secondary-600 rounded"></span>
                Key Responsibilities
              </h4>
              <ul className="space-y-2.5">
                {position.responsibilities.slice(0, 6).map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                    <FaCheckCircle className="text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
                {position.responsibilities.length > 6 && (
                  <li className="text-gray-500 text-sm italic ml-6">
                    + {position.responsibilities.length - 6} more responsibilities
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Careers = () => {
  const benefits = [
    {
      icon: <FaDollarSign />,
      title: 'Competitive Salary',
      description: 'Competitive compensation packages with regular reviews'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling and generous PTO'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Professional Development',
      description: 'Continuing education and training opportunities'
    },
    {
      icon: <FaHandshake />,
      title: 'Supportive Culture',
      description: 'Collaborative team environment focused on wellness'
    }
  ];

  const openPositions = [
    {
      title: 'Clinical Supervisor',
      type: 'Full-Time',
      location: 'Moorhead, MN',
      schedule: null,
      salary: null,
      requirements: [
        'Licensed mental health professional (LPCC, LICSW, LMFT, or psychologist)',
        'Experience with serious and persistent mental illness (SPMI)',
        'Knowledge of ARMHS rules (MN Statute 256B.0623)',
        'Supervisory experience preferred or required',
        'Strong understanding of state and Medicaid requirements',
        'Excellent clinical judgment and decision-making skills'
      ],
      responsibilities: [
        'Review and approve client assessments and treatment plans',
        'Ensure services align with medical necessity and ARMHS standards',
        'Monitor interventions for schizophrenia, bipolar disorder, and major depressive disorder',
        'Supervise ARMHS practitioners/clinicians (weekly or biweekly)',
        'Provide clinical direction, coaching, and performance feedback',
        'Review and sign off on functional assessments, treatment plans, and progress notes',
        'Ensure documentation meets state and Medicaid requirements',
        'Develop and improve ARMHS programming and quality assurance processes',
        'Coordinate care with psychiatrists, case managers, and other providers',
        'Provide consultation during client crises and guide emergency protocols',
        'Prepare for audits and maintain regulatory compliance',
        'Support staff professional development and training'
      ]
    },
    {
      title: 'Mental Health Practitioner',
      type: 'Full-Time / Part-Time',
      location: 'Moorhead & Metro Area',
      schedule: null,
      salary: null,
      requirements: [
        "Bachelor's degree in psychology, social work, or related behavioral health field",
        'Meet Minnesota Mental Health Practitioner qualifications',
        'Experience working with adults with mental illness preferred',
        'Valid driver\'s license and reliable transportation',
        'Ability to work flexible hours including evenings and weekends',
        'Strong interpersonal and communication skills',
        'Ability to work independently and as part of a team'
      ],
      responsibilities: [
        'Provide individual mental health services in home and community settings',
        'Conduct functional assessments and develop individualized treatment plans',
        'Implement evidence-based interventions and skill-building activities',
        'Assist clients with symptom management and coping strategies',
        'Support clients with daily living skills and community integration',
        'Document services and maintain accurate, timely progress notes',
        'Coordinate care with clinical supervisor and treatment team',
        'Monitor client progress and adjust interventions as needed',
        'Provide crisis intervention and safety planning when necessary',
        'Participate in regular supervision and team meetings',
        'Ensure compliance with ARMHS standards and ethical guidelines',
        'Build therapeutic relationships focused on recovery and wellness'
      ]
    },
    {
      title: 'Administrative Assistant',
      type: 'Full-Time',
      location: 'Moorhead, MN',
      schedule: '9 AM - 5 PM',
      salary: '$19/hour',
      requirements: [
        'High school diploma or equivalent required',
        'Proficient in Microsoft Office Suite (Word, Excel, Outlook)',
        'Excellent written and verbal communication skills',
        'Strong organizational and time management abilities',
        'Professional phone etiquette and customer service skills',
        'Ability to maintain confidentiality and handle sensitive information',
        'Previous administrative or office experience preferred'
      ],
      responsibilities: [
        'Answer and direct phone calls, emails, and correspondence',
        'Schedule appointments and manage office calendar',
        'Maintain client files and ensure accurate documentation',
        'Greet clients and visitors in a warm, professional manner',
        'Process insurance verification and billing support',
        'Assist with data entry and record keeping',
        'Support clinical staff with administrative tasks',
        'Manage office supplies and maintain organized workspace'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Cleaner, More Modern */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container-custom relative py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <FaBriefcase />
              <span>We're Hiring</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Help us transform lives through compassionate mental health care. We're looking for dedicated professionals to join our growing team.
            </p>
            <a 
              href="#openings" 
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-lg"
            >
              View Open Positions
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Open Positions - Clean Card Design */}
      <section id="openings" className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current opportunities and find the perfect role for you
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <JobCard key={index} position={position} />
            ))}
          </div>

          {/* General Application CTA */}
          <div className="mt-12 text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Don't see the right fit?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                Submit Your Resume
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Cleaner Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Resilient Minds?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than just a job—a meaningful career with purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyJoinUs.map((reason, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-100 hover:border-primary-200 transition-colors"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Modern Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our team's wellbeing and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 text-white rounded-lg flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process - Simplified */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Application Process
            </h2>
            <p className="text-xl text-primary-100">
              Four easy steps to join our team
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application' },
              { step: '2', title: 'Review', desc: 'We review your qualifications' },
              { step: '3', title: 'Interview', desc: 'Meet with our team' },
              { step: '4', title: 'Join', desc: 'Welcome aboard!' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-white text-primary-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-100 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-white/20"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start Your Application
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
