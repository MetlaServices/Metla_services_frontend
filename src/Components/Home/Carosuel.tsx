import { useRef, useEffect, useState } from "react";
import { Carousel } from 'antd';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css';
// import Carousel1 from '../../assets/Carosuel/carosuel2.webp'
import banner1 from '../../assets/BANNERS/banner1.jpg'
// import banner2 from '../../assets/BANNERS/banner2.jpg'
// import banner3 from '../../assets/BANNERS/banner3.jpg'
import banner4 from '../../assets/BANNERS/banner4.jpg'
// import Carousel2 from '../../assets/Carosuel/carosuel3.webp'
// import Carousel3 from '../../assets/Carosuel/carousel1.webp';

const carouselImages = [
  
  {
    src: banner1,
    heading: 'Choosing the Right Person',
    content: 'Find top talent that aligns perfectly with your organizational goals. Our expert consultants ensure you make the right hire every time.'
  },
  {
    src: banner4,
    heading: 'Experienced Professionals',
    content: 'Leverage the expertise of seasoned professionals who bring innovative solutions and industry insights to your business challenges.'
  },
  // {
  //   src: banner3,
  //   // heading: 'Innovative Solutions',
  //   content: 'Discover cutting-edge solutions designed to drive growth and success. Our approach combines creativity with technology to transform your business.'
  // },
];

const CarouselEffect = () => {
  const carouselRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const intervalId = setInterval(() => {
        carousel.next();
      }, 4000); // 4 seconds

      return () => clearInterval(intervalId);
    }
  }, []);

  const handleChange = (current: number) => {
    setCurrentIndex(current);
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel autoplay ref={carouselRef} afterChange={handleChange}>
        {carouselImages.map((image, index) => (
          <div key={index} className="relative w-full h-[400px] flex items-center justify-center">
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              style={{ objectFit: 'cover' }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={textVariants}
              initial="hidden"
              animate={currentIndex === index ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-center">
                <motion.div
                  className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                >
                  {image.heading}
                </motion.div>
                <motion.p
                  className="text-white text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  {image.content}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
