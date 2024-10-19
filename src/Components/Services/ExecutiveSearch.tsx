import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ExecutiveSearchImage from '../../assets/executive_search.jpg';

const { Meta } = Card;

gsap.registerPlugin(ScrollTrigger);

const ExecutiveSearch: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
              once: true,
            },
          }
        );
      }
    });

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: true,
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <motion.h1
            className="text-3xl md:text-4xl font-medium text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Executive Search
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Metla Services approaches Executive Search strategically, recognizing that leadership roles demand a unique blend of skills, experience, and cultural fit. Our process begins with a deep dive into your organization’s strategic objectives, allowing us to strategically identify and attract executives who not only possess the requisite skills but also align with your company’s vision and values. Metla Services stands as a trusted partner in Executive Search, offering unparalleled services that transcend conventional recruitment, identifying and securing top-tier executives who can propel your organization to new heights.
          </motion.p>
        </header>

        {/* Image Section with Overlay Text */}
        <div className="relative w-full h-auto max-w-full md:max-w-4xl mx-auto" ref={imageRef}>
          <img
            // src={ExecutiveSearchImage}

            src="https://i0.wp.com/nonprofitlawblog.com/assets/Executive-Search.jpg?fit=1140%2C831&ssl=1"
            alt="Executive Search"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
            <motion.div
              className="text-white p-4 md:p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl font-medium mb-4">Customized Executive Search Solutions</h2>
              <p className="text-sm md:text-md mb-4">
                Recognizing the uniqueness of each search, our solutions are tailored to meet your specific needs, whether for a leadership transition, team expansion, or specialized executive expertise.
              </p>
              <Link to="/contact">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors" >
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <Row gutter={16}>
          {[
            {
              title: 'In-Depth Assessment and Evaluation',
              description: 'Our rigorous evaluation processes, including competency assessments and behavioral interviews, guarantee that presented executives not only meet but exceed your leadership expectations.',
              delay: 0.2,
            },
            {
              title: 'Succession Planning and Leadership Development',
              description: 'Beyond placements, Metla Services aids in succession planning and leadership development, ensuring a prepared pipeline of internal talent for evolving organizational needs.',
              delay: 0.4,
            },
            {
              title: 'Customized Executive Search Solutions',
              description: 'Recognizing the uniqueness of each search, our solutions are tailored to meet your specific needs, whether for a leadership transition, team expansion, or specialized executive expertise.',
              delay: 0.6,
            },
          ].map((item, index) => (
            <Col span={24} md={12} lg={8} key={index}>
              <motion.div
                className="p-4 md:p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                ref={(el) => sectionRefs.current.push(el as HTMLDivElement)}
              >
                <Card>
                  <Meta
                    title={<span className="text-lg md:text-xl font-semibold">{item.title}</span>}
                    description={<span className="text-sm md:text-base">{item.description}</span>}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Additional Content Section */}
        <section className="mt-8 md:mt-12">
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-gray-800 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            ref={(el) => sectionRefs.current.push(el as HTMLDivElement)}
          >
            Why Choose Us for Executive Search?
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Metla Services stands out in the realm of executive search due to our meticulous approach and unwavering commitment to excellence. We leverage a deep understanding of market dynamics, industry trends, and organizational needs to deliver unparalleled results. Our dedicated team ensures that every candidate not only fits the role but also enhances the overall strategic direction of your organization.
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our comprehensive approach, coupled with transparent communication and a client-centric philosophy, ensures that we build lasting partnerships and deliver exceptional value. Trust us to navigate the complexities of executive search and provide you with top-tier leadership talent that will drive your organization forward.
          </motion.p>
        </section>

        {/* Call-to-Action Section */}
        <div className="text-center mt-8 md:mt-12" ref={(el) => sectionRefs.current.push(el as HTMLDivElement)}>
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Find Your Next Executive Leader?
          </motion.h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Contact us today to start your executive search journey with Metla Services. Our team is ready to assist you in finding the ideal candidate who will make a significant impact on your organization.
          </p>
          <Link to="/contact">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSearch;
