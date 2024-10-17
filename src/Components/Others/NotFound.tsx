import { Button } from 'antd';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css';
import 'tailwindcss/tailwind.css';
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 opacity-50"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
      />
      
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <svg className="w-32 h-32 text-red-500" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="50" />
            <path
              d="M30 30L70 70M70 30L30 70"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
        <motion.h1
          className="text-8xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Oops! The page you’re looking for isn’t here.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            type="primary"
            size="large"
            icon={<FaHome />}
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg"
          >
            Go to Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
