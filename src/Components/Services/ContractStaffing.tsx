import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaUserTie, FaCogs, FaClock, FaHandshake } from "react-icons/fa";
import ContractStaffingImage from '../../assets/contract-staffing.webp'; // Correct import
import { Link } from "react-router-dom";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContractStaffing: React.FC = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.from(".header-text", {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".header-text",
        start: "top 80%",
      },
    });

    gsap.from(".image-section img", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".image-section",
        start: "top 80%",
      },
    });

    gsap.from(".overlay-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".overlay-text",
        start: "top 80%",
      },
    });

    gsap.from(".content-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 80%",
      },
    });

    gsap.from(".commitment-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".commitment-text",
        start: "top 80%",
      },
    });

    gsap.from(".cta-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".cta-text",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12 header-text">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Contract Staffing Solutions
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover how our tailored staffing solutions can meet your temporary and contract staffing needs with ease.
          </p>
        </header>

        {/* Image Section with Overlay Text */}
        <div className="relative text-center mb-12 image-section">
          <img
            src='https://media.istockphoto.com/id/1084198094/photo/lawyer-attorney-signing-a-contract.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYwWF9T4Idh33AGJUB629rhXOmsBWCAZydjVi_DAsPU=' // Use the imported variable
            alt="Contract Staffing"
            className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white p-6 overlay-text">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Tailored Solutions for Your Staffing Needs
              </h2>
              <p className="text-lg">
                We provide customized staffing solutions that align with your business goals and project requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 content-section">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 content-card">
            <FaUserTie className="text-5xl text-cyan-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Recruiters</h3>
            <p className="text-gray-700 mb-4">
              Our team has extensive experience in identifying and vetting top talent to meet your needs.
            </p>
            <Link to="/about">
              <a className="text-cyan-500 hover:underline">
                Learn More
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 content-card">
            <FaCogs className="text-5xl text-cyan-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Flexible Solutions</h3>
            <p className="text-gray-700 mb-4">
              We offer flexible staffing solutions tailored to your specific requirements, ensuring a perfect fit.
            </p>
            <Link to="/">
              <a className="text-cyan-500 hover:underline">
                Explore Solutions
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 content-card">
            <FaClock className="text-5xl text-cyan-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Quick Turnaround</h3>
            <p className="text-gray-700 mb-4">
              Our streamlined process ensures you get the right candidates quickly and efficiently, saving you time.
            </p>
            <Link to="/">
              <a className="text-cyan-500 hover:underline">
                See Our Process
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 content-card">
            <FaHandshake className="text-5xl text-cyan-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Trusted Partnerships</h3>
            <p className="text-gray-700 mb-4">
              We build lasting relationships with our clients and candidates to ensure successful and productive placements.
            </p>
            <Link to="/contact">
              <a className="text-cyan-500 hover:underline">
                Discover More
              </a>
            </Link>
          </div>
        </div>

        {/* Commitment to Quality Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 commitment-text">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Efficient Resource Management for Optimal Results
          </h2>
          <p className="text-gray-700 mb-4">
            Quality is at the core of our Contract Staffing Solutions. We go beyond merely matching resumes with job descriptions; our rigorous screening and selection process ensures that every candidate not only possesses the necessary skills and qualifications but also aligns with the cultural values of your organization. This meticulous approach guarantees that the professionals we place seamlessly integrate into your team, adding value from day one.
          </p>
          <p className="text-gray-700 mb-4">
            We recognize the significance of cost-effective resource management in achieving business objectives. Metla Services’ Contract Staffing Solutions not only provide access to skilled professionals without the long-term commitment but also streamline resource management. This not only enhances operational efficiency but also ensures a cost-effective approach, allowing your organization to focus on core business activities.
          </p>
        </div>

        {/* Client-Centric Approach Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Client-Centric Approach for Lasting Partnerships
          </h2>
          <p className="text-gray-700 mb-4">
            At Metla Services, we go beyond being a service provider; we become your strategic partner in success. Our client-centric approach is built on transparent communication, responsiveness, and a deep understanding of your business goals. We are committed to ensuring that our Contract Staffing Solutions seamlessly align with your strategic objectives, building lasting partnerships that contribute to your organizational growth.
          </p>
          <p className="text-gray-700 mb-4">
            In a world where talent and adaptability are crucial for success, Metla Services stands out as the preferred partner for organizations seeking the best in Contract Staffing Solutions. Our commitment to quality, agility, and client satisfaction sets us apart, paving the way for businesses to thrive in a competitive and dynamic marketplace. Elevate your workforce with Metla Services – where excellence meets innovation.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center cta-text">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact us today to discuss your contract staffing needs and how we can help you achieve your goals.
          </p>
          <Link to="/contact">
            <a className="bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300">
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContractStaffing;
