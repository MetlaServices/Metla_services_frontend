
import React from 'react';
import { Link } from 'react-router-dom';

const Hospital: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="relative bg-[#147971] h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4 tracking-wide">
          Trusted Healthcare Staffing
        </h1>
        <p className="text-white text-lg mb-6 max-w-lg leading-relaxed">
          Empowering hospitals with tailored staffing solutions for better patient care.
        </p>
        <Link 
          to='/contact' 
          className="bg-white hover:bg-gray-200 text-[#147971] py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-12 bg-gray-100">
        {/* Services Section */}
        <section className="text-center w-full max-w-4xl mb-12 px-4">
          <h2 className="text-3xl font-semibold mb-4 text-[#147971] tracking-wide">Our Staffing Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We provide skilled healthcare professionals to meet your hospital's unique staffing needs.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-4xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "🩺 Registered Nurses", description: "Compassionate RNs ensuring quality patient care." },
              { title: "🏥 Healthcare Administrators", description: "Efficient administrators for optimal outcomes." },
              { title: "🧪 Medical Technologists", description: "Experts in diagnostic and lab operations." },
              { title: "💊 Pharmacy Technicians", description: "Managing pharmacy services with precision." },
              { title: "🚑 Emergency Technicians", description: "EMTs providing critical care in emergencies." },
              { title: "🩹 Surgical Technologists", description: "Assisting in surgical procedures for patient safety." },
              { title: "🩻 Radiologic Technologists", description: "Performing imaging procedures to aid in diagnosis." },
              { title: "🧑‍⚕️ Nurse Practitioners", description: "Providing advanced patient care and treatment." },
              { title: "👩‍🔬 Clinical Lab Technicians", description: "Conducting tests to support healthcare decisions." },
            ].map((service, index) => (
              <li key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
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

export default Hospital;
