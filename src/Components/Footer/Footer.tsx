import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col, Space } from 'antd';
import { FaXTwitter } from 'react-icons/fa6';

const { Title, Text } = Typography;

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const linkVariants = {
  hover: { scale: 1.1, color: '#fcbc04' },
};

const socialMediaVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Footer: React.FC = () => {
  return (
    <Layout.Footer className="bg-emerald-600 text-white py-12 relative footer">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <Row gutter={[16, 16]} justify="center">
          {/* About Us Section */}
          <Col xs={24} md={8} className="text-center md:text-left">
            <Title level={3} style={{ color: '#fcbc04' }} className="mb-4">About Us</Title>
            <Text className="text-white text-lg">
              We are a leading provider of innovative solutions, dedicated to delivering excellence and fostering growth. Our team of experts is committed to achieving success and creating value for our clients.
            </Text>
          </Col>

          {/* Links */}
          <Col xs={24} md={8} className="text-center md:text-left">
            <Title level={3} style={{ color: '#fcbc04' }} className="mb-4">Quick Links</Title>
            <Space direction="vertical" size="large">
              <motion.div
                variants={linkVariants}
                whileHover="hover"
              >
                <Link to="/" className="footer-item text-white text-lg font-semibold transition duration-300">Home</Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
              >
                <Link to="/about" className="footer-item text-white text-lg font-semibold transition duration-300">About</Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
              >
                <Link to="/services" className="footer-item text-white text-lg font-semibold transition duration-300">Services</Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                whileHover="hover"
              >
                <Link to="/contact" className="footer-item text-white text-lg font-semibold transition duration-300">Contact</Link>
              </motion.div>
            </Space>
          </Col>

          {/* Social Media Icons */}
          <Col xs={24} md={8} className="text-center">
            <Title level={3} style={{ color: '#fcbc04' }} className="mb-4">Follow Us</Title>
            <motion.div
              className="flex justify-center space-x-4"
              initial="hidden"
              animate="visible"
              variants={socialMediaVariants}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <motion.a
                href="https://www.facebook.com/Metlaservices01"
                className="social-media-icon text-white hover:text-blue-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebookF className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://x.com/e31927?t=pujNMykgk2grg-CEgArk4g&s=08 "
                className="social-media-icon text-white hover:text-black transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaXTwitter className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/metla-services-2396782bb/"
                className="social-media-icon text-white hover:text-blue-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedinIn className="text-3xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/metlaservices001/"
                className="social-media-icon text-white hover:text-pink-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}>
                <FaInstagram className="text-3xl" />
              </motion.a>
            </motion.div>
          </Col>
        </Row>

        <div className="text-center mt-8 text-gray-300">
          &copy; {new Date().getFullYear()} Metla Services. All rights reserved.
        </div>
      </motion.div>
    </Layout.Footer>
  );
};

export default Footer;
