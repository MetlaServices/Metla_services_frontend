// import React from 'react';
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Layout, Typography, Row, Col, Space } from 'antd';
// import { FaXTwitter } from 'react-icons/fa6';
// import Logo from '../../assets/Logo/logo.svg';

// const { Title, Text } = Typography;

// const footerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: 'easeOut' },
//   },
// };

// const linkVariants = {
//   hover: { scale: 1.05, color: '#fcbc04' }, // Subtle hover scale effect
// };

// const socialMediaVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// };

// const Footer: React.FC = () => {
//   return (
//     <Layout.Footer className="bg-gray-100 text-black py-13 relative footer border-t border-gray-300"> {/* Slightly larger padding for overall spacing */}
//       <motion.div
//         className="container mx-auto px-4"
//         initial="hidden"
//         animate="visible"
//         variants={footerVariants}
//       >
//         {/* Logo Section */}
//         <div className="flex justify-center mb-6"> {/* Added some more space below the logo */}
//           <Link to="/" className="flex items-center">
//             <img src={Logo} alt="Metla Services Logo" className="h-[20px] object-contain" />
//           </Link>
//         </div>

//         <Row gutter={[16, 16]} justify="center">
//           {/* About Us Section */}
//           <Col xs={24} md={8} className="text-center md:text-center">
//             <Title level={3} style={{ color: '#0000FF' }} className="mb-2 "> {/* Reduced margin-bottom */}
//               About Us
//             </Title>
//             <Text className="text-black text-lg leading-relaxed">
//               We are a leading provider of innovative solutions,
//               dedicated to delivering excellence and fostering growth. Our team of
//               experts is committed to achieving success and creating value for our
//               clients.
//             </Text>
//           </Col>

//           <Col xs={24} md={8} className="text-center">
//             {/* Quick Links Section */}
//             <Title level={3} style={{ color: '#0000FF' }} className="mb-3">
//               Quick Links
//             </Title>
//             <Space direction="vertical" size="small" className="space-y-2">
//               {[
//                 { name: 'Home', path: '/' },
//                 { name: 'About', path: '/about' },
//                 { name: 'Services', path: '/' },
//                 { name: 'Contact', path: '/contact' },
//               ].map((item, index) => (
//                 <motion.div key={index} variants={linkVariants} whileHover="hover">
//                   <Link to={item.path} className="footer-item text-black text-lg font-semibold transition duration-300 hover:text-[#fcbc04]">
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </Space>
//           </Col>

//           {/* Social Media Icons */}
//           <Col xs={24} md={8} className="text-center -mt-1"> {/* Added negative margin top */}
//             <Title level={3} style={{ color: '#0000FF' }} className="mb-5"> {/* Reduced margin-bottom */}
//               Follow Us
//             </Title>
//             <motion.div
//               className="flex justify-center space-x-4"
//               initial="hidden"
//               animate="visible"
//               variants={socialMediaVariants}
//               transition={{ duration: 1, ease: 'easeInOut' }}
//             >
//               {[
//                 { icon: <FaFacebookF />, href: 'https://www.facebook.com/Metlaservices01', color: '#3b5998' },  // Facebook blue
//                 { icon: <FaXTwitter />, href: 'https://x.com/e31927?t=pujNMykgk2grg-CEgArk4g&s=08', color: '#1DA1F2' }, // Twitter blue
//                 { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/metla-services-2396782bb/', color: '#0077b5' }, // LinkedIn blue
//                 { icon: <FaInstagram />, href: 'https://www.instagram.com/metlaservices001/', color: '#E1306C' }, // Instagram pink
//               ].map((social, idx) => (
//                 <motion.a
//                   key={idx}
//                   href={social.href}
//                   className="social-media-icon transition duration-300 text-3xl"
//                   style={{ color: social.color }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2 }} // Hover effect to scale up icons
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </Col>
//         </Row>

//         <hr className='mt-2 border-gray-300' /> {/* Spaced out the divider */}

//         {/* Footer Bottom */}
//         <div className="text-center mt-2 text-gray-600 text-sm">
//           &copy; {new Date().getFullYear()} Metla Services. All rights reserved.
//         </div>
//       </motion.div>
//     </Layout.Footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout, Typography, Row, Col, Space } from "antd";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/Logo/logo.svg";

const { Title, Text } = Typography;

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const linkVariants = {
  hover: { scale: 1.05, color: "#fcbc04" },
};

const socialMediaVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Footer: React.FC = () => {
  return (
    <Layout.Footer className="static bottom-0 bg-gray-100 text-black py-13 footer border-t border-gray-300"> {/* Slightly larger padding for overall spacing */}
      <motion.div
        className="container mx-auto px-4 "
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Metla Services Logo"
              className="h-[30px] md:h-[20px] object-contain"
            />
          </Link>
        </div>

        <Row gutter={[16, 32]} justify="center">
          {/* About Us Section */}
          <Col xs={24} md={8} className="text-center md:text-center mb-6 md:mb-0">
            <Title level={3}  style={{ color: '#0000FF' }}  className="text-black mb-4 text-xl md:text-2xl text-center">
              About Us
            </Title>
            <Text className="text-black text-base md:text-lg leading-relaxed text-center" >
            We are a leading provider of innovative solutions, dedicated to delivering excellence and fostering growth. Our team of experts is committed to achieving success and creating value for our clients.
            </Text>
          </Col>






          {/* Quick Links Section */}
          <Col xs={24} sm={12} md={8} className="text-center mb-6 md:mb-0">
            <Title level={3}  style={{ color: '#0000FF' }} className="text-blue-500 mb-4 text-xl md:text-2xl">
              Quick Links
            </Title>

            <Space direction="vertical" size="small" className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    to={item.path}
                    className="footer-item text-black text-base md:text-lg font-semibold transition duration-300 hover:text-[#fcbc04]"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </Space>
          </Col>


          {/* Social Media Icons */}
          <Col xs={24} sm={12} md={8} className="text-center">
            <Title level={3}  style={{ color: '#0000FF' }}  className="text-black mb-4 text-xl md:text-2xl">
              Follow Us
            </Title>
            <motion.div
              className="flex justify-center space-x-4"
              initial="hidden"
              animate="visible"
              variants={socialMediaVariants}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {[
                {
                  icon: <FaFacebookF />,
                  href: "https://www.facebook.com/Metlaservices01",
                  color: "#3b5998",
                },
                {
                  icon: <FaXTwitter />,
                  href: "https://x.com/e31927?t=pujNMykgk2grg-CEgArk4g&s=08",
                  color: "#1DA1F2",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "https://www.linkedin.com/in/metla-services-2396782bb/",
                  color: "#0077b5",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/metlaservices001/",
                  color: "#E1306C",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="social-media-icon transition duration-300 text-xl md:text-3xl" 
                  style={{ color: social.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </Col>
        </Row>

        <hr className="mt-6 border-gray-300" />

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-gray-600 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Metla Services. All rights reserved.
        </div>
      </motion.div>
    </Layout.Footer>
  );
};

export default Footer;
