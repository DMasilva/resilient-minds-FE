import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaUsers, 
  FaBullseye, 
  FaEye,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaCheckCircle
} from 'react-icons/fa';
import peopleSeatedTogether from '../images/people_seated_together.png';
import plantSprouting from '../images/plant_sprouting.png';
import erikaYoney from '../images/erika.png';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Compassion',
      description: 'We treat every individual with kindness, empathy, and respect, creating a safe space for healing.'
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of care through evidence-based practices and continuous improvement.'
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in all our interactions.'
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Innovation',
      description: 'We embrace new approaches and technologies to provide the most effective treatment options.'
    }
  ];

  const clinicalSupervisor = {
    name: 'Erika Yoney',
    credentials: 'PMHNP-BC, DNP',
    role: 'Clinical Supervisor',
    image: erikaYoney,
    education: [
      'Doctor of Nursing Practice (DNP) - University of Minnesota, Twin Cities',
      'Bachelor of Science in Nursing (BSN) - Minnesota State University Moorhead'
    ],
    philosophy: 'Committed to providing high quality, whole person mental health services to patients of all ages. Values patient directed, highly individualized care that honors the unique needs of each patient across their lifetime.',
    specialties: [
      'Children & Adolescent Mental Health',
      'Parent Support & Family Systems',
      'School-Based Mental Health',
      'New American Community Mental Health',
      'Prevention & Early Intervention',
      'Whole Person Care Approach'
    ],
    certification: 'Board certified through the American Nurses Credentialing Center (ANCC)',
    licensure: 'Licensed to practice in North Dakota and Minnesota',
    memberships: [
      'American Psychiatric Nurses Association',
      'International Society for Psychiatric Nursing'
    ],
    background: 'Dr. Yoney brings extensive experience working as a nurse in school settings at both state and local levels. This background has shaped her commitment to providing meaningful access to mental health care in the places where people live, work, and play - not just in clinics. She is passionate about prevention and timely intervention for mental health needs, especially for children, teenagers, and parents who may be struggling.',
    personalNote: 'Through professional and volunteer experiences, Dr. Yoney has had the privilege of supporting new to country individuals in navigating mental health needs, bringing cultural sensitivity and understanding to her practice.'
  };

  const achievements = [
    'Accredited by the Joint Commission',
    'Member of National Alliance on Mental Illness (NAMI)',
    '500+ individuals served annually',
    '95% client satisfaction rating',
    'Partnerships with local hospitals and clinics',
    'Evidence-based treatment protocols'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Resilient Minds
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-100">
            Empowering individuals to overcome mental health challenges and achieve 
            lasting wellness through compassionate, evidence-based care.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Resilient Minds was established in 2019 with a clear mission: to provide 
                  comprehensive, accessible mental health services to adults in our community. 
                  Founded by a team of dedicated mental health professionals, we recognized the 
                  growing need for quality mental health care that treats the whole person.
                </p>
                <p>
                  Based in Moorhead, Minnesota, we've grown from a small clinic to a comprehensive 
                  mental health center serving Northwestern Minnesota and the Twin Cities Metro Area. 
                  Our expansion reflects our commitment to making mental health services accessible 
                  to more people who need them.
                </p>
                <p>
                  Today, we're proud to serve hundreds of individuals each year, helping them 
                  overcome challenges, build resilience, and create meaningful, independent lives. 
                  Every success story motivates us to continue our mission with renewed dedication.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 lg:p-12">
                <img 
                  src={peopleSeatedTogether} 
                  alt="People seated together in supportive environment" 
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                />
                <div className="bg-white rounded-xl shadow-xl p-8 space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary-600 mb-2">2019</div>
                    <p className="text-gray-700">Year Founded</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                    <p className="text-gray-700">Lives Changed Annually</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600 mb-2">7</div>
                    <p className="text-gray-700">Counties Served</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
                    <p className="text-gray-700">Mental Health Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <FaBullseye className="text-5xl mb-6 text-primary-200" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-primary-50">
                To provide competent, compassionate, and effective mental health rehabilitation 
                programs that empower adults to achieve mental wellness, independence, and success 
                in their personal and professional lives.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-secondary-600 to-secondary-700 text-white">
              <FaEye className="text-5xl mb-6 text-secondary-200" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-secondary-50">
                To be the leading mental health center in Minnesota, recognized for promoting 
                peaceful, independent living for those with mental and behavioral conditions, 
                unlocking their full potential for success and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the care we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Leadership Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clinical Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guidance and compassionate care from our dedicated Clinical Supervisor
            </p>
          </div>

          {/* Featured Clinical Supervisor Profile */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Image Section */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary-500 to-secondary-600 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-6">
                      <img 
                        src={clinicalSupervisor.image} 
                        alt={clinicalSupervisor.name}
                        className="w-64 h-64 object-cover rounded-full mx-auto border-8 border-white shadow-2xl"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {clinicalSupervisor.name}
                    </h3>
                    <p className="text-xl text-primary-100 font-semibold mb-2">
                      {clinicalSupervisor.credentials}
                    </p>
                    <p className="text-lg text-white font-medium px-6 py-2 bg-white/20 rounded-full inline-block">
                      {clinicalSupervisor.role}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-3 p-8 lg:p-12">
                  {/* Philosophy */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FaHeart className="text-3xl text-primary-600" />
                      <h4 className="text-2xl font-bold text-gray-900">Care Philosophy</h4>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-primary-600 pl-6 py-2 bg-primary-50 rounded-r-lg">
                      "{clinicalSupervisor.philosophy}"
                    </p>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FaAward className="text-3xl text-secondary-600" />
                      <h4 className="text-2xl font-bold text-gray-900">Education</h4>
                    </div>
                    <ul className="space-y-3">
                      {clinicalSupervisor.education.map((edu, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Credentials */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FaAward className="text-3xl text-accent-600" />
                      <h4 className="text-2xl font-bold text-gray-900">Credentials & Licensure</h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700 flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        {clinicalSupervisor.certification}
                      </p>
                      <p className="text-gray-700 flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        {clinicalSupervisor.licensure}
                      </p>
                    </div>
                  </div>

                  {/* Professional Memberships */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FaUsers className="text-3xl text-primary-600" />
                      <h4 className="text-2xl font-bold text-gray-900">Professional Memberships</h4>
                    </div>
                    <ul className="space-y-2">
                      {clinicalSupervisor.memberships.map((membership, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{membership}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Full-width sections at bottom */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-t border-gray-200">
                <div className="p-8 lg:p-12">
                  {/* Clinical Specialties */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <FaLightbulb className="text-3xl text-primary-600" />
                      <h4 className="text-2xl font-bold text-gray-900">Clinical Specialties & Interests</h4>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {clinicalSupervisor.specialties.map((specialty, index) => (
                        <div key={index} className="bg-white rounded-lg px-4 py-3 shadow-md border-l-4 border-primary-600 hover:shadow-lg transition">
                          <p className="text-gray-800 font-medium">{specialty}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Background & Experience */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaBullseye className="text-3xl text-secondary-600" />
                      <h4 className="text-2xl font-bold text-gray-900">Background & Experience</h4>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {clinicalSupervisor.background}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {clinicalSupervisor.personalNote}
                    </p>
                  </div>

                  {/* Approach Highlights */}
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary-200">
                    <h5 className="text-xl font-bold text-gray-900 mb-4">Dr. Yoney's Approach:</h5>
                    <p className="text-gray-700 leading-relaxed">
                      Mental health is completely connected to our physical, social, and spiritual well-being. 
                      Dr. Yoney incorporates all these aspects into patient care, ensuring a holistic, 
                      comprehensive approach that addresses the whole person - not just symptoms. Her practice 
                      emphasizes meeting people where they are, whether in schools, communities, or clinical settings, 
                      making quality mental health care truly accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Team Members - Optional Section */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-4">
              In addition to Dr. Yoney, our team includes dedicated mental health professionals, 
              case managers, and support staff committed to your wellbeing.
            </p>
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold">
              <FaUsers className="text-2xl" />
              <span className="text-xl">20+ Mental Health Professionals on Our Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-lg text-gray-600">
                Recognized for excellence in mental health care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-primary-50 rounded-xl p-6">
                  <FaCheckCircle className="text-green-500 text-2xl mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{achievement}</span>
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
            Join Our Team or Become a Client
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Whether you're seeking mental health support or looking to make a difference 
            in people's lives, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Schedule Appointment
            </Link>
            <Link to="/careers" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
              View Career Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

