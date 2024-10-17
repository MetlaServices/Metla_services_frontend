import React from 'react';
import { Link } from 'react-router-dom';

const EngineeringManufacturing= () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-green-800 mb-2">
          Metla Services
        </h1>
        <p className="text-xl text-green-600">
          Empowering Your Engineering & Manufacturing Workforce
        </p>
      </header>

      <section className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-green-800 mb-6">
          Unleashing Potential in Every Project
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          At Metla, we don’t just fill positions; we ignite transformations! Our mission is to bridge the gap between talent and opportunity, fueling innovation in engineering and manufacturing.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          From dynamic engineers to dedicated production staff, we connect businesses with exceptional talent that drives results.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
          Why Choose Metla?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-800 mb-2">🌟 Customized Staffing Solutions</h3>
            <p className="text-gray-700">
              We tailor our staffing strategies to your unique needs, ensuring that you get the right talent for your specific projects and culture.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-800 mb-2">🔍 Industry Expertise</h3>
            <p className="text-gray-700">
              Our recruiters possess extensive industry knowledge, enabling us to identify candidates with the right skills to tackle your challenges.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-800 mb-2">✅ Rigorous Candidate Assessments</h3>
            <p className="text-gray-700">
              We conduct comprehensive assessments to ensure our candidates not only meet your skill requirements but also fit seamlessly into your team.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-800 mb-2">🚀 Continuous Development</h3>
            <p className="text-gray-700">
              We invest in our talent with ongoing training and support, keeping them equipped with the latest industry advancements to boost your success.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Our Comprehensive Services
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Our diverse range of services ensures we meet every need in engineering and manufacturing staffing:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mx-auto max-w-md">
          <li>✨ Engineering Talent Acquisition</li>
          <li>🏭 Manufacturing Workforce Solutions</li>
          <li>📊 Project-Specific Staffing</li>
          <li>🎓 Professional Development Programs</li>
        </ul>
      </section>

      <section className="bg-green-50 p-6 rounded-lg shadow-lg mb-12 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Let’s Build the Future Together!
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Partner with Metla Services and unlock a world of possibilities! Our dedication to connecting businesses with exceptional talent makes us the perfect ally in your growth journey.
        </p>
      <Link to='/contact'>  <p className="text-lg text-gray-700">
          <span className="font-bold text-green-600">Contact us today</span> and discover how we can enhance your engineering and manufacturing capabilities with our tailored staffing solutions!
        </p></Link>
      </section>
    </div>
  );
};

export default EngineeringManufacturing;
