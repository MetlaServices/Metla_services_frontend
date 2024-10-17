
// import { Link } from 'react-router-dom';
// import { FaSolarPanel, FaWind, FaBatteryHalf, FaUsers, FaHandshake } from 'react-icons/fa';

// const RenewableEnergy = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-100 to-red-300">
//       {/* Header Section */}
//       <header className="relative flex flex-col justify-center items-center text-center py-20 px-6">
//         <h1 className="text-6xl font-bold text-red-800 drop-shadow-lg">Renewable Energy Staffing Solutions</h1>
//         <p className="text-xl text-red-600 mt-4">Connecting Talent with Sustainable Opportunities</p>
//         <Link 
//           to='/contact' 
//           className="mt-6 bg-red-800 hover:bg-red-700 text-white py-3 px-8 rounded-full transition duration-300 shadow-lg">
//           Get Started
//         </Link>
//       </header>

//       {/* Main Content Section */}
//       <main className="flex-grow w-full flex flex-col items-center py-10">
//         {/* Animated Background with Icons */}
//         <section className="relative w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
//           <div className="absolute inset-0 bg-gradient-to-b from-red-100 to-red-300 opacity-50 animate-pulse"></div>
//           <div className="relative z-10 text-center">
//             <h2 className="text-4xl font-bold text-red-800 mb-6">Why Choose Us?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               <div className="flex flex-col items-center">
//                 <FaSolarPanel className="text-red-600 text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-red-800">Expertise in Solar</h3>
//                 <p className="text-gray-600">Vetted professionals ready for solar projects.</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <FaWind className="text-red-600 text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-red-800">Wind Energy Specialists</h3>
//                 <p className="text-gray-600">Connecting you with wind energy experts.</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <FaBatteryHalf className="text-red-600 text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-red-800">Battery Tech Talent</h3>
//                 <p className="text-gray-600">Top talent for battery and storage solutions.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Tailored Staffing Solutions Section */}
//         <section className="relative w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
//           <div className="relative z-10 text-center">
//             <h2 className="text-4xl font-bold text-red-800 mb-6">Tailored Staffing Solutions</h2>
//             <p className="text-lg text-gray-600 mb-4">We provide personalized staffing solutions that fit your unique project needs.</p>
//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <Link 
//                 to='/contact' 
//                 className="bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//                 Project-Based Staffing
//               </Link>
//               <Link 
//                 to='/contact' 
//                 className="bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//                 Direct Hire Placement
//               </Link>
//               <Link 
//                 to='/contact' 
//                 className="bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//                 Temporary Staffing
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Industry Impact Section */}
//         <section className="relative w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
//           <div className="relative z-10 text-center">
//             <h2 className="text-4xl font-bold text-red-800 mb-6">The Impact of Renewable Energy</h2>
//             <p className="text-lg text-gray-600 mb-4">Renewable energy is reshaping our world, driving economic growth, and promoting sustainability.</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
//               <div className="flex flex-col items-center">
//                 <FaUsers className="text-red-600 text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-red-800">Building Strong Teams</h3>
//                 <p className="text-gray-600">Our staffing solutions empower businesses to build strong, effective teams in the renewable sector.</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <FaHandshake className="text-red-600 text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-red-800">Collaborative Partnerships</h3>
//                 <p className="text-gray-600">We believe in forming partnerships that benefit both clients and candidates.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="relative w-full max-w-5xl px-4 py-10">
//           <div className="relative z-10 text-center">
//             <h2 className="text-4xl font-bold text-red-800 mb-6">Join Us in Making a Difference</h2>
//             <p className="text-lg text-gray-600 mb-4">Partner with Metla Services for all your renewable energy staffing needs. Together, we can create a sustainable future.</p>
//             <Link 
//               to='/contact' 
//               className="mt-8 inline-block bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//               Contact Us Today
//             </Link>
//           </div>
//         </section>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-red-800 text-white py-6">
//         <div className="text-center">
//           <p>&copy; {new Date().getFullYear()} Metla Services. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default RenewableEnergy;

// import { Link } from 'react-router-dom';
// import { FaSolarPanel, FaWind, FaBatteryHalf, FaUsers, FaHandshake } from 'react-icons/fa';

// const RenewableEnergy = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header Section */}
//       <header className="flex flex-col justify-center items-center text-center py-20 px-6">
//         <h1 className="text-6xl font-bold text-[#147971] drop-shadow-lg">Renewable Energy Staffing Solutions</h1>
//         <p className="text-xl text-gray-700 mt-4">Connecting Talent with Sustainable Opportunities</p>
//         <Link 
//           to='/contact' 
//           className="mt-6 bg-[#147971] hover:bg-[#126759] text-white py-3 px-8 rounded-full transition duration-300 shadow-lg">
//           Get Started
//         </Link>
//       </header>

//       {/* Main Content Section */}
//       <main className="flex-grow w-full flex flex-col items-center py-10">
//         {/* Icon Section */}
//         <section className="w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-[#147971] mb-6">Why Choose Us?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               <div className="flex flex-col items-center">
//                 <FaSolarPanel className="text-[#147971] text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-[#147971]">Expertise in Solar</h3>
//                 <p className="text-gray-600">Vetted professionals ready for solar projects.</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <FaWind className="text-[#147971] text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-[#147971]">Wind Energy Specialists</h3>
//                 <p className="text-gray-600">Connecting you with wind energy experts.</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <FaBatteryHalf className="text-[#147971] text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-[#147971]">Battery Tech Talent</h3>
//                 <p className="text-gray-600">Top talent for battery and storage solutions.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Staffing Solutions Section */}
//         <section className="w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-[#147971] mb-6">Tailored Staffing Solutions</h2>
//             <p className="text-lg text-gray-600 mb-4">We provide personalized staffing solutions that fit your unique project needs.</p>
//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <Link 
//                 to='/contact' 
//                 className="bg-[#147971] hover:bg-[#126759] text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//                 Project-Based Staffing
//               </Link>
//               <Link 
//                 to='/contact' 
//                 className="bg-[#147971] hover:bg-[#126759] text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//                 Direct Hire Placement
//               </Link>
//               <Link 
//                 to='/contact' 
//                 className="bg-[#147971] hover:bg-[#126759] text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//                 Temporary Staffing
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Industry Impact Section */}
//         <section className="w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-[#147971] mb-6">The Impact of Renewable Energy</h2>
//             <p className="text-lg text-gray-600 mb-4">Renewable energy is reshaping our world, driving economic growth, and promoting sustainability.</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
//               <div className="flex flex-col items-center">
//                 <FaUsers className="text-[#147971] text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-[#147971]">Building Strong Teams</h3>
//                 <p className="text-gray-600">Our staffing solutions empower businesses to build strong, effective teams in the renewable sector.</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <FaHandshake className="text-[#147971] text-6xl mb-4" />
//                 <h3 className="text-xl font-semibold text-[#147971]">Collaborative Partnerships</h3>
//                 <p className="text-gray-600">We believe in forming partnerships that benefit both clients and candidates.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="w-full max-w-5xl px-4 py-10">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-[#147971] mb-6">Join Us in Making a Difference</h2>
//             <p className="text-lg text-gray-600 mb-4">Partner with Metla Services for all your renewable energy staffing needs. Together, we can create a sustainable future.</p>
//             <Link 
//               to='/contact' 
//               className="mt-8 inline-block bg-[#147971] hover:bg-[#126759] text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
//               Contact Us Today
//             </Link>
//           </div>
//         </section>
//       </main>
      
//     </div>
//   );
// };

// export default RenewableEnergy;



import { Link } from 'react-router-dom';

const RenewableEnergy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Your Premier Staffing Partner in Renewable Energy
        </h1>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Connecting renewable energy companies with skilled professionals to power a sustainable future.
        </p>
        <Link 
          to='/contact' 
          className="bg-white hover:bg-gray-200 text-[#147971] py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Start Your Journey
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-12 bg-gray-100">
        
        <section className="text-center w-full max-w-4xl mb-12 px-4">
          <h2 className="text-3xl font-semibold mb-4 text-[#147971] tracking-wide">Our Staffing Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We provide skilled professionals to meet your renewable energy staffing needs.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-4xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Renewable Energy Engineers",
                description: "Engineers designing and implementing renewable systems.",
                icon: "🔋",
              },
              {
                title: "Project Managers",
                description: "Experienced managers ensuring project success.",
                icon: "📊",
              },
              {
                title: "Solar Technicians",
                description: "Experts installing and maintaining solar systems.",
                icon: "☀️",
              },
              {
                title: "Wind Turbine Technicians",
                description: "Technicians specialized in wind energy systems.",
                icon: "🌬️",
              },
              {
                title: "Energy Efficiency Consultants",
                description: "Consultants helping to optimize energy use.",
                icon: "💡",
              },
              {
                title: "Environmental Scientists",
                description: "Scientists ensuring compliance with environmental regulations.",
                icon: "🌍",
              },
              {
                title: "Electrical Engineers",
                description: "Engineers focusing on electrical aspects of renewable projects.",
                icon: "⚡",
              },
              {
                title: "Sustainability Advisors",
                description: "Advisors promoting sustainable practices and policies.",
                icon: "♻️",
              },
              {
                title: "Data Analysts",
                description: "Analysts leveraging data for renewable energy optimization.",
                icon: "📈",
              }
            ].map((service, index) => (
              <li key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="text-5xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#147971] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to='/service-details' className="text-[#147971] hover:underline transition-all duration-300">
                  Learn More
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default RenewableEnergy;
