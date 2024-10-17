// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer'; // Correct import
// import { FaUserPlus, FaEdit, FaSearch, FaClipboardCheck } from 'react-icons/fa';

// const steps = [
//   {
//     icon: <FaUserPlus className="text-4xl text-blue-500" />,
//     title: 'Register Account',
//     description: 'Register by filling our simple form.',
//   },
//   {
//     icon: <FaEdit className="text-4xl text-green-500" />,
//     title: 'Update Profile',
//     description: 'Update your complete latest details.',
//   },
//   {
//     icon: <FaSearch className="text-4xl text-orange-500" />,
//     title: 'Search Dream Job',
//     description: 'Search various employers using filters.',
//   },
//   {
//     icon: <FaClipboardCheck className="text-4xl text-purple-500" />,
//     title: 'Apply For Job',
//     description: 'Apply for your dream job and get hired.',
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: 'spring',
//       stiffness: 50,
//       duration: 0.6,
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const HowItWorks: React.FC = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Only trigger the animation once
//     threshold: 0.1, // Trigger when 10% of the element is visible
//   });

//   return (
//     <div className="bg-gray-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-3xl font-bold text-center mb-8 text-[#147971]">How It Works</div>
//         <p className="text-lg text-center mb-12">Just a few steps and you are ready to go</p>
//         <motion.div
//           ref={ref}
//           className="flex flex-wrap justify-center gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//         >
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-xs"
//               variants={itemVariants}
//             >
//               <div className="mb-4">{step.icon}</div>
//               <div className="text-xl font-semibold mb-2">{step.title}</div>
//               <p className="text-gray-600 text-center">{step.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import Logo from '../../assets/Logo/logo.svg';
import jobicon from '../../assets/how it works/job icon.jpg'
import registericon from '../../assets/how it works/register icon.jpg'
import searchdreamjob from '../../assets/how it works/searchdrean job icon.jpg'
import updateprofileicon from '../../assets/how it works/updateprofile icon.jpg'
import { FaUserPlus, FaEdit, FaSearch, FaClipboardCheck } from 'react-icons/fa';

// Array for main steps
const steps = [
  {
    icon: <FaUserPlus className="text-4xl text-blue-500" />,
    title: 'Register Account',
    description: 'Register by filling our simple form.',
  },
  {
    icon: <FaEdit className="text-4xl text-green-500" />,
    title: 'Update Profile',
    description: 'Update your complete latest details.',
  },
  {
    icon: <FaSearch className="text-4xl text-orange-500" />,
    title: 'Search Dream Job',
    description: 'Search various employers using filters.',
  },
  {
    icon: <FaClipboardCheck className="text-4xl text-purple-500" />,
    title: 'Apply For Job',
    description: 'Apply for your dream job and get hired.',
  },
];

// New array for images, titles, and content
const featureSteps = [
  {
    image: registericon, // Replace with actual image paths
    title: 'Register Account',
    content: 'Register by filling our simple form',
  },
  {
    image: updateprofileicon,
    title: 'Update Profile',
    content: 'Update your complete latest details',
  },
  {
    image: searchdreamjob,
    title: 'Search Dream Job',
    content: 'Search various employers using filter',
  },
  {
    image: jobicon,
    title: 'Apply for job',
    content: 'Apply for your dream job and get hired ',
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks: React.FC = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true, 
  //   threshold: 0.1, 
  // });

  return (
    <div className="bg-white-100 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center mb-4"> {/* Reduced margin-bottom for closer alignment */}
        <img src={Logo} alt="Metla Services Logo" className="h-[13px] object-contain mr-2" /> {/* Reduced right margin */}
        <h1 className="text-m font-bold text-[#147971]">How IT WORKS</h1> {/* Title remains bold */}
      </div>
  
      <p className="text-xl text-center mb-8 font-bold"> {/* Made text bold */}
        Just a few steps and you are ready to go
      </p>
  
      {/* New Section for Features in a single row */}
      <div className="mt-8"> {/* Reduced top margin */}
        <div className="flex justify-center gap-1"> {/* Decreased gap between images */}
          {featureSteps.map((feature, index) => (
            <div key={index} className="p-1 flex flex-col items-center w-full max-w-xs"> {/* Reduced padding */}
              <img src={feature.image} alt={feature.title} className="w-24 h-24 mb-2" /> {/* Image size remains the same */}
              <h3 className="text-xl font-semibold mb-1">{feature.title}</h3> {/* Reduced margin-bottom */}
              <p className="text-gray-600 text-center">{feature.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default HowItWorks;
