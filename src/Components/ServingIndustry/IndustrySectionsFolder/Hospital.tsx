import React from 'react';
import { Link } from 'react-router-dom';

const HospitalStaffing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="relative bg-blue-800 h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-600 opacity-70"></div>
        <h1 className="relative z-10 text-white text-6xl font-bold mb-4 drop-shadow-md">Your Trusted Partner in Healthcare Staffing</h1>
        <p className="relative z-10 text-lg text-white max-w-2xl mx-auto mb-6 drop-shadow-md">
          Empowering hospitals with tailored staffing solutions for optimal patient care.
        </p>
        <Link 
          to='/contact' 
          className="relative z-10 bg-white hover:bg-gray-100 text-blue-800 py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105 text-lg font-semibold">
          Get Started
        </Link>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full flex flex-col items-center py-10 bg-gray-100">
        {/* Featured Services Section */}
        <section className="text-center w-full max-w-5xl mb-12 px-4">
          <h2 className="text-4xl font-semibold mb-4 text-blue-800">Our Staffing Solutions for Hospitals</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            At Metla Services, we understand that hospitals face unique challenges when it comes to staffing. Our mission is to provide healthcare facilities with skilled personnel who are not only qualified but also passionate about patient care.
          </p>
          <p className="text-md mb-8 text-gray-600">
            Our extensive network and rigorous screening processes ensure that you have access to the best talent in the industry, tailored specifically to meet the demands of your healthcare environment.
          </p>
        </section>

        {/* Services List */}
        <div className="w-full max-w-5xl px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Registered Nurses (RNs)",
                description: "Compassionate and skilled RNs dedicated to providing high-quality patient care.",
              },
              {
                title: "Certified Nursing Assistants (CNAs)",
                description: "Trained CNAs ready to support daily patient needs and enhance the patient experience.",
              },
              {
                title: "Healthcare Administrators",
                description: "Experienced administrators to ensure efficient operations and optimal patient outcomes.",
              },
              {
                title: "Medical Technologists",
                description: "Expert technologists who support diagnostic processes and laboratory operations.",
              },
              {
                title: "Pharmacy Technicians",
                description: "Knowledgeable technicians managing medication distribution and pharmacy services.",
              },
              {
                title: "Emergency Medical Technicians (EMTs)",
                description: "Quick-response EMTs providing critical care in emergency situations.",
              },
              {
                title: "Physical Therapists",
                description: "Dedicated therapists focused on rehabilitation and recovery for patients.",
              },
              {
                title: "Mental Health Professionals",
                description: "Supportive specialists addressing mental health needs with compassion and expertise.",
              },
            ].map((service, index) => (
              <li key={index} className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link to='/service-details' className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</Link>
              </li>
            ))}
          </ul>
        </div>

        
{/* Enhanced Animated Benefits Section */}
<section className="relative w-full max-w-7xl px-8 py-16 text-center">
  <h2 className="text-5xl font-extrabold text-blue-900 mb-12 tracking-wide relative z-10">Why Partner with Metla Services?</h2>

  {/* Floating Background Animation */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-40 transform scale-150 animate-float"></div>

  {/* Animated Points Container */}
  <div className="relative z-20 grid gap-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-4 animate-section-load">

    {/* Point 1 */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-blue-700 text-white flex justify-center items-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-2xl font-bold">01</span>
      </div>
      <h3 className="text-3xl font-semibold text-blue-900 mb-4 transition-colors duration-300">Healthcare Expertise</h3>
      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
        Our deep knowledge of the healthcare industry ensures that we provide specialized staffing solutions tailored for hospitals and medical facilities, delivering skilled personnel across departments.
      </p>
    </div>

    {/* Point 2 */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-indigo-700 text-white flex justify-center items-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-2xl font-bold">02</span>
      </div>
      <h3 className="text-3xl font-semibold text-blue-900 mb-4 transition-colors duration-300">Flexible Staffing</h3>
      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
        We offer flexible staffing solutions that adapt to the demands of your hospital. Whether you need temporary staff during peak times or permanent healthcare professionals, we’ve got you covered.
      </p>
    </div>

    {/* Point 3 */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-blue-700 text-white flex justify-center items-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-2xl font-bold">03</span>
      </div>
      <h3 className="text-3xl font-semibold text-blue-900 mb-4 transition-colors duration-300">24/7 Staffing Support</h3>
      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
        We ensure that your facility is fully staffed around the clock, offering 24/7 support so you never have to worry about personnel shortages, even during emergencies.
      </p>
    </div>

    {/* Point 4 */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-indigo-700 text-white flex justify-center items-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-2xl font-bold">04</span>
      </div>
      <h3 className="text-3xl font-semibold text-blue-900 mb-4 transition-colors duration-300">Cost-Effective Solutions</h3>
      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
        Metla’s staffing solutions are designed to reduce hiring costs and time, so you can focus on patient care without the financial and administrative burden of recruitment.
      </p>
    </div>

    {/* Point 5 */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-blue-700 text-white flex justify-center items-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-2xl font-bold">05</span>
      </div>
      <h3 className="text-3xl font-semibold text-blue-900 mb-4 transition-colors duration-300">Focus on Patient Outcomes</h3>
      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
        Our aim is to support hospitals by supplying healthcare professionals who enhance patient outcomes, contributing to a higher standard of care and patient satisfaction.
      </p>
    </div>

    {/* Point 6 */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-indigo-700 text-white flex justify-center items-center rounded-full mb-6 animate-bounce-slow">
        <span className="text-2xl font-bold">06</span>
      </div>
      <h3 className="text-3xl font-semibold text-blue-900 mb-4 transition-colors duration-300">Long-Term Partnership</h3>
      <p className="text-lg text-gray-600 leading-relaxed max-w-md">
        We build lasting relationships with hospitals to deliver staffing strategies that evolve with your facility’s needs, ensuring ongoing support and collaborative success.
      </p>
    </div>
  </div>
</section>

      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center py-6 shadow-md mt-12">
        <p className="text-white">© 2024 Metla Services. All Rights Reserved.</p>
        <p className="text-gray-400 text-sm">Follow us on social media for updates!</p>
      </footer>
    </div>
  );
};

export default HospitalStaffing;
