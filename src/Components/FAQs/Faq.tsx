import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


import leftImage from '../../assets/faqs.webp'; 

const faqs = [
  {
    question: 'What services does Metla Services provide?',
    answer: 'Metla Services offers a range of innovative business solutions including staffing, recruitment, and talent management.',
  },
  {
    question: 'How does Metla Services ensure the quality of its staffing solutions?',
    answer: 'We implement a rigorous selection process, including skills assessments and background checks, to ensure high-quality staffing solutions.',
  },
  {
    question: 'Can Metla support global staffing requirements?',
    answer: 'Yes, Metla Services has a global network and resources to support staffing requirements across various regions.',
  },
  {
    question: 'What industries does Metla Services cater to?',
    answer: 'We cater to a diverse range of industries including technology, healthcare, finance, and more.',
  },
  {
    question: 'How does Metla Services ensure confidentiality in Executive Search?',
    answer: 'We maintain strict confidentiality through secure processes and non-disclosure agreements during the executive search process.',
  },
  {
    question: 'Can Metla Services handle the entire talent acquisition process?',
    answer: 'Yes, we offer end-to-end talent acquisition services from job requisition to onboarding.',
  },
  {
    question: 'How does Metla Services approach Training and Development?',
    answer: 'Our approach includes customized training programs, skill development workshops, and ongoing support to enhance employee performance.',
  }
];


gsap.registerPlugin(ScrollTrigger);

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.fromTo(
      '.faq-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.faq-container',
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, []);


  const panelVariants: Variants = {
    open: { opacity: 1, height: 'auto', overflow: 'hidden' },
    closed: { opacity: 0, height: 0, overflow: 'hidden' },
  };

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#147971]">
        Unlocking Human Capital Excellence, One Hire at a Time
      </h2>
      <div className="faq-container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 flex items-center justify-center">
          <img src={leftImage} alt="Left Image" className="w-full h-auto object-cover" />
        </div>
        <div className="col-span-2">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border-t border-gray-200">
                <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => handleToggle(index)}>
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  {expandedIndex === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                </div>
                <motion.div
                  variants={panelVariants}
                  initial="closed"
                  animate={expandedIndex === index ? 'open' : 'closed'}
                  transition={{ duration: 0.3 }}
                  className="p-4 text-gray-700"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
