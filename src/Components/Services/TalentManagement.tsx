import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import talentAcquisitionImage from '../../assets/talent_acquition.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const TalentAcquisition: React.FC = () => {
  useEffect(() => {
    // Hero Banner Animation
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-description",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Key Points Animation
    gsap.fromTo(
      ".key-point",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".key-points",
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // CTA Button Animation
    gsap.fromTo(
      ".cta-button",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-button",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${talentAcquisitionImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-white mb-4 hero-title"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Talent Acquisition
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-gray-200 hero-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Metla Services approaches Talent Acquisition strategically, understanding that the right personnel can be a transformative force within an organization...
          </motion.p>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Our Approach to Talent Acquisition
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 key-points">
            {[
              {
                icon: "fa-bullseye",
                title: "Proactive Talent Sourcing",
                description: "Adopting a proactive approach, we utilize advanced sourcing techniques..."
              },
              {
                icon: "fa-user-check",
                title: "Candidate-Centric Approach",
                description: "Placing candidates at the center, our approach focuses on positive experiences..."
              },
              {
                icon: "fa-cogs",
                title: "Technology-Driven Recruitment",
                description: "Embracing cutting-edge tools, our recruitment technology leverages AI and automation..."
              },
              {
                icon: "fa-globe",
                title: "Global Reach, Local Expertise",
                description: "Leveraging a global reach with local expertise, we connect organizations with top talent worldwide..."
              }
            ].map((point, index) => (
              <motion.div 
                key={index} 
                className="p-4 md:p-6 bg-gray-100 rounded-lg text-center key-point"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <i className={`fas ${point.icon} text-3xl md:text-4xl text-cyan-500 mb-4`} />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-500 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Ready to Transform Your Talent Acquisition?
          </motion.h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Metla Services stands as a beacon of excellence, offering unparalleled Talent Acquisition services...
          </p>
          <Link to="/contact">
            <motion.button 
              className="cta-button bg-white text-cyan-500 py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TalentAcquisition;
