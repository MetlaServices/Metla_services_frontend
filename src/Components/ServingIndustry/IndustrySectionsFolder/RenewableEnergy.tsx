import React from 'react';
import { Link } from 'react-router-dom';
import { FaSolarPanel, FaWind, FaBatteryHalf, FaUsers, FaHandshake } from 'react-icons/fa';

const RenewableEnergy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-100 to-red-300">
      {/* Header Section */}
      <header className="relative flex flex-col justify-center items-center text-center py-20 px-6">
        <h1 className="text-6xl font-bold text-red-800 drop-shadow-lg">Renewable Energy Staffing Solutions</h1>
        <p className="text-xl text-red-600 mt-4">Connecting Talent with Sustainable Opportunities</p>
        <Link 
          to='/contact' 
          className="mt-6 bg-red-800 hover:bg-red-700 text-white py-3 px-8 rounded-full transition duration-300 shadow-lg">
          Get Started
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-10">
        {/* Animated Background with Icons */}
        <section className="relative w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-red-100 to-red-300 opacity-50 animate-pulse"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-red-800 mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <FaSolarPanel className="text-red-600 text-6xl mb-4" />
                <h3 className="text-xl font-semibold text-red-800">Expertise in Solar</h3>
                <p className="text-gray-600">Vetted professionals ready for solar projects.</p>
              </div>
              <div className="flex flex-col items-center">
                <FaWind className="text-red-600 text-6xl mb-4" />
                <h3 className="text-xl font-semibold text-red-800">Wind Energy Specialists</h3>
                <p className="text-gray-600">Connecting you with wind energy experts.</p>
              </div>
              <div className="flex flex-col items-center">
                <FaBatteryHalf className="text-red-600 text-6xl mb-4" />
                <h3 className="text-xl font-semibold text-red-800">Battery Tech Talent</h3>
                <p className="text-gray-600">Top talent for battery and storage solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Staffing Solutions Section */}
        <section className="relative w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-red-800 mb-6">Tailored Staffing Solutions</h2>
            <p className="text-lg text-gray-600 mb-4">We provide personalized staffing solutions that fit your unique project needs.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to='/contact' 
                className="bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
                Project-Based Staffing
              </Link>
              <Link 
                to='/contact' 
                className="bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
                Direct Hire Placement
              </Link>
              <Link 
                to='/contact' 
                className="bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
                Temporary Staffing
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Impact Section */}
        <section className="relative w-full max-w-5xl mb-12 px-4 py-10 bg-white shadow-lg rounded-lg">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-red-800 mb-6">The Impact of Renewable Energy</h2>
            <p className="text-lg text-gray-600 mb-4">Renewable energy is reshaping our world, driving economic growth, and promoting sustainability.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="flex flex-col items-center">
                <FaUsers className="text-red-600 text-6xl mb-4" />
                <h3 className="text-xl font-semibold text-red-800">Building Strong Teams</h3>
                <p className="text-gray-600">Our staffing solutions empower businesses to build strong, effective teams in the renewable sector.</p>
              </div>
              <div className="flex flex-col items-center">
                <FaHandshake className="text-red-600 text-6xl mb-4" />
                <h3 className="text-xl font-semibold text-red-800">Collaborative Partnerships</h3>
                <p className="text-gray-600">We believe in forming partnerships that benefit both clients and candidates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative w-full max-w-5xl px-4 py-10">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-red-800 mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg text-gray-600 mb-4">Partner with Metla Services for all your renewable energy staffing needs. Together, we can create a sustainable future.</p>
            <Link 
              to='/contact' 
              className="mt-8 inline-block bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-red-800 text-white py-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Metla Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RenewableEnergy;