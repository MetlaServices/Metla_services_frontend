import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css';
import 'tailwindcss/tailwind.css';

// Import images
import introductionImage from '../../assets/AboutUs/introduction.webp';
import insightsImage from '../../assets/AboutUs/insights.webp';
import philosophyImage from '../../assets/AboutUs/philosophy.webp';
import focusImage from '../../assets/AboutUs/focus.jpg';
import clientSatisfactionImage from '../../assets/AboutUs/customer_satisfaction.png';
import customImage from '../../assets/AboutUs/custom_solutions.avif';

const cardContent = [
  {
    title: 'Introduction',
    description: 'At Metla Services, we are at the forefront of transforming workforce solutions. Our innovative strategies and personalized approaches ensure that your business stays ahead in the ever-evolving market landscape.',
    image: introductionImage,
  },
  {
    title: 'Industry Insights',
    description: 'Gain valuable insights into emerging trends and market dynamics within the staffing industry. From technological advancements to evolving workforce needs, we provide the knowledge you need to stay competitive.',
    image: insightsImage,
  },
  {
    title: 'Our Philosophy',
    description: 'We are driven by a commitment to excellence, crafting bespoke HR solutions that align seamlessly with your organizational goals and values. Our approach is designed to foster growth and drive success.',
    image: philosophyImage,
  },
  {
    title: 'Our Focus',
    description: 'Our focus is on unlocking the full potential of your human capital. With strategic insights, cutting-edge tools, and dedicated support, we help you harness your workforce’s capabilities to achieve your business objectives.',
    image: focusImage,
  },
  {
    title: 'Client Satisfaction',
    description: 'Client satisfaction is at the core of our operations. We strive to deliver high-impact solutions that drive your success and growth, ensuring that our services exceed your expectations and deliver measurable results.',
    image: clientSatisfactionImage,
  },
  {
    title: 'Custom Solutions',
    description: 'Our custom solutions are designed to meet your unique needs and challenges. We offer tailored services that provide the best outcomes for your organization, adapting to your specific requirements and objectives.',
    image: customImage,
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Carousel Section */}
        <div className="relative w-full h-96 overflow-hidden mb-12 rounded-lg shadow-lg">
          <img
            src={introductionImage}
            alt="Introduction"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg">
            <motion.p
              className="text-4xl font-extrabold text-white text-center px-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 120 }}
            >
              Transforming Visions into Workforce Realities
            </motion.p>
          </div>
        </div>

        {/* Cards Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <motion.h2
              className="text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              About Us
            </motion.h2>
          </div>
          <Row gutter={16}>
  {cardContent.map((card, index) => (
    <Col xs={24} sm={12} md={8} lg={6} xl={8} key={index}>
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      >
        <Card
          cover={
            <img
              alt={card.title}
              src={card.image}
              className="w-full h-40 object-cover"
            />
          }
        >
          <Card.Meta
            title={
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {card.title}
              </h3>
            }
            description={
              <p className="text-base text-gray-600 text-center">
                {card.description}
              </p>
            }
          />
        </Card>
      </motion.div>
    </Col>
  ))}
</Row>

        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
