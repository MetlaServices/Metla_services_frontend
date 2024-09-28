import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaChartLine, FaUsers, FaChalkboardTeacher, FaPeopleArrows, FaLaptopCode, FaShieldAlt, FaBullseye } from 'react-icons/fa';
import hrConsultancyImg from '../../assets/hr_consultancy.webp'; // Import the image

// TypeScript interface for card data
interface CardData {
  title: string;
  text: string;
  icon: React.ReactNode;
}

// Tailwind CSS classes for styling
const sectionClass = 'py-12 px-4';
const headingContainerClass = 'bg-cover bg-center py-16 px-4 mb-12 relative h-[50vh]'; // Set height here
const headingBgClass = 'absolute inset-0 bg-opacity-50 bg-gray-800';
const headingTextClass = 'relative text-4xl font-bold text-white text-center';
const cardContainerClass = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8';
const cardClass = 'bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl';
const cardTitleClass = 'text-xl font-semibold mb-4';
const cardTextClass = 'text-gray-700 mb-4 text-center';
const cardIconClass = 'text-4xl mb-4 text-cyan-500';

// Framer Motion configurations
const cardAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// Sample card data with React icons and expanded descriptions
const cardData: CardData[] = [
  {
    title: 'Strategic HR Planning',
    text: 'Our Strategic HR Planning service helps you align HR strategies with business objectives, including workforce analysis, talent mapping, and creating initiatives that drive organizational success. We focus on understanding your long-term goals to provide tailored HR solutions.',
    icon: <FaChartLine className={cardIconClass} />,
  },
  {
    title: 'Employee Engagement and Retention',
    text: 'We enhance employee engagement and retention through satisfaction surveys, recognition programs, and initiatives designed to cultivate a positive workplace culture. Our approach aims to improve job satisfaction, reduce turnover, and increase overall productivity.',
    icon: <FaUsers className={cardIconClass} />,
  },
  {
    title: 'Training and Development Programs',
    text: 'Our Training and Development Programs are designed to equip employees with the skills and knowledge needed for continuous growth. We offer customized training solutions that align with your organizational goals, ensuring employees stay relevant and effective in their roles.',
    icon: <FaChalkboardTeacher className={cardIconClass} />,
  },
  {
    title: 'Diversity and Inclusion Initiatives',
    text: 'We help organizations create inclusive workplaces by implementing equality programs and fostering a diverse workforce. Our services ensure that all employees feel valued and empowered, promoting a culture of respect and inclusion within your organization.',
    icon: <FaPeopleArrows className={cardIconClass} />,
  },
  {
    title: 'HR Technology Integration',
    text: 'Our HR Technology Integration services streamline HR processes through advanced technologies. We enhance data analytics and improve efficiency, helping organizations remain competitive in a rapidly evolving technological landscape.',
    icon: <FaLaptopCode className={cardIconClass} />,
  },
  {
    title: 'Policy Development and Compliance',
    text: 'We assist in developing comprehensive HR policies that adhere to legal standards and industry best practices. Our focus is on ensuring compliance with labor laws and creating a positive, compliant work environment for your organization.',
    icon: <FaShieldAlt className={cardIconClass} />,
  },
  {
    title: 'Performance Management Systems',
    text: 'Our Performance Management Systems are designed to encourage continuous feedback, goal alignment, and professional development. We help you foster a high-performance culture that supports employee growth and organizational success.',
    icon: <FaBullseye className={cardIconClass} />,
  },
];

const HRConsulting: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // GSAP animations on mount
  useEffect(() => {
    gsap.from(headingRef.current, { duration: 1, y: -50, opacity: 0, ease: 'power3.out' });
    gsap.from(paragraphRef.current, { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.5 });
  }, []);

  return (
    <section className={sectionClass}>
      <div
        className={headingContainerClass}
        style={{ backgroundImage: `url(${hrConsultancyImg})` }} // Apply the background image here
      >
        <div className={headingBgClass}></div>
        <motion.h2
          className={headingTextClass}
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
          ref={headingRef}
        >
          HR Consulting Services
        </motion.h2>
      </div>

      <div className={cardContainerClass}>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`${cardClass} card`}
            initial="hidden"
            animate="visible"
            variants={cardAnimation}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }} // Hover effect
          >
            {card.icon}
            <h3 className={cardTitleClass}>{card.title}</h3>
            <p className={cardTextClass} ref={paragraphRef}>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HRConsulting;
