import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaGlobe, FaRobot } from 'react-icons/fa';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import images
import image1 from '../../assets/remote_work.jpeg';
import image2 from '../../assets/Virtual-hiring-tools.jpg';
import image3 from '../../assets/AI-Skills-Assessment.jpg';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  bgImage: string;
}

const services: Service[] = [
  {
    icon: <FaRegLightbulb size={40} />,
    title: 'Futuristic Services and Innovations',
    description: 'Exploring the rise of freelance, contract, and remote work trends and services catering to flexible work arrangements.',
    bgImage: `url(${image1})`,
  },
  {
    icon: <FaGlobe size={40} />,
    title: 'Gig Economy and Remote Work Solutions',
    description: 'Utilizing virtual job fairs, online assessment tools, and video interviewing platforms for efficient recruitment processes.',
    bgImage: `url(${image2})`,
  },
  {
    icon: <FaRobot size={40} />,
    title: 'Skills Assessment and Development using AI',
    description: 'Implementing AI-driven platforms for analyzing candidate skills and enhancing skill development.',
    bgImage: `url(${image3})`,
  },
];

const FuturisticServices: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.service-section',
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      '.service-section h2',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.service-section',
          start: 'top 90%',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="service-section p-6 bg-gray-200 h-auto">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#147971]">Futuristic Services and Innovations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card relative rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.2 }
            }}
          >
            <h2 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out group-hover:opacity-50"
              style={{ backgroundImage: service.bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></h2>
            <div className="relative z-10 p-6 text-center text-white bg-gradient-to-t from-gray-800 to-transparent">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FuturisticServices;