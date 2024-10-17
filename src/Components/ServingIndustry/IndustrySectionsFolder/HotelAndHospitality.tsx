import { Link } from 'react-router-dom';

const HotelAndHospitality = () => {
  return (
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
          Get Started Today
        </Link>
      </header>

      {/* Main Content Section */}
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
    </div>
  );
};

export default HotelAndHospitality;
