import React from 'react';
import { 
  FaPhone, 
  FaExternalLinkAlt,
  FaBook,
  FaVideo,
  FaHeadphones,
  FaFileDownload,
  FaUsers,
  FaHeart,
  FaExclamationTriangle,
  FaLifeRing,
  FaComments,
  FaHandHoldingHeart,
  FaGraduationCap,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa';
import { ImageWithLoader } from '../components/LoadingSpinner';
import peopleSeatedTogether from '../images/people_seated_together.png';
import wellLitHouse from '../images/well_lit_house.png';
import twoPeopleWalking from '../images/two_people_walking.png';

const Resources = () => {
  const crisisResources = [
    {
      name: '988 Suicide & Crisis Lifeline',
      phone: '988',
      description: '24/7 free and confidential support for people in distress',
      link: 'https://988lifeline.org/'
    },
    {
      name: 'Crisis Text Line',
      phone: 'Text HOME to 741741',
      description: 'Free 24/7 support for those in crisis',
      link: 'https://www.crisistextline.org/'
    },
    {
      name: 'National Suicide Prevention Lifeline',
      phone: '1-800-273-8255',
      description: 'Talk to a counselor at any time',
      link: 'https://suicidepreventionlifeline.org/'
    },
    {
      name: 'SAMHSA National Helpline',
      phone: '1-800-662-4357',
      description: 'Treatment referral and information service',
      link: 'https://www.samhsa.gov/find-help/national-helpline'
    }
  ];

  const mentalHealthResources = [
    {
      icon: <FaUsers className="text-3xl" />,
      name: 'NAMI (National Alliance on Mental Illness)',
      description: 'Education, support, and advocacy for mental health',
      link: 'https://www.nami.org/'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      name: 'Mental Health America',
      description: 'Tools, resources, and screening for mental health',
      link: 'https://www.mhanational.org/'
    },
    {
      icon: <FaBook className="text-3xl" />,
      name: 'Psychology Today',
      description: 'Find therapists, psychiatrists, and support groups',
      link: 'https://www.psychologytoday.com/'
    },
    {
      icon: <FaVideo className="text-3xl" />,
      name: 'BetterHelp',
      description: 'Online counseling and therapy services',
      link: 'https://www.betterhelp.com/'
    }
  ];

  const localResources = [
    {
      name: 'Minnesota Crisis Line',
      phone: '1-800-273-8255',
      description: 'Statewide crisis support'
    },
    {
      name: 'Clay County Social Services',
      phone: '(218) 299-5200',
      description: 'Local social services and support'
    },
    {
      name: 'Community Health Services',
      phone: '(218) 233-7534',
      description: 'Healthcare and mental health services'
    },
    {
      name: 'West Central Communities Action',
      phone: '(218) 685-4486',
      description: 'Community support and assistance programs'
    }
  ];

  const selfHelpTools = [
    {
      icon: <FaHeadphones className="text-4xl" />,
      title: 'Meditation Apps',
      items: [
        'Headspace - Guided meditation',
        'Calm - Sleep and relaxation',
        'Insight Timer - Free meditation library'
      ]
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: 'Recommended Reading',
      items: [
        'The Body Keeps the Score - Bessel van der Kolk',
        'Lost Connections - Johann Hari',
        'Feeling Good - David Burns'
      ]
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: 'Online Courses',
      items: [
        'Coursera - Psychology courses',
        'Khan Academy - Mental health resources',
        'TED Talks - Mental health speakers'
      ]
    },
    {
      icon: <FaFileDownload className="text-4xl" />,
      title: 'Worksheets & Tools',
      items: [
        'Mood tracking journals',
        'Anxiety management worksheets',
        'Mindfulness exercises'
      ]
    }
  ];

  const supportGroups = [
    {
      name: 'Depression and Bipolar Support Alliance',
      description: 'Peer support groups for mood disorders',
      link: 'https://www.dbsalliance.org/'
    },
    {
      name: 'Anxiety and Depression Association',
      description: 'Support and education for anxiety disorders',
      link: 'https://adaa.org/'
    },
    {
      name: 'Al-Anon Family Groups',
      description: 'Support for families of alcoholics',
      link: 'https://al-anon.org/'
    },
    {
      name: 'SMART Recovery',
      description: 'Self-empowerment addiction recovery support',
      link: 'https://www.smartrecovery.org/'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithLoader
            src={twoPeopleWalking} 
            alt="Support and resources" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-secondary-900/95"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-white text-center section-padding py-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
            <FaLifeRing className="text-2xl" />
            <span className="font-semibold text-lg uppercase tracking-wider">Help & Support</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Mental Health Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-100 leading-relaxed mb-12">
            A comprehensive collection of resources, tools, and support networks 
            to help you on your mental health journey. You're not alone.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:988" 
              className="group bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <FaPhone className="text-2xl group-hover:rotate-12 transition-transform" />
              Crisis: Call 988
            </a>
            <a 
              href="#crisis-resources" 
              className="bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-50 transition shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <FaLifeRing />
              View All Resources
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

      {/* Emergency Alert Banner */}
      <section className="bg-red-600 py-8 relative z-10 -mt-1">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <FaExclamationTriangle className="text-3xl" />
              </div>
              <div>
                <p className="font-bold text-xl mb-1">In Crisis? Immediate Help Available 24/7</p>
                <p className="text-red-100 text-sm">Free, confidential support from trained counselors</p>
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
              <span className="text-white font-semibold self-center">or</span>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg font-bold border-2 border-white/30">
                Text HOME to 741741
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section id="crisis-resources" className="section-padding bg-gradient-to-br from-white to-red-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaShieldAlt />
                Immediate Support
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crisis & Emergency Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immediate help is available 24/7 if you're experiencing a mental health crisis. 
              You don't have to face this alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {crisisResources.map((resource, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 border-red-200 hover:border-red-400">
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
                
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FaPhone className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {resource.name}
                      </h3>
                      <a 
                        href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                        className="text-3xl font-bold text-red-600 hover:text-red-700 transition block mb-3"
                      >
                        {resource.phone}
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  
                  <a 
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition group/link"
                  >
                    Visit Website
                    <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Crisis Info */}
          <div className="mt-12 max-w-4xl mx-auto bg-red-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <FaLifeRing className="text-6xl flex-shrink-0" />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Remember: It's Okay to Ask for Help</h3>
                <p className="text-red-100 text-lg">
                  Crisis counselors are available 24/7 to provide free and confidential support. 
                  Don't wait - reach out now if you need help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Mental Health Resources */}
      <section className="relative section-padding overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaHeart />
                Trusted Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              National Mental Health Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted organizations providing information, support, and advocacy across the nation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentalHealthResources.map((resource, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 text-center border border-gray-100 hover:border-primary-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {resource.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <a 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition group/link"
                >
                  Learn More
                  <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithLoader
                  src={wellLitHouse} 
                  alt="Local Minnesota community" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">Your Local Community</h3>
                  <p className="text-primary-100 text-lg">
                    Supporting Clay County and surrounding Minnesota communities with accessible mental health resources
                  </p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <FaUsers />
                  Community Support
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Local Minnesota Resources
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Community resources in Clay County and the surrounding area
              </p>

              <div className="space-y-4">
                {localResources.map((resource, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-6 border-l-4 border-primary-600 shadow-md hover:shadow-xl transition">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaPhone className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {resource.name}
                        </h3>
                        <a 
                          href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                          className="text-primary-600 hover:text-primary-700 transition font-bold text-lg mb-2 block"
                        >
                          {resource.phone}
                        </a>
                        <p className="text-gray-600">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Help Tools */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaLightbulb />
                Self-Care Tools
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Self-Help Tools & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical tools and resources you can use today to support your mental health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {selfHelpTools.map((tool, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100 hover:border-secondary-300">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {tool.title}
                </h3>
                <ul className="space-y-3">
                  {tool.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-3">
                      <FaCheckCircle className="text-secondary-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Groups */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaComments />
                Peer Support
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Groups & Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with others who understand what you're going through. You're not alone in this journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supportGroups.map((group, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 border-2 border-primary-200 hover:border-primary-400">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {group.name}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </div>
                <a 
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition text-lg group/link"
                >
                  Find a Group
                  <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <FaGraduationCap />
                Learn & Grow
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Educational Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Knowledge is power. Learn more about mental health conditions, treatments, and recovery strategies.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Understanding Depression',
                icon: <FaHeart className="text-4xl" />,
                topics: ['Symptoms and diagnosis', 'Treatment options', 'Coping strategies', 'Supporting loved ones'],
                color: 'blue'
              },
              {
                title: 'Managing Anxiety',
                icon: <FaHandHoldingHeart className="text-4xl" />,
                topics: ['Types of anxiety disorders', 'Relaxation techniques', 'Cognitive behavioral strategies', 'When to seek help'],
                color: 'green'
              },
              {
                title: 'Trauma and PTSD',
                icon: <FaShieldAlt className="text-4xl" />,
                topics: ['Recognizing trauma symptoms', 'Trauma-informed care', 'Healing approaches', 'Building resilience'],
                color: 'purple'
              },
              {
                title: 'Medication Management',
                icon: <FaGraduationCap className="text-4xl" />,
                topics: ['Common psychiatric medications', 'Side effects and concerns', 'Working with your doctor', 'Complementary approaches'],
                color: 'secondary'
              }
            ].map((section, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200 hover:border-primary-300">
                {/* Top Gradient Bar */}
                <div className={`h-2 bg-gradient-to-r ${
                  section.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  section.color === 'green' ? 'from-green-500 to-green-600' :
                  section.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-secondary-500 to-secondary-600'
                }`}></div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                      section.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      section.color === 'green' ? 'from-green-500 to-green-600' :
                      section.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      'from-secondary-500 to-secondary-600'
                    } text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                        <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithLoader
            src={peopleSeatedTogether} 
            alt="Professional mental health support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-secondary-900/95"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
              <FaHandHoldingHeart className="text-2xl" />
              <span className="font-semibold uppercase tracking-wider">Professional Support</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Need Personalized Support?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-100 leading-relaxed">
              Our team at Resilient Minds is here to provide professional, 
              compassionate care tailored to your unique needs. You don't have to navigate this alone.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="/contact" 
                className="group bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-50 transition shadow-2xl inline-flex items-center justify-center gap-3"
              >
                <FaCheckCircle className="text-2xl group-hover:scale-110 transition-transform" />
                Schedule an Appointment
              </a>
              <a 
                href="tel:612-443-9032" 
                className="bg-primary-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-600 transition border-2 border-white/30 inline-flex items-center justify-center gap-3"
              >
                <FaPhone className="text-2xl" />
                (612) 443-9032
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-3xl" />
                <span className="text-sm font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-3xl" />
                <span className="text-sm font-medium">Licensed Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <FaHeart className="text-3xl" />
                <span className="text-sm font-medium">Compassionate Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

