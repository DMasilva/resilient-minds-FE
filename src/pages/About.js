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

  const teamMembers = [
    {
      name: 'Clinical Director',
      role: 'Leadership',
      specialty: 'Licensed Psychologist, PhD',
      description: '15+ years experience in adult mental health'
    },
    {
      name: 'Lead Therapist',
      role: 'Clinical Services',
      specialty: 'Licensed Independent Clinical Social Worker',
      description: 'Specializes in trauma-informed care'
    },
    {
      name: 'Senior Counselor',
      role: 'Counseling Services',
      specialty: 'Licensed Professional Clinical Counselor',
      description: 'Expert in anxiety and depression treatment'
    },
    {
      name: 'Case Manager',
      role: 'Client Support',
      specialty: 'Master of Arts in Counseling',
      description: 'Housing stabilization specialist'
    }
  ];

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

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your mental health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUsers className="text-4xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {member.specialty}
                </p>
                <p className="text-sm text-gray-500">
                  {member.description}
                </p>
              </div>
            ))}
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

