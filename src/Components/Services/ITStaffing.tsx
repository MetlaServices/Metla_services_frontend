import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaCode, FaLaptopCode, FaNetworkWired } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ITStaffingImage from '../../assets/Services/IT_Staffing.webp';

gsap.registerPlugin(ScrollTrigger);

const ITStaffing: React.FC = () => {
  // Refs for elements to be animated with GSAP
  const imageSectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for sections
    if (imageSectionRef.current) {
      gsap.from(imageSectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: imageSectionRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  
    if (featuresRef.current) {
      gsap.from(Array.from(featuresRef.current.children), {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);
  

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Best IT Staffing Solution Providers in India 
          </motion.h1>
          <p className="text-base md:text-lg text-gray-600 mt-4">
            Best IT Staffing Solution Providers in India , our IT Staffing Solutions are driven by a commitment to strategic talent acquisition. We understand that the success of IT projects relies heavily on the expertise and proficiency of the individuals involved.
          </p>
        </header>

        {/* Image Section with Overlay Text */}
        <div className="relative text-center mb-12" ref={imageSectionRef}>
          <motion.img
            src={ITStaffingImage}
            alt="IT Staffing"
            className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white p-6 md:p-8 lg:p-10">
            <div>
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Strategic Tech Talent for Your Success
              </motion.h2>
              <p className="text-sm md:text-base lg:text-lg">
                We meticulously identify, evaluate, and place skilled IT professionals to align with your organization’s culture and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" ref={featuresRef}>
          {[{
            icon: <FaCogs className="text-4xl md:text-5xl text-cyan-500 mb-4" />,
            title: "Strategic Tech Talent",
            text: "Secure top-tier tech talent aligned with your business goals.",
            link: "/tech-talent"
          }, {
            icon: <FaCode className="text-4xl md:text-5xl text-cyan-500 mb-4" />,
            title: "Agile Tech Trends Response",
            text: "Stay ahead with agile responses to evolving technology trends.",
            link: "/tech-trends"
          }, {
            icon: <FaLaptopCode className="text-4xl md:text-5xl text-cyan-500 mb-4" />,
            title: "Skill Precision, Project Acceleration",
            text: "Precision in skill-matching accelerates project timelines and boosts productivity.",
            link: "/project-acceleration"
          }, {
            icon: <FaNetworkWired className="text-4xl md:text-5xl text-cyan-500 mb-4" />,
            title: "Flexibility for Project Dynamics",
            text: "Scale your IT team based on project demands for unparalleled adaptability.",
            link: "/project-dynamics"
          }].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-700 mb-4">{feature.text}</p>
              <a href={feature.link} className="text-cyan-500 hover:underline">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center" ref={ctaRef}>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Elevate Your IT Team?
          </motion.h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Contact us today to explore our IT Staffing Solutions and find out how we can help you achieve your strategic goals.
          </p>
          <a href="/contact" className="bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ITStaffing;
