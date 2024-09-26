import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaHotel, FaBook, FaMoneyBill, FaSun, FaShieldAlt, FaShoppingCart, FaStore, FaHome } from 'react-icons/fa';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const industries = [
  { icon: <FaHospital size={40} />, title: 'Hospital' },
  { icon: <FaHotel size={40} />, title: 'Hotel & Hospitality' },
  { icon: <FaBook size={40} />, title: 'Education / Training' },
  { icon: <FaMoneyBill size={40} />, title: 'Finance' },
  { icon: <FaSun size={40} />, title: 'Renewable Energy' },
  { icon: <FaShieldAlt size={40} />, title: 'Insurance' },
  { icon: <FaShoppingCart size={40} />, title: 'E Commerce' },
  { icon: <FaStore size={40} />, title: 'Retail' },
  { icon: <FaHome size={40} />, title: 'Real Estate' },
];

const texts = [
  { text: 'Welcome', color: '#FF6347' },
  { text: 'Explore', color: '#4682B4' },
  { text: 'Discover', color: '#32CD32' },
  { text: 'Innovate', color: '#FFD700' },
  { text: 'Grow', color: '#6A5ACD' },
  { text: 'Industries We Serve', color: '#FF1493' }
];

const IndustryCards: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { duration: 1 } });
      
      texts.forEach((item, index) => {
        tl.to(headingRef.current, {
          text: item.text,
          color: item.color,
          ease: 'power2.inOut',
          duration: 1,
          delay: index === 0 ? 0 : 1,
        });
      });
    }
  }, []);

  return (
    <div className="p-6 bg-gray-100 ">
      <div className="text-4xl md:text-5xl font-bold text-center mb-8">
        <div ref={headingRef} className="heading-animation" style={{ color: '#FF6347' }}></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="group relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center overflow-hidden"
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
            <div className="absolute inset-0 bg-[#147971] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            <div className="relative z-10 text-[#fcbc04] mb-4 transition-colors duration-300 ease-in-out ">
              {industry.icon}
            </div>
            <h3 className="text-xl font-semibold relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
              {industry.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCards;
