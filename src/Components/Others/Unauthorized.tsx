import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Unauthorized: React.FC = () => {
    const navigate = useNavigate();
    const errorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (errorRef.current) {
            gsap.fromTo(
                errorRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <motion.div
                ref={errorRef}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Unauthorized Access</h2>
                <p className="text-gray-500 mb-6">
                    Sorry, you do not have permission to view this page.
                </p>
                <Button type="primary" onClick={() => navigate('/')}>
                    Go to Home
                </Button>
            </motion.div>
        </div>
    );
};

export default Unauthorized;
