// import React from 'react';
// import { Link } from 'react-router-dom';

// const Retail: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-green-600 to-green-400 shadow-lg">
//         <div className="max-w-screen-xl mx-auto px-4 py-16 text-center text-white">
//           <h1 className="text-5xl font-bold">Transforming Retail Experiences</h1>
//           <p className="mt-4 text-lg">
//             Unlock the potential of your retail business with our innovative solutions.
//           </p>
//           <Link 
//             to="/contact" 
//             className="mt-8 inline-block bg-white text-green-700 py-3 px-6 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition duration-300">
//             Get Started
//           </Link>
//         </div>
//       </header>

//       {/* Retail Industry Overview Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="max-w-screen-xl mx-auto text-center">
//           <h2 className="text-4xl font-semibold text-green-800">The Retail Industry Landscape</h2>
//           <p className="mt-4 max-w-3xl mx-auto text-gray-600">
//             The retail industry is undergoing rapid changes, with shifts in consumer behavior and technological advancements. At Metla Services, we provide tailored solutions that empower retailers to adapt and thrive in this dynamic environment.
//           </p>
//         </div>
//       </section>

//       {/* Our Solutions for Retail Section */}
//       <section className="py-20 max-w-screen-xl mx-auto px-4">
//         <h2 className="text-4xl font-semibold text-green-800 text-center">Our Solutions for Retail</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//           {[
//             {
//               title: "Point of Sale Systems",
//               description: "Integrated POS systems that streamline transactions and enhance customer experiences.",
//             },
//             {
//               title: "Customer Relationship Management",
//               description: "Build lasting relationships with customers through personalized engagement and service.",
//             },
//             {
//               title: "Inventory Optimization",
//               description: "Efficient inventory management solutions that minimize costs and maximize stock availability.",
//             },
//             {
//               title: "Data Analytics and Insights",
//               description: "Leverage data-driven insights to understand consumer behavior and improve decision-making.",
//             },
//             {
//               title: "Omni-channel Retail Solutions",
//               description: "Seamlessly connect online and offline sales channels for a cohesive shopping experience.",
//             },
//             {
//               title: "Supply Chain Management",
//               description: "Enhance supply chain efficiency to ensure timely delivery and reduce operational costs.",
//             },
//           ].map((solution, index) => (
//             <div key={index} className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 flex flex-col">
//               <h3 className="text-2xl font-semibold text-green-700 mb-2">{solution.title}</h3>
//               <p className="text-gray-700 flex-grow">{solution.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Future of Retail Section */}
//       <section className="py-20 bg-gray-200">
//         <div className="max-w-screen-xl mx-auto text-center">
//           <h2 className="text-4xl font-semibold text-green-800">Shaping the Future of Retail</h2>
//           <p className="mt-4 max-w-3xl mx-auto text-gray-600">
//             At Metla Services, we are committed to driving innovation in the retail sector. Our forward-thinking solutions are designed to adapt to the evolving landscape, ensuring your business stays competitive and relevant.
//           </p>
//         </div>
//       </section>

   
//     </div>
//   );
// };

// export default Retail;




// import { Link } from "react-router-dom";

// const Retail = () => {
//   return (
//       <div className="bg-gray-100 min-h-screen flex flex-col">
//           {/* Header Section */}
//           <header className="bg-green-700 text-white text-center py-16">
//               <h1 className="text-5xl font-extrabold">Empower Your Retail Workforce</h1>
//               <p className="mt-4 text-xl">Specialized staffing solutions for the retail industry.</p>
//           </header>

//           {/* Icon Section */}
//           <section className="flex flex-col items-center max-w-7xl mx-auto px-6 my-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Expertise at a Glance</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//                   <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                       <div className="text-green-600 text-6xl mb-4">🛍️</div>
//                       <h3 className="text-2xl font-semibold">Customer Engagement</h3>
//                       <p className="text-gray-700">Knowledgeable staff to enhance customer experiences.</p>
//                   </div>
//                   <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                       <div className="text-green-600 text-6xl mb-4">📦</div>
//                       <h3 className="text-2xl font-semibold">Operational Support</h3>
//                       <p className="text-gray-700">Trained stock clerks for seamless operations.</p>
//                   </div>
//                   <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                       <div className="text-green-600 text-6xl mb-4">💳</div>
//                       <h3 className="text-2xl font-semibold">Checkout Efficiency</h3>
//                       <p className="text-gray-700">Expert cashiers to speed up the checkout process.</p>
//                   </div>
//               </div>
//           </section>

//           {/* Benefits Section */}
//           <section className="bg-green-200 py-12">
//               <div className="max-w-5xl mx-auto text-center">
//                   <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Partner with Us?</h2>
//                   <p className="text-lg text-gray-700 mb-6">
//                       Experience the Metla difference:
//                   </p>
//                   <ul className="list-disc list-inside text-lg text-gray-700 mx-auto max-w-lg mb-8">
//                       <li>🔍 Tailored staffing solutions for your retail needs.</li>
//                       <li>🤝 Reliable support with a dedicated team.</li>
//                       <li>💼 Expert recruitment to find the right fit.</li>
//                   </ul>
//               </div>
//           </section>

//           {/* Key Features Section */}
//           <section className="bg-white py-12">
//               <div className="max-w-5xl mx-auto text-center">
//                   <h2 className="text-4xl font-bold text-gray-800 mb-6">Key Features of Our Services</h2>
//                   <div className="flex flex-col space-y-6">
//                       <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                           <h3 className="text-2xl font-semibold text-green-700">Personalized Recruitment</h3>
//                           <p className="text-lg text-gray-600">
//                               We take the time to understand your business needs and culture to find the perfect candidates for your retail team.
//                           </p>
//                       </div>
//                       <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                           <h3 className="text-2xl font-semibold text-green-700">Ongoing Training Programs</h3>
//                           <p className="text-lg text-gray-600">
//                               Our staff undergoes continuous training to stay updated on the latest retail trends and customer service techniques.
//                           </p>
//                       </div>
//                       <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                           <h3 className="text-2xl font-semibold text-green-700">Flexible Staffing Solutions</h3>
//                           <p className="text-lg text-gray-600">
//                               Whether you need seasonal help or long-term staff, we can provide flexible staffing solutions tailored to your needs.
//                           </p>
//                       </div>
//                   </div>
//               </div>
//           </section>

//           {/* Call to Action Section */}
//           <footer className="bg-green-700 py-8 text-center">
//               <h2 className="text-4xl font-semibold text-white mb-4">Transform Your Retail Experience</h2>
//               <p className="text-lg text-gray-100 mb-6">Join us for innovative staffing solutions that drive success.</p>
//               <Link to='/contact'>
//                   <button className="bg-green-600 text-white px-8 py-3 rounded-md shadow-lg transition duration-300 hover:bg-green-700 hover:scale-105">
//                       Start Your Journey Today!
//                   </button>
//               </Link>
//           </footer>
//       </div>
//   );
// };

// export default Retail;


import { Link } from 'react-router-dom';

const Retail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Your Premier Staffing Partner in Retail
        </h1>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Connecting retail businesses with skilled professionals for optimal service.
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
            We provide expert staffing solutions tailored for the retail industry.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-4xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Sales Associates",
                description: "Friendly associates providing excellent customer service.",
                icon: "🛍️",
              },
              {
                title: "Inventory Managers",
                description: "Professionals overseeing stock levels and orders.",
                icon: "📦",
              },
              {
                title: "Visual Merchandisers",
                description: "Experts in creating attractive product displays.",
                icon: "🎨",
              },
              {
                title: "Cashiers",
                description: "Efficient cash handling and customer checkout.",
                icon: "💳",
              },
              {
                title: "Customer Service Representatives",
                description: "Support staff addressing customer inquiries.",
                icon: "📞",
              },
              {
                title: "Store Managers",
                description: "Managers ensuring smooth store operations.",
                icon: "🏪",
              },
              {
                title: "Loss Prevention Specialists",
                description: "Experts focused on preventing theft and loss.",
                icon: "🔒",
              },
              {
                title: "E-commerce Specialists",
                description: "Professionals managing online retail operations.",
                icon: "💻",
              },
              {
                title: "Logistics Coordinators",
                description: "Coordinators ensuring efficient product delivery.",
                icon: "🚚",
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

export default Retail;

