import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Testimonials Data
const testimonials = [
  {
    name: 'Akshit Das',
    feedback: 'My experience with Metla Services made me feel very satisfied. I had been looking for a good permanent job for a long time, and when I spoke to this placement consultant, it was the beginning of a great experience. The team at this company was very professional and kept me informed at each step.',
  },
  {
    name: 'Priya Singh',
    feedback: 'This recruitment company has been extremely resourceful and responsive in helping us identify some talented candidates. Strategic HR & IT Services has placed a number of candidates in various positions in our company recently. The services were truly admirable. Can’t wait to use Metla Services company again!',
  },
  {
    name: 'Himanshu Bhardwaj',
    feedback: 'Metla Services is an ethical and responsible employment company. By providing ethical and professional recruitment services to our clients and foreign employment opportunity to the job seekers according to their skills, experiences, and qualifications. We recommend to all.',
  }
];

// Animation Variants
const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Testimonials: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.testimonial-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.testimonial-section',
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <div className="testimonial-section p-6 bg-gray-100 h-auto">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#147971]">Words From Customers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
            variants={testimonialVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
            <h2 className="text-xl font-semibold text-blue-600">{testimonial.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;