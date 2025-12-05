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
  FaExclamationTriangle
} from 'react-icons/fa';

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
      <section className="gradient-bg text-white section-padding py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mental Health Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
            A comprehensive collection of resources, tools, and support networks 
            to help you on your mental health journey.
          </p>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-accent-600 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left gap-4">
            <FaExclamationTriangle className="text-4xl flex-shrink-0" />
            <div>
              <p className="font-bold text-lg mb-1">If you're in crisis, get help now:</p>
              <p>
                Call <a href="tel:988" className="underline font-semibold hover:text-accent-200">988</a>
                <span className="mx-3">|</span>
                Text HOME to <span className="font-semibold">741741</span>
                <span className="mx-3">|</span>
                Call <a href="tel:1-800-273-8255" className="underline font-semibold hover:text-accent-200">1-800-273-8255</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crisis & Emergency Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immediate help is available 24/7 if you're experiencing a mental health crisis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {crisisResources.map((resource, index) => (
              <div key={index} className="card bg-accent-50 border-2 border-accent-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.name}
                </h3>
                <a 
                  href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                  className="text-2xl font-bold text-accent-600 hover:text-accent-700 transition mb-3 block"
                >
                  <FaPhone className="inline mr-2" />
                  {resource.phone}
                </a>
                <p className="text-gray-700 mb-4">
                  {resource.description}
                </p>
                <a 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition"
                >
                  Visit Website
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Mental Health Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              National Mental Health Organizations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted organizations providing information, support, and advocacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentalHealthResources.map((resource, index) => (
              <div key={index} className="card text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {resource.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {resource.description}
                </p>
                <a 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition text-sm"
                >
                  Learn More
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Local Minnesota Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Community resources in Clay County and the surrounding area
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {localResources.map((resource, index) => (
              <div key={index} className="card flex items-start">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {resource.name}
                  </h3>
                  <a 
                    href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                    className="text-primary-600 hover:text-primary-700 transition font-medium mb-2 block"
                  >
                    {resource.phone}
                  </a>
                  <p className="text-gray-600 text-sm">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Help Tools */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Self-Help Tools & Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical tools and resources for managing your mental health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {selfHelpTools.map((tool, index) => (
              <div key={index} className="card bg-white">
                <div className="text-primary-600 mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {tool.title}
                </h3>
                <ul className="space-y-2">
                  {tool.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      {item}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Groups & Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with others who understand what you're going through
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportGroups.map((group, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {group.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {group.description}
                </p>
                <a 
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition"
                >
                  Find a Group
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Educational Materials
              </h2>
              <p className="text-lg text-gray-600">
                Learn more about mental health conditions and treatments
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Understanding Depression',
                  topics: ['Symptoms and diagnosis', 'Treatment options', 'Coping strategies', 'Supporting loved ones']
                },
                {
                  title: 'Managing Anxiety',
                  topics: ['Types of anxiety disorders', 'Relaxation techniques', 'Cognitive behavioral strategies', 'When to seek help']
                },
                {
                  title: 'Trauma and PTSD',
                  topics: ['Recognizing trauma symptoms', 'Trauma-informed care', 'Healing approaches', 'Building resilience']
                },
                {
                  title: 'Medication Management',
                  topics: ['Common psychiatric medications', 'Side effects and concerns', 'Working with your doctor', 'Complementary approaches']
                }
              ].map((section, index) => (
                <div key={index} className="card">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {section.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Support?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Our team at Resilient Minds is here to provide professional, 
            compassionate care tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Schedule an Appointment
            </a>
            <a href="tel:612-443-9032" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
              Call: (612) 443-9032
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

