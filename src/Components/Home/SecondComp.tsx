import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Import images
import serviceImg1 from '../../assets/Services/service-01.webp';
import serviceImg2 from '../../assets/Services/service-02.webp';
import serviceImg3 from '../../assets/Services/service-03.webp';
import serviceImg4 from '../../assets/Services/service-04.webp';
import serviceImg7 from '../../assets/Services/service-05.webp';
import serviceImg8 from '../../assets/Services/service-08.webp';
import serviceImg9 from '../../assets/Services/service9.webp';

// Define types for card data
interface CardData {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

// Example card data with link property
const cardData: CardData[] = [
  {
<<<<<<< HEAD
    imgSrc: 'https://media.istockphoto.com/id/1365436570/photo/candidates-waiting-for-job-interview.jpg?s=612x612&w=0&k=20&c=U-VaHYbw5RrW07rC4kPCcv0urJdByLE4lgBBytZ20N4=',
=======
    imgSrc: serviceImg1,
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    title: 'Contract Staffing Solutions',
    description: 'Flexible staffing solutions tailored to your business needs, ensuring the right fit for your team.',
    link: 'contract-staffing',
  },
  {
<<<<<<< HEAD
    imgSrc: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg',
    // imgSrc: '',
=======
    imgSrc: serviceImg2,
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    title: 'Expert IT Recruitment',
    description: 'Specialized in finding top tech talent to meet your organization’s IT requirements efficiently.',
    link: 'it-staffing',
  },
  {
<<<<<<< HEAD
    imgSrc: 'https://cdn.pixabay.com/photo/2024/02/12/09/37/manager-8568228_640.png',
=======
    imgSrc: serviceImg3,
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    title: 'Leadership Executive Search',
    description: 'Dedicated to helping you find and attract top executives for leadership roles in your organization.',
    link: 'executive-search',
  },
  {
<<<<<<< HEAD
    imgSrc: 'https://media.istockphoto.com/id/2168211683/photo/document-management-system-online-documentation-database-and-documentation-in-enterprise.jpg?s=612x612&w=0&k=20&c=0LloX_Pz-NJ7mT9ch2Ct2v5YAMrvYhmWe3bSl7VJjL8=',
=======
    imgSrc: serviceImg4,
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    title: 'Permanent Staffing Services',
    description: 'Comprehensive solutions to help you secure the right candidates for permanent positions in your company.',
    link: 'permanent-staffing',
  },
  {
<<<<<<< HEAD
    imgSrc: 'https://media.istockphoto.com/id/1306526412/photo/men-working-in-laptop-at-office.jpg?s=612x612&w=0&k=20&c=oWhBRc0vw3yWRbq1UubIEzPD90tpvpjM4zHVJLtfV0k=',
=======
    imgSrc: serviceImg9,
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    title: 'Innovative Software Solutions',
    description: 'Tailored software solutions designed to enhance your business operations and drive growth.',
    link: 'software-solutions',
  },
  {
<<<<<<< HEAD
    imgSrc: 'https://media.istockphoto.com/id/1180529748/photo/global-business-concept-group-of-various-ethnic-businessperson-diversity.jpg?s=612x612&w=0&k=20&c=TK9Gqn2LJhraow-d_hTvn52WwfWcwh4PoDe6Yl_1DbA=',
=======
    imgSrc: serviceImg7,
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    title: 'Comprehensive HR Solutions',
    description: 'Enhance your workforce with our HR solutions that improve team management and employee satisfaction.',
    link: 'hr-consultancy',
  },
  {
<<<<<<< HEAD
    imgSrc: 'https://media.istockphoto.com/id/167440113/photo/large-group-of-people-smiling-in-camera.jpg?s=612x612&w=0&k=20&c=yJLVtoW7hUaoJUXWSBROIBtpWo-cDBS_X-05VyVJ9Ko=',
    title: 'Bulk Hiring',
    description: 'Enhance your workforce with our HR solutions that improve team management and employee satisfaction.',
    link: 'bullk-hiring',
  },
  {
    imgSrc: 'https://media.istockphoto.com/id/1330234595/photo/closeup-shot-of-an-unrecognisable-businesswoman-calculating-finances-in-an-office.jpg?s=612x612&w=0&k=20&c=dwgvBXpHuM-Jz5XCQtCtLot59CJzGm5iAlxgKm9Yr8Q=',
    title: 'Payroll Outsource',
    description: 'Enhance your workforce with our HR solutions that improve team management and employee satisfaction.',
    link: 'payroll-outsource',
  },
  {
    imgSrc: 'https://media.istockphoto.com/id/2164866449/photo/people-working-in-the-office-using-computer.jpg?s=612x612&w=0&k=20&c=gs6NBfW0CBNWR_a6VwPUYHhl-ATi65Grsc-q_MvOxjo=',
    title: 'Temporary Manpower',
    description: 'Enhance your workforce with our HR solutions that improve team management and employee satisfaction.',
    link: 'temporary-manpower',
  },
  {
    imgSrc: 'https://media.istockphoto.com/id/1554865828/photo/hrm-insight-magnifier-glass-zooms-in-on-manager-icon-in-staff-icons.jpg?s=612x612&w=0&k=20&c=zYSJEJJkSirQzucG2-1gZLnqptoZstB95wNsm9rmmVQ=',
    title: 'Industry Wise Staffing',
    description: 'Enhance your workforce with our HR solutions that improve team management and employee satisfaction.',
    link: 'industry-wise',
  },
  {
    imgSrc:'https://media.istockphoto.com/id/1286469039/photo/global-communication-network-concept-worldwide-business-intelligence-agencies.jpg?s=612x612&w=0&k=20&c=Y2bT6iiTlYFp93FpkRyZWo6tFliT7A3ML9b-xCvD764=',
=======
    imgSrc: serviceImg8,
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
    title: 'Talent Management Strategies',
    description: 'Optimize your talent strategy with solutions designed to engage and develop your workforce effectively.',
    link: 'talent-management',
  },
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
<<<<<<< HEAD
          <h3 className="text-lg text-black-600 text-center mb-8 leading-relaxed">
=======
          <h3 className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
            Welcome to Metla Services Private Limited’s detailed exploration of the dynamic and evolving realm
          </h3>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gradient-to-br from-[#f3f4f6] to-[#d1d5db]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#147971]">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {cardData.map((card, index) => (
              <div 
                key={index} 
                ref={(el) => (cardsRef.current[index] = el!)} // Attach ref for GSAP animations
                className="relative rounded-lg overflow-hidden shadow-lg bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 group"
              >
                <Link to={`/services/${card.link}`} className="block h-full">
                  {/* Card Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={card.imgSrc}
                      alt={card.title}
                      className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-[#147971] bg-opacity-70 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<<<<<<< HEAD
                      <h2 className="text-s font-semibold mb-2 text-white">
=======
                      <h2 className="text-xl font-semibold mb-2 text-white">
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
                        {card.title}
                      </h2>
                      <h3 className="text-gray-200 mb-4 text-sm text-center">
                        {card.description}
                      </h3>
                      <span className="text-white font-semibold text-sm bg-[#fcbc04] py-2 px-4 rounded-full">
                        Read More
                      </span>
                    </div>
                  </div>
                  {/* Card Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
                    <h2 className="text-lg font-bold">{card.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondComponent;
