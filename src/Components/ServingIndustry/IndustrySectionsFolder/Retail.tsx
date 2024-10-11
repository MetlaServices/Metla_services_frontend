import React from 'react';
import { Link } from 'react-router-dom';

const Retail: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-600 to-green-400 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-5xl font-bold">Transforming Retail Experiences</h1>
          <p className="mt-4 text-lg">
            Unlock the potential of your retail business with our innovative solutions.
          </p>
          <Link 
            to="/contact" 
            className="mt-8 inline-block bg-white text-green-700 py-3 px-6 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition duration-300">
            Get Started
          </Link>
        </div>
      </header>

      {/* Retail Industry Overview Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-green-800">The Retail Industry Landscape</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            The retail industry is undergoing rapid changes, with shifts in consumer behavior and technological advancements. At Metla Services, we provide tailored solutions that empower retailers to adapt and thrive in this dynamic environment.
          </p>
        </div>
      </section>

      {/* Our Solutions for Retail Section */}
      <section className="py-20 max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-green-800 text-center">Our Solutions for Retail</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "Point of Sale Systems",
              description: "Integrated POS systems that streamline transactions and enhance customer experiences.",
            },
            {
              title: "Customer Relationship Management",
              description: "Build lasting relationships with customers through personalized engagement and service.",
            },
            {
              title: "Inventory Optimization",
              description: "Efficient inventory management solutions that minimize costs and maximize stock availability.",
            },
            {
              title: "Data Analytics and Insights",
              description: "Leverage data-driven insights to understand consumer behavior and improve decision-making.",
            },
            {
              title: "Omni-channel Retail Solutions",
              description: "Seamlessly connect online and offline sales channels for a cohesive shopping experience.",
            },
            {
              title: "Supply Chain Management",
              description: "Enhance supply chain efficiency to ensure timely delivery and reduce operational costs.",
            },
          ].map((solution, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 flex flex-col">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{solution.title}</h3>
              <p className="text-gray-700 flex-grow">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future of Retail Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-green-800">Shaping the Future of Retail</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            At Metla Services, we are committed to driving innovation in the retail sector. Our forward-thinking solutions are designed to adapt to the evolving landscape, ensuring your business stays competitive and relevant.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-900 text-center py-6 shadow-md">
        <p className="text-white">© 2024 Metla Services. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Retail;
