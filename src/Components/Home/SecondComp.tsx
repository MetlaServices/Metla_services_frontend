import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Import images
import serviceImg1 from '../../assets/service-01.webp';
import serviceImg2 from '../../assets/service-02.webp';
import serviceImg3 from '../../assets/service-03.webp';
import serviceImg4 from '../../assets/service-04.webp';
import serviceImg7 from '../../assets/service-07.webp';
import serviceImg8 from '../../assets/service-08.webp';
import serviceImg9 from '../../assets/service9.jpg';

// Define types for card data
interface CardData {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

// Example card data with link property
const cardData: CardData[] = [
  { imgSrc: serviceImg1, title: 'Contract Staffing Solutions', description: 'Tailored staffing solutions...', link: 'contract-staffing' },
  { imgSrc: serviceImg2, title: 'IT Staffing Solutions', description: 'Specialized in sourcing top talent...', link: 'it-staffing' },
  { imgSrc: serviceImg3, title: 'Executive Search Services', description: 'Our executive search services help...', link: 'executive-search' },
  { imgSrc: serviceImg4, title: 'Permanent Staffing Solutions', description: 'Find the right candidates for your...', link: 'permanent-staffing' },
  { imgSrc: serviceImg9, title: 'Software Solutions', description: 'Innovative software solutions for modern...', link: 'software-solutions' },
  { imgSrc: serviceImg7, title: 'HR Solutions', description: 'Enhance your team with skilled professionals...', link: 'hr-consultancy' },
  { imgSrc: serviceImg8, title: 'Talent Management Solutions', description: 'Optimize your talent strategy...', link: 'talent-management' },
];

export const SecondComponent: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* Introduction Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#147971]">Exploring the World of Manpower and Staffing Solutions</h1>
          <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
            Welcome to Metla Services Private Limited’s detailed exploration of the dynamic and evolving realm...
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gradient-to-br from-[#f3f4f6] to-[#d1d5db]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#147971]">Our Services</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el!)} // Attach ref for GSAP animations
                className="relative rounded-lg overflow-hidden shadow-lg bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 group"
              >
                {/* Card Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-[#147971] bg-opacity-70 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      {card.title}
                    </h2>
                    <p className="text-gray-200 mb-4 text-sm text-center">
                      {card.description}
                    </p>
                    <Link
                      to={`/services/${card.link}`}
                      className="text-white hover:underline font-semibold text-sm bg-[#fcbc04] py-2 px-4 rounded-full"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                {/* Card Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
                  <h2 className="text-lg font-bold">{card.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondComponent;
