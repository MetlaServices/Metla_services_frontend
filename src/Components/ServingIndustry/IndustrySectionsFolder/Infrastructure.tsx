import React from 'react';
import { Link } from 'react-router-dom';

const Infrastructure = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0 bg-green-600 opacity-50 z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-4">
            Infrastructure Staffing Solutions
          </h1>
          <p className="text-xl font-medium">
            Metla Services - Supporting Sustainable Development
          </p>
        </div>
        <div className="absolute bottom-0 w-full text-center">
          <div className="w-16 h-16 mx-auto bg-white rounded-full p-2 animate-bounce">
            <svg
              className="w-12 h-12 text-green-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.293l7.707 7.707-1.414 1.414L12 7.121l-6.293 6.293-1.414-1.414L12 4.293z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Our Role in Infrastructure Section */}
      <section className="py-16 bg-white text-green-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Building the Future with the Right Talent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Gd92853B3fIOWz73BmEJ1zL0fX7Lpgg1MQ&s"
                alt="Infrastructure"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-lg">
                At Metla, we understand that **infrastructure** is the backbone of
                society, driving growth and sustainability. Our specialized
                staffing solutions ensure that every project has the talent it
                needs to succeed.
              </p>
              <p className="text-lg">
                Whether you're developing transportation systems, urban
                infrastructure, or renewable energy projects, we provide
                professionals who are experienced in bringing innovation and
                quality to every phase of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Benefits Section */}
      <section className="py-16 bg-green-100 text-green-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Why Metla for Infrastructure Staffing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-200 transition">
              <h3 className="text-2xl font-semibold mb-4">
                ⚙️ Tailored Staffing Solutions
              </h3>
              <p className="text-lg">
                We provide flexible staffing solutions that adapt to the unique
                needs of your infrastructure projects, ensuring every stage is
                expertly managed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-200 transition">
              <h3 className="text-2xl font-semibold mb-4">
                🌍 Global Network of Talent
              </h3>
              <p className="text-lg">
                With access to an international pool of skilled professionals,
                Metla ensures that your project is staffed with top talent,
                regardless of location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-200 transition">
              <h3 className="text-2xl font-semibold mb-4">
                📈 Expertise in Diverse Projects
              </h3>
              <p className="text-lg">
                From transportation and energy to smart city infrastructure,
                we have expertise in staffing professionals who are ready to
                meet the challenges of diverse infrastructure projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-16 bg-green-50 text-green-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Key Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">
                🏗️ Civil Engineering
              </h3>
              <p className="text-lg">
                Skilled engineers to design, develop, and manage infrastructure
                projects like roads, bridges, and public works.
              </p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">
                ⚡ Energy Infrastructure
              </h3>
              <p className="text-lg">
                Experts in power systems, renewable energy, and electrical
                grids to help power the future of sustainable infrastructure.
              </p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">
                🚇 Transportation Systems
              </h3>
              <p className="text-lg">
                Professionals in planning and constructing highways, railways,
                airports, and transit systems for seamless connectivity.
              </p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">
                🌆 Urban Infrastructure
              </h3>
              <p className="text-lg">
                Talent for urban development, housing projects, and smart
                cities to build modern, sustainable communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-800 text-white text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Ready to Build with Us?
        </h2>
        <p className="text-xl font-medium mb-10">
          Partner with Metla Services to get the infrastructure talent you need
          for your next project. Let’s build a future together!
        </p>
    <Link to='/contact'>    <button className="px-8 py-3 bg-white text-green-800 font-semibold text-lg rounded-full hover:bg-green-100 transition duration-300">
          Contact Us
        </button></Link>
      </section>
    </div>
  );
};

export default Infrastructure;
