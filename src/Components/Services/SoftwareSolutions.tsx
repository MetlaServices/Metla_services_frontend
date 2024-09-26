import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import softwareBackground from '../../assets/service9.jpg'; // Adjust path as needed

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  { 
    title: 'Scalability for Future-Proofing', 
    text: 'We ensure software scalability, enabling solutions to grow alongside your organization.', 
    icon: 'fa-chart-line' 
  },
  { 
    title: 'Agile Implementation Advantage', 
    text: 'Our agile development process allows us to quickly adapt to your evolving needs.', 
    icon: 'fa-tasks' 
  },
  { 
    title: 'Comprehensive Support', 
    text: 'We offer comprehensive support and maintenance to ensure optimal performance.', 
    icon: 'fa-hands-helping' 
  },
  { 
    title: 'Seamless Integration', 
    text: 'Our solutions integrate smoothly with your existing systems for enhanced efficiency.', 
    icon: 'fa-plug' 
  },
];

const SoftwareSolutions: React.FC = () => {
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 80%",
        },
      }
    );

    // Features animation
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
        },
      }
    );

    // Call-to-Action animation
    gsap.fromTo(
      ".cta-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${softwareBackground})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center p-8 hero-text">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Software Solutions
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            We build scalable and customized software solutions to meet your business needs and ensure future growth. Let's transform your vision into reality with innovative technologies.
          </p>
          <Link to="/contact">
            <button className="bg-[#FCAF17] text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Software Solutions?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((feature, index) => (
              <div
                key={index}
                className="feature-card group bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:rotate-1 hover:-rotate-1 hover:scale-105 hover:shadow-2xl text-center hover:shadow-lg hover:border-cyan-500 hover:border-opacity-100 border-opacity-0 border-2 hover:scale-105"
              >
                <div className="mb-4 text-cyan-500 text-5xl transition-transform duration-500 group-hover:rotate-180">
                  <i className={`fas ${feature.icon}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-cyan-500 transition-transform duration-300 group-hover:translate-x-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-opacity duration-500 ease-in-out">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Custom Solutions Tailored to Your Needs</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We believe that no two businesses are alike. Our bespoke software solutions are designed to align with your business objectives, ensuring seamless integration and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="cta-section py-20 bg-gray-200 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great Together!</h2>
          <p className="text-lg mb-8">
            Ready to revolutionize your business with cutting-edge software solutions? Contact us today to get started!
          </p>
          <Link to="/contact">
            <button className="bg-white text-cyan-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default SoftwareSolutions;
