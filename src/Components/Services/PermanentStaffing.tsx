import React from 'react';
import { FaUserTie, FaHandshake, FaHandHoldingUsd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PermanentStaffing from '../../assets/Services/permanent_staffing.webp';
import { Link } from 'react-router-dom';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const PermanentStaffingSolution: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-16 px-4 text-center">
        <img
          src={PermanentStaffing}
          alt="Team Work"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative z-10">
          <motion.h1
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold mb-4"
          >
            Finding the Right Talent for Your Business
          </motion.h1>
          <motion.p
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="text-xl mb-6"
          >
            Our permanent staffing solutions help you build a team that drives success.
          </motion.p>
      <Link to='/contact'   className="bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold ">get stared</Link>  
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-8"
        >
          Why Choose Our Permanent Staffing Solutions?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <FaUserTie className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Quality Talent Pool</h3>
            <p>Access a curated network of top-tier candidates.</p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <FaHandshake className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
            <p>Customized staffing strategies to meet your unique needs.</p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <FaHandHoldingUsd className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Seamless Process</h3>
            <p>Efficient hiring processes to save you time and resources.</p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <FaUserTie className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
            <p>Dedicated support throughout the hiring process and beyond.</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white text-center">
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-8"
        >
          Our Staffing Process
        </motion.h2>
        <div className="flex flex-col md:flex-row md:justify-center">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">1. Consultation</h3>
            <p>Discuss your staffing needs with our experts.</p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">2. Candidate Sourcing</h3>
            <p>We search for candidates that match your requirements.</p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">3. Screening & Interviews</h3>
            <p>Thorough screening and interview processes.</p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">4. Placement</h3>
            <p>Matchmaking candidates with your company.</p>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">5. Follow-Up</h3>
            <p>Ongoing support to ensure a successful hire.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="accordion">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="accordion-item hover:bg-gray-200 transition-colors duration-300 mb-4"
          >
            <h3 className="accordion-header text-lg font-semibold">What industries do you serve?</h3>
            <div className="accordion-content">
              <p>We serve a variety of industries including IT, finance, healthcare, and more.</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="accordion-item hover:bg-gray-200 transition-colors duration-300 mb-4"
          >
            <h3 className="accordion-header text-lg font-semibold">What is your pricing model?</h3>
            <div className="accordion-content">
              <p>Our pricing is based on the complexity of your staffing needs and the level of service required.</p>
            </div>
          </motion.div>
       
        </div>
      </section>
    </div>
  );
};

export default PermanentStaffingSolution;
