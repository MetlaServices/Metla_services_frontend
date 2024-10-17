<<<<<<< HEAD
=======

>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
import { Link } from 'react-router-dom';

const HotelAndHospitality = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
          Premier Hospitality Staffing Partner
        </h1>
        <p className="text-white text-lg lg:text-xl max-w-xl mx-auto mb-6 leading-relaxed">
          Tailored staffing solutions for hotels and resorts to enhance guest experiences.
        </p>
        <Link 
          to='/contact' 
          className="bg-white hover:bg-gray-200 text-[#147971] py-3 px-8 rounded-full font-medium shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
=======
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-blue-800 to-blue-600 h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-600 opacity-80"></div>
        <h1 className="relative z-10 text-white text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">Your Premier Hospitality Staffing Partner</h1>
        <p className="relative z-10 text-lg lg:text-xl text-white max-w-2xl mx-auto mb-6 drop-shadow-lg">
          Enhance guest experiences with our specialized staffing solutions tailored for hotels and resorts.
        </p>
        <Link 
          to='/contact' 
          className="relative z-10 bg-white hover:bg-gray-100 text-blue-800 py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105 text-lg font-semibold">
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
          Get Started Today
        </Link>
      </header>

      {/* Main Content Section */}
<<<<<<< HEAD
      <main className="flex-grow w-full flex flex-col items-center py-12 bg-gray-100">
        
        {/* Comprehensive Staffing Solutions Section */}
        <section className="text-center w-full max-w-4xl mb-12 px-4 py-12 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#147971] tracking-wide">Our Staffing Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            We understand the hospitality industry’s unique challenges. Our goal is to provide top-tier personnel who embody professionalism and service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { icon: "🛎️", title: "Front Desk Staff", description: "Professional front desk personnel to welcome guests warmly." },
              { icon: "🍽️", title: "Catering Staff", description: "Expert catering teams for memorable dining experiences." },
              { icon: "🏨", title: "Housekeeping", description: "Dedicated housekeepers ensuring cleanliness and comfort." },
              { icon: "🍸", title: "Bartenders", description: "Skilled bartenders creating signature drinks for guests." },
              { icon: "👩‍🍳", title: "Chefs", description: "Experienced chefs crafting delightful culinary creations." },
              { icon: "👥", title: "Event Coordinators", description: "Event specialists to manage and execute seamless gatherings." },
              { icon: "🚪", title: "Concierge Services", description: "Concierge staff providing personalized guest services." },
              { icon: "🛌", title: "Room Service", description: "Efficient room service teams for guest convenience." },
              { icon: "🧑‍🏭", title: "Maintenance Staff", description: "Reliable maintenance teams to ensure facility safety." },
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
          </div>
        </section>
      </main>
=======
      <main className="flex-grow w-full flex flex-col items-center py-10 bg-gray-100">
        
        {/* Comprehensive Staffing Solutions Section */}
        <section className="text-center w-full max-w-5xl mb-12 px-4 py-10 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Comprehensive Staffing Solutions</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            At Metla Services, we understand the unique challenges of the hospitality industry. Our mission is to deliver exceptional personnel who embody the values of service and professionalism, ensuring a seamless guest experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "Tailored Staffing",
                description: "Customized staffing solutions designed to meet your specific operational needs.",
              },
              {
                icon: "🔍",
                title: "Rigorous Vetting",
                description: "Thorough background checks and interviews ensure you receive only the best candidates.",
              },
              {
                icon: "🕒",
                title: "On-Demand Staffing",
                description: "Flexible staffing options available 24/7 to accommodate sudden demands.",
              },
              {
                icon: "📈",
                title: "Performance Monitoring",
                description: "Regular evaluations to maintain service quality and staff performance.",
              },
              {
                icon: "🤝",
                title: "Long-Term Partnerships",
                description: "We aim to build lasting relationships, growing with your business over time.",
              },
              {
                icon: "🏆",
                title: "Client Satisfaction",
                description: "We prioritize your satisfaction with our dedicated service and support.",
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>

          <Link 
            to='/contact' 
            className="mt-8 inline-block bg-blue-800 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
            Discover Our Services
          </Link>
        </section>

        {/* Benefits Section */}
        <section className="w-full max-w-7xl px-8 py-16 text-center mt-12 bg-white shadow-md rounded-lg">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-8">Why Choose Metla Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
            {[
              {
                title: "Industry Expertise",
                description: "We know the hospitality industry inside out, providing solutions that work.",
              },
              {
                title: "Tailored Staffing Solutions",
                description: "Customizable staffing solutions to meet your specific needs.",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous vetting process ensuring only the best candidates.",
              },
              {
                title: "24/7 Support",
                description: "Around-the-clock support to keep your operations running smoothly.",
              },
              {
                title: "Cost-Effective",
                description: "Reduce hiring costs while maintaining high standards of service.",
              },
              {
                title: "Long-Term Partnerships",
                description: "Building lasting relationships to grow with your business.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center py-6 shadow-md mt-12">
        <p className="text-white">© 2024 Metla Services. All Rights Reserved.</p>
        <p className="text-gray-400 text-sm">Follow us on social media for the latest updates!</p>
      </footer>
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    </div>
  );
};

export default HotelAndHospitality;
<<<<<<< HEAD

=======
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
