import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';
import logoIcon from '../images/icononly.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoIcon} 
                alt="Resilient Minds Icon" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold text-white">Resilient Minds</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Comprehensive mental health services dedicated to promoting peaceful, 
              independent living and unlocking full potential for success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition">Services</Link>
              </li>
              {/* <li>
                <Link to="/careers" className="hover:text-primary-400 transition">Careers</Link>
              </li> */}
              <li>
                <Link to="/resources" className="hover:text-primary-400 transition">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-primary-400 transition">
                  Adult Rehabilitative Mental Health
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition">
                  Housing Stabilization Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition">
                  Crisis Intervention
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition">
                  Individual Counseling
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition">
                  Group Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-400 flex-shrink-0" />
                <span>
                  1132 28th Ave S<br />
                  Moorhead, MN 56560
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary-400 flex-shrink-0" />
                <a href="tel:612-443-9032" className="hover:text-primary-400 transition">
                  (612) 443-9032
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary-400 flex-shrink-0" />
                <a href="mailto:resilientmindsolutionllc@gmail.com" className="hover:text-primary-400 transition">
                  resilientmindsolutionllc@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary w-full text-center block">
                Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Crisis Hotline Banner */}
      <div className="bg-accent-600 py-4">
        <div className="container-custom text-center text-white">
          <p className="font-semibold">
            <FaPhone className="inline mr-2" />
            24/7 Crisis Hotline: 
            <a href="tel:988" className="ml-2 underline hover:text-accent-200 transition">988</a>
            <span className="mx-2">|</span>
            National Suicide Prevention Lifeline: 
            <a href="tel:1-800-273-8255" className="ml-2 underline hover:text-accent-200 transition">1-800-273-8255</a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-2 md:mb-0">
              © {currentYear} Resilient Minds. All rights reserved.
            </p>
            <p className="flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> for mental health awareness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

