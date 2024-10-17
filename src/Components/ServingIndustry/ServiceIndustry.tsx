// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaHospital,
//   FaHotel,
//   FaBook,
//   FaMoneyBill,
//   FaSun,
//   FaShieldAlt,
//   FaShoppingCart,
//   FaStore,
//   FaHome,
//   FaBuilding,
//   FaTv,
//   FaWrench,
//   FaPhoneAlt,
//   FaIndustry
// } from 'react-icons/fa';
// import { gsap } from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';
// import { Link } from 'react-router-dom';

// gsap.registerPlugin(TextPlugin);

// const industries = [
//   { icon: <FaHospital size={40} />, title: 'Hospital', link: '/hospital' },
//   { icon: <FaHotel size={40} />, title: 'Hotel & Hospitality', link: '/hotel-hospitality' },
//   { icon: <FaBook size={40} />, title: 'Education / Training', link: '/education-training' },
//   { icon: <FaMoneyBill size={40} />, title: 'Finance', link: '/finance' },
//   { icon: <FaSun size={40} />, title: 'Renewable Energy', link: '/renewable-energy' },
//   { icon: <FaShieldAlt size={40} />, title: 'Insurance', link: '/insurance' },
//   { icon: <FaShoppingCart size={40} />, title: 'E Commerce', link: '/ecommerce' },
//   { icon: <FaStore size={40} />, title: 'Retail', link: '/retail' },
//   { icon: <FaHome size={40} />, title: 'Real Estate', link: '/real-estate' },
//   { icon: <FaMoneyBill size={40} />, title: 'BFSI', link: '/bfsi' },  // Added BFSI
//   { icon: <FaWrench size={40} />, title: 'Engineering & Manufacturing', link: '/engineering-manufacturing' },  // Added Engineering & Manufacturing
//   { icon: <FaTv size={40} />, title: 'Media & Entertainment', link: '/media-entertainment' },  // Added Media & Entertainment
//   { icon: <FaBuilding size={40} />, title: 'Infrastructure', link: '/infrastructure' },  // Added Infrastructure
//   { icon: <FaIndustry size={40} />, title: 'FMCD', link: '/fmcd' },  // Added FMCD
//   { icon: <FaPhoneAlt size={40} />, title: 'Telecom', link: '/telecom' }  // Added Telecom
// ];


// const texts = [
//   { text: 'Welcome', color: '#FF6347' },
//   { text: 'Explore', color: '#4682B4' },
//   { text: 'Discover', color: '#32CD32' },
//   { text: 'Innovate', color: '#FFD700' },
//   { text: 'Grow', color: '#6A5ACD' },
//   { text: 'Industries We Serve', color: '#FF1493' }
// ];

// const IndustryCards: React.FC = () => {
//   const headingRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (headingRef.current) {
//       const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { duration: 1 } });
      
//       texts.forEach((item, index) => {
//         tl.to(headingRef.current, {
//           text: item.text,
//           color: item.color,
//           ease: 'power2.inOut',
//           duration: 1,
//           delay: index === 0 ? 0 : 1,
//         });
//       });
//     }
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100">
//       <div className="text-4xl md:text-5xl font-bold text-center mb-8">
//         <div ref={headingRef} className="heading-animation" style={{ color: '#FF6347' }}></div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {industries.map((industry, index) => (
//           <Link to={industry.link} key={index}>
//             <motion.div
//               className="group relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ 
//                 scale: 1.05,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ 
//                 scale: 0.95,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               <div className="absolute inset-0 bg-[#147971] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
//               <div className="relative z-10 text-[#fcbc04] mb-4 transition-colors duration-300 ease-in-out">
//                 {industry.icon}
//               </div>
//               <div className="text-xl font-semibold relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
//                 {industry.title}
//               </div>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndustryCards;


import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import realestate from '../../assets/industryweserve/realestate.png'
import Logo from '../../assets/Logo/logo.svg';
import mediaentertainment from '../../assets/industryweserve/Mediaentertainment.png'
import eccomere from '../../assets/industryweserve/ecommerceicon.png'
import bfsi from '../../assets/industryweserve/BFSI.png'
import finance from '../../assets/industryweserve/financeicon.png'
import educationtraining from '../../assets/industryweserve/educationtrainingicon.png'
import renewablenergy from '../../assets/industryweserve/renewableenergyicon.png'
import retailicon from '../../assets/industryweserve/retailicon.png'
import insurance from '../../assets/industryweserve/insuranceicon.png'
import hotelhospitality from '../../assets/industryweserve/hotelhospitalityicon.png'
import Hospital from '../../assets/industryweserve/Hospital.png';
import telecom from '../../assets/industryweserve/Telecom.png'


gsap.registerPlugin(TextPlugin);

// Updated industries with image URLs
const industries = [
  { image: Hospital, title:'', link: '/hospital' },
  { image: hotelhospitality, title: '', link: '/hotel-hospitality' },
  { image: educationtraining, title: "", link: '/education-training' },
  { image: finance, title: '', link: '/finance' },
  { image: renewablenergy, title: '', link: '/renewable-energy' },
  { image: insurance, title: '', link: '/insurance' },
  { image: eccomere,title: '', link: '/ecommerce' },
  { image: retailicon, title: '', link: '/retail' },
  { image: realestate, title: '', link: '/real-estate' },
  { image: bfsi, title: '', link: '/bfsi' },  
  { image: mediaentertainment, title: '', link: '/media-entertainment' },  
  // { image: 'path/to/engineering-image.jpg', title: 'Engineering & Manufacturing', link: '/engineering-manufacturing' },  

  // { image: 'path/to/infrastructure-image.jpg', title: 'Infrastructure', link: '/infrastructure' },  
  // { image: 'path/to/fmcd-image.jpg', title: 'FMCD', link: '/fmcd' },  
  { image: telecom, title: '', link: '/telecom' }
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
    <div className="p-6 bg-[#27635f]"> {/* Set the background color to blue */}
      {/* <div className="text-4xl md:text-5xl font-bold text-center mb-8 text">
        <div ref={headingRef} className="heading-animation" style={{ color: '#FF6347' }}></div>
      </div> */}

<div className="flex items-center justify-center mb-4"> {/* Reduced margin-bottom for closer alignment */}
        <img src={Logo} alt="Metla Services Logo" className="h-[13px] object-contain mr-2" /> {/* Reduced right margin */}
        <h1 className="text-sm font-bold text-[#fcfdfd]">WHAT WE SERVE</h1> {/* Title remains bold */}
      </div>
  
      <p className="text-2xl text-center mb-8 font-bold text-white"> {/* Made text bold */}
       Industries We Serve
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"> {/* Adjust grid for 6 images */}
        {industries.map((industry, index) => (
          <Link to={industry.link} key={index}>
            <motion.div
              className="group relative bg- p-4 flex flex-col items-center justify-center overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
           
             
            >
              <div className="absolute inset-0 bg-[#147971] opacity-0 "></div>
              <div className="relative z-10 mb-8 transform scale-125 transition-transform duration-500 ease-in-out">
  {/* Image instead of icon */}
  <img src={industry.image} alt={industry.title} className="h-32 w-32 object-contain" /> {/* Set the initial image size */}
</div>


              <div className="text-xl font-semibold relative z-10 transition-colors duration-300 ">
                {industry.title}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IndustryCards;
