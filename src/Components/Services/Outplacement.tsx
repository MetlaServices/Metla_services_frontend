import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globalImage from '../../assets/global_placement.jpg'; // Adjust path for your image
import placement from '../../assets/placement.webp';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const GlobalPlacements: React.FC = () => {
  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      ".hero-text h1",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".hero-text p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Features Section Animation
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Diverse Skill Set Section Animation
    gsap.fromTo(
      ".skill-set-content",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-set-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".skill-set-image",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-set-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Compliance Section Animation
    gsap.fromTo(
      ".compliance-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".compliance-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Strategic Partnerships Animation
    gsap.fromTo(
      ".partnership-section",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".partnership-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${globalImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto hero-text">
          <h1 className="text-4xl font-bold text-white mb-4">Global Placements</h1>
          <p className="text-lg text-gray-200">
            Leveraging a strategic approach to talent acquisition on a global scale, we ensure the professionals we place meet both technical and cultural requirements.
          </p>
        </div>
      </section>

      {/* Section: Strategic Features */}
      <section className="features-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Metla Services for Global Placements?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fa-handshake",
                title: "Strategic Partnership Focus",
                description: "We align with your global growth plans for sustained success."
              },
              {
                icon: "fa-globe",
                title: "Rapid Response to Market Dynamics",
                description: "Adapting to global market changes ensures timely talent acquisition."
              },
              {
                icon: "fa-tasks",
                title: "Streamlined Administrative Support",
                description: "We simplify global placement administration so you can focus on your workforce."
              },
              {
                icon: "fa-users",
                title: "Diverse Talent Solutions",
                description: "Access a broad spectrum of skills and expertise from around the world."
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card p-6 bg-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out">
                <i className={`fas ${feature.icon} text-4xl text-cyan-500 mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Diverse Skill Set */}
      <section className="py-20 bg-gray-100 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 skill-set-content">
          <h2 className="text-3xl font-bold mb-4">
            Diverse Skill Set for Varied Industries
          </h2>
          <p className="text-lg text-gray-600">
            Our Global Placement solutions cater to a wide array of industries, including IT, finance, healthcare, engineering, and more. Whether your organization needs tech experts or healthcare professionals, our global reach ensures access to a diverse skill set.
          </p>
        </div>
        <div className="lg:w-1/2 skill-set-image">
          <img src={placement} alt="Diverse Skill Set" className="rounded-lg shadow-lg w-full" />
        </div>
      </section>

      {/* Section: Compliance and Support */}
      <section className="compliance-section py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Comprehensive Compliance and Support</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Metla Services takes the lead in providing compliance and support services, ensuring global placements adhere to all legal and regulatory requirements. We minimize the administrative burden, letting you focus on your global team’s talents.
          </p>
        </div>
      </section>

      {/* Section: Strategic Partnerships */}
      <section className="partnership-section py-20 bg-[#FCAF17] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Strategic Partnerships for Global Growth</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Beyond facilitating placements, we foster long-term partnerships, contributing to your global growth and success.
          </p>
          <Link to="/contact">
            <button className="bg-white text-cyan-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalPlacements;
