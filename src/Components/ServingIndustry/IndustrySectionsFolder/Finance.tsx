// import { Link } from 'react-router-dom';

// const Finance = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header Section */}
//       <header className="relative bg-gradient-to-r from-yellow-600 to-yellow-400 h-[70vh] flex flex-col justify-center items-center text-center px-6 rounded-b-lg shadow-lg">
//         <h1 className="text-white text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">Your Trusted Staffing Partner in Finance</h1>
//         <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto mb-6 drop-shadow-lg">
//           Empowering financial institutions with skilled professionals who drive success.
//         </p>
//         <Link 
//           to='/contact' 
//           className="bg-white hover:bg-gray-100 text-yellow-600 py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105 text-lg font-semibold">
//           Get Started Today
//         </Link>
//       </header>

//       {/* Main Content Section */}
//       <main className="flex-grow w-full flex flex-col items-center py-10 bg-gray-100">
        
//       <section className="relative w-full max-w-5xl mb-12 px-4 py-10">
//       {/* Animated Background */}
//       <div className="absolute inset-0 z-0 bg-yellow-50 animate-pulse opacity-30" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}></div>
//       <div className="relative z-10 bg-white rounded-lg shadow-lg border border-yellow-300 overflow-hidden">
//         <h2 className="text-4xl font-bold mb-6 text-yellow-800 text-center">Comprehensive Staffing Solutions for Finance</h2>
//         <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center">
//           At Metla Services, we recognize the complexities of the finance sector. Our staffing solutions are designed to match the demands of your organization with qualified, experienced professionals who understand the nuances of the industry.
//         </p>
        
//         {/* Staffing Categories with Animation */}
//         <div className="flex flex-col items-center space-y-8">
//           {[
//             {
//               title: "Financial Analysts",
//               description: "Providing skilled analysts who can interpret data and drive strategic decisions.",
//               icon: "📊",
//             },
//             {
//               title: "Account Managers",
//               description: "Dedicated account managers ensuring smooth client relations and service delivery.",
//               icon: "🤝",
//             },
//             {
//               title: "Risk Management Experts",
//               description: "Professionals equipped to identify and mitigate potential risks.",
//               icon: "⚖️",
//             },
//             {
//               title: "Compliance Specialists",
//               description: "Staff well-versed in industry regulations and compliance standards.",
//               icon: "🛡️",
//             },
//             {
//               title: "Tax Professionals",
//               description: "Experienced tax specialists to manage your financial obligations efficiently.",
//               icon: "💰",
//             },
//             {
//               title: "IT Support for Finance",
//               description: "Providing tech support specialists familiar with finance software and tools.",
//               icon: "💻",
//             },
//           ].map((service, index) => (
//             <div key={index} className="flex flex-col items-center p-6 bg-white border border-yellow-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
//               <div className="text-5xl mb-4 animate-bounce">{service.icon}</div>
//               <h3 className="text-2xl font-semibold text-yellow-800 mb-2 text-center">{service.title}</h3>
//               <p className="text-gray-600 text-center">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         <Link 
//           to='/contact' 
//           className="mt-8 inline-block bg-yellow-600 hover:bg-yellow-500 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
//           Discover Our Services
//         </Link>
//       </div>
//     </section>

//         {/* Transforming Finance Together Section */}
//         <section className="w-full max-w-7xl px-8 py-16 mt-12 bg-yellow-100 shadow-lg rounded-lg relative overflow-hidden flex flex-col items-center">
//           <h2 className="text-6xl font-extrabold text-yellow-900 mb-8 text-center">Transforming Finance Together</h2>
//           <p className="text-lg mb-8 text-gray-700 text-center max-w-xl">
//             At Metla Services, we believe in the power of collaboration. Our staffing solutions go beyond mere placements; we aim to create a lasting impact in financial settings.
//           </p>

//           <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-10 md:space-y-0 md:space-x-10">
//             {[ 
//               {
//                 text: "Imagine: a finance team equipped with data-driven analysts who provide actionable insights for strategic growth.",
//                 color: "bg-yellow-300",
//               },
//               {
//                 text: "Visualize: a workplace where compliance experts ensure that your operations remain above board and efficient.",
//                 color: "bg-yellow-200",
//               },
//               {
//                 text: "Join us: in shaping the future of finance, one qualified staff member at a time.",
//                 color: "bg-yellow-400",
//               }
//             ].map((item, index) => (
//               <div key={index} className={`flex flex-col items-center justify-center ${item.color} w-full py-8 rounded-lg shadow-md transition-transform transform hover:scale-105`}>
//                 <p className="text-lg text-gray-700 text-center px-4">{item.text}</p>
//               </div>
//             ))}
//           </div>
          
//           <Link 
//             to='/contact' 
//             className="mt-8 inline-block bg-yellow-600 hover:bg-yellow-500 text-white py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-110">
//             Partner with Us Today
//           </Link>
//         </section>

     
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-center py-6 shadow-md mt-12">
//         <p className="text-white">© 2024 Metla Services. All Rights Reserved.</p>
//         <p className="text-gray-400 text-sm">Follow us on social media for the latest updates!</p>
//       </footer>
//     </div>
//   );
// };

// export default Finance;


// import { Link } from 'react-router-dom';

// const Finance = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header Section */}
//       <header className="relative h-[70vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-teal-800 via-teal-600 to-teal-400">
//         <h1 className="text-white text-5xl lg:text-7xl font-bold mb-4">Your Trusted Staffing Partner in Finance</h1>
//         <p className="text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto mb-6">
//           Empowering financial institutions with skilled professionals who drive success.
//         </p>
//         <Link 
//           to='/contact' 
//           className="bg-white text-teal-800 py-3 px-8 rounded-full shadow-lg transform hover:scale-105 text-lg font-semibold transition-all duration-300">
//           Get Started Today
//         </Link>
//       </header>

//       {/* Main Content Section */}
//       <main className="flex-grow w-full flex flex-col items-center py-10 bg-gray-50">
        
//         {/* Staffing Solutions Section */}
//         <section className="relative w-full max-w-5xl mb-12 px-4 py-10 bg-white rounded-lg shadow-xl border border-teal-400">
//           <h2 className="text-3xl font-semibold mb-4 text-teal-900 text-center">Comprehensive Staffing Solutions for Finance</h2>
//           <p className="text-base leading-relaxed mb-8 text-gray-700 text-center">
//             At Metla Services, we recognize the complexities of the finance sector. Our staffing solutions are designed to match the demands of your organization with qualified, experienced professionals who understand the nuances of the industry.
//           </p>
            
//           <div className="flex flex-col items-center space-y-8">
//             {[
//               { title: "Financial Analysts", description: "Providing skilled analysts who can interpret data and drive strategic decisions.", icon: "📊" },
//               { title: "Account Managers", description: "Dedicated account managers ensuring smooth client relations and service delivery.", icon: "🤝" },
//               { title: "Risk Management Experts", description: "Professionals equipped to identify and mitigate potential risks.", icon: "⚖️" },
//               { title: "Compliance Specialists", description: "Staff well-versed in industry regulations and compliance standards.", icon: "🛡️" },
//               { title: "Tax Professionals", description: "Experienced tax specialists to manage your financial obligations efficiently.", icon: "💰" },
//               { title: "IT Support for Finance", description: "Providing tech support specialists familiar with finance software and tools.", icon: "💻" },
//             ].map((service, index) => (
//               <div key={index} className="flex flex-col items-center p-6 bg-gray-50 border border-teal-200 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold text-teal-800 mb-2 text-center">{service.title}</h3>
//                 <p className="text-gray-600 text-center">{service.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center">
//             <Link 
//               to='/contact' 
//               className="mt-8 bg-teal-800 text-white py-3 px-8 rounded-full shadow-md transform hover:scale-110 transition-all duration-300">
//               Discover Our Services
//             </Link>
//           </div>
//         </section>

//         {/* Transforming Finance Together Section */}
//         <section className="w-full max-w-7xl px-6 py-16 mt-12 bg-white shadow-lg rounded-lg relative flex flex-col items-center border border-teal-400">
//           <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">Transforming Finance Together</h2>
//           <p className="text-base text-gray-700 text-center max-w-lg mb-8">
//             At Metla Services, we believe in the power of collaboration. Our staffing solutions go beyond mere placements; we aim to create a lasting impact in financial settings.
//           </p>

//           <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-8 md:space-y-0 md:space-x-6">
//             {[ 
//               { text: "Imagine: a finance team equipped with data-driven analysts who provide actionable insights for strategic growth.", color: "bg-teal-50" },
//               { text: "Visualize: a workplace where compliance experts ensure that your operations remain above board and efficient.", color: "bg-teal-100" },
//               { text: "Join us: in shaping the future of finance, one qualified staff member at a time.", color: "bg-teal-50" },
//             ].map((item, index) => (
//               <div key={index} className={`w-full py-6 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ${item.color}`}>
//                 <p className="text-gray-700 text-center">{item.text}</p>
//               </div>
//             ))}
//           </div>

//           <Link 
//             to='/contact' 
//             className="mt-8 bg-teal-800 text-white py-3 px-8 rounded-full shadow-md transform hover:scale-110 transition-all duration-300">
//             Partner with Us Today
//           </Link>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Finance;





import { Link } from 'react-router-dom';

const Finance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Your Premier Staffing Partner in Finance
        </h1>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Connecting financial institutions with top-tier professionals to drive success.
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
            We provide skilled financial professionals to meet your organization's unique staffing needs.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-4xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Financial Analysts",
                description: "Analysts who interpret data to drive strategic decisions.",
                icon: "📊",
              },
              {
                title: "Account Managers",
                description: "Account managers ensuring smooth client relations.",
                icon: "🤝",
              },
              {
                title: "Risk Management Experts",
                description: "Experts to identify and mitigate potential risks.",
                icon: "⚖️",
              },
              {
                title: "Compliance Specialists",
                description: "Staff well-versed in industry regulations.",
                icon: "🛡️",
              },
              {
                title: "Tax Professionals",
                description: "Tax specialists managing your financial obligations.",
                icon: "💰",
              },
              {
                title: "IT Support for Finance",
                description: "Tech support specialists familiar with finance software.",
                icon: "💻",
              },
              {
                title: "Budget Analysts",
                description: "Professionals skilled in budget planning and forecasting.",
                icon: "💹",
              },
              {
                title: "Investment Advisors",
                description: "Advisors guiding you through investment opportunities.",
                icon: "📈",
              },
              {
                title: "Payroll Specialists",
                description: "Experts managing payroll and employee compensation.",
                icon: "💵",
              }
            ].map((service, index) => (
              <li key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="text-5xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#147971] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to='/contact' className="text-[#147971] hover:underline transition-all duration-300">
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

export default Finance;
