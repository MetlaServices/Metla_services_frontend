import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import image
import achievementImage from '../../assets/Achievements/achievements.avif'; // Adjust path as necessary

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { icon: '👥', value: 20000, label: 'Outsourced Employees' },
  { icon: '🏆', value: 450, label: 'Client Teams' },
  { icon: '👍', value: 100, label: 'Satisfied Customers' },
  { icon: '⭐', value: 9.8, label: 'Star Rating' },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Achievements: React.FC = () => {
  const countRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            duration: 2,
            innerText: achievements[index].value,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%', // Start animation when the element is 80% in view
              once: true, // Run the animation only once
            },
            snap: { innerText: 1 }, // Make sure the count is an integer
            ease: 'power1.out',
            onUpdate: function () {
              const countEl = el;
              if (countEl) {
                countEl.innerHTML = Math.floor(this.targets()[0].innerText).toString();
              }
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative bg-gray-100">
      <div className="absolute inset-0">
        <img
          src={achievementImage}
          alt="Achievements Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#147971] opacity-60"></div>
      </div>
      <div className="relative z-10 p-6 md:p-12 lg:p-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white ">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{achieve.icon}</div>
              <h2
                ref={(el) => (countRefs.current[index] = el)}
                className="text-4xl font-bold text-gray-800 count"
              >
                {/* The counting value will be updated by GSAP */}
              </h2>
              <p className="text-gray-600 text-lg">{achieve.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
