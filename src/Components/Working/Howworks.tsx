
// import React from 'react';

// import Logo from '../../assets/Logo/logo.svg';
// import jobicon from '../../assets/how it works/job.webp';
// import registericon from '../../assets/how it works/register.webp';
// import searchdreamjob from '../../assets/how it works/searchdrean.webp';
// import updateprofileicon from '../../assets/how it works/updateprofile.webp';

// // Array for main steps

// // New array for images, titles, and content
// const featureSteps = [
//   {
//     image: registericon, // Replace with actual image paths
//     title: 'Register Account',
//     content: 'Register by filling our simple form',
//   },
//   {
//     image: updateprofileicon,
//     title: 'Update Profile',
//     content: 'Update your complete latest details',
//   },
//   {
//     image: searchdreamjob,
//     title: 'Search Dream Job',
//     content: 'Search various employers using filter',
//   },
//   {
//     image: jobicon,
//     title: 'Apply for job',
//     content: 'Apply for your dream job and get hired ',
//   },
// ];

// const HowItWorks: React.FC = () => {

//   return (
//     <div className="bg-white-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-center mb-4">
//           <img src={Logo} alt="Metla Services Logo" className="h-[13px] object-contain mr-2" />
//           <h1 className="text-m font-bold text-[#147971]">How IT WORKS</h1>
//         </div>

//         <p className="text-xl text-center mb-8 font-bold">
//           Just a few steps and you are ready to go
//         </p>

//         {/* Responsive Section for Features */}
//         <div className="mt-8">
//           <div className="flex flex-col md:flex-row justify-center gap-4"> {/* Changed to flex-col for mobile and row for larger screens */}
//             {featureSteps.map((feature, index) => (
//               <div key={index} className="p-4 flex flex-col items-center w-full max-w-xs">
//                 <img src={feature.image} alt={feature.title} className="w-20 h-20 md:w-24 md:h-24 mb-2" /> {/* Adjusted image size for mobile */}
//                 <h3 className="text-lg md:text-xl font-semibold mb-1">{feature.title}</h3> {/* Adjusted text size for mobile */}
//                 <p className="text-gray-600 text-center text-sm md:text-base">{feature.content}</p> {/* Adjusted font size */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;



import React from 'react';

import Logo from '../../assets/Logo/logo.svg';
import jobicon from '../../assets/how it works/job.webp';
import registericon from '../../assets/how it works/register.webp';
import searchdreamjob from '../../assets/how it works/searchdrean.webp';
import updateprofileicon from '../../assets/how it works/updateprofile.webp';

// Array for main steps
const featureSteps = [
  {
    image: registericon,
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
    title: 'Apply for Job',
    content: 'Apply for your dream job and get hired',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <img src={Logo} alt="Metla Services Logo" className="h-8 object-contain mr-2" />
          <h1 className="text-lg font-bold text-[#147971]">How IT WORKS</h1>
        </div>

        <p className="text-xl text-center mb-8 font-bold">
          Just a few steps and you are ready to go
        </p>

        {/* Responsive Section for Features */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6"> {/* Flexbox for responsive layout */}
            {featureSteps.map((feature, index) => (
              <div key={index} className="flex flex-col items-center w-full max-w-xs p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105"> {/* Flexbox on card */}
                <img src={feature.image} alt={feature.title} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2" />
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
