

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import realestate from '../../assets/industryweserve/realestate.webp'
import Logo from '../../assets/Logo/logo.svg';
import mediaentertainment from '../../assets/industryweserve/Mediaentertainment.webp'
import eccomere from '../../assets/industryweserve/ecommerceicon.webp'
import bfsi from '../../assets/industryweserve/BFSI.webp'
import finance from '../../assets/industryweserve/financeicon.webp'
import educationtraining from '../../assets/industryweserve/educationtrainingicon.webp'
import renewablenergy from '../../assets/industryweserve/renewableenergyicon.webp'
import retailicon from '../../assets/industryweserve/retailicon.webp'
import insurance from '../../assets/industryweserve/insuranceicon.webp'
import hotelhospitality from '../../assets/industryweserve/hotelhospitalityicon.webp'
import Hospital from '../../assets/industryweserve/Hospital.webp';
import telecom from '../../assets/industryweserve/Telecom.webp'


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
