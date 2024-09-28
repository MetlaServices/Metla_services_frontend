import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../Redux-Hooks/hooks';
import {  asyncSendEmployeeQuery } from '../../store/actions/userAction';
import { gsap } from 'gsap';

// Phone number validation regex
const phoneValidation = /^[6-9]\d{9}$/;

const GetInTouch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await dispatch(asyncSendEmployeeQuery(values));
      // Optionally handle successful submission (e.g., show success message)
    } catch (error) {
      console.error('Form submission error:', error);
      // Optionally handle error (e.g., show error message)
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Form submission failed:', errorInfo);
  };

  // GSAP animation for the map
  useEffect(() => {
    if (mapRef.current) {
      gsap.fromTo(mapRef.current, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="relative bg-gray-50 py-12 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Column - Map and Contact Information */}
        <motion.div
          className="p-8 bg-gray-100"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Get In Touch</h2>
          <div className="space-y-6 mb-8">
            {/* Map Container with Animation */}
            <div 
              ref={mapRef}
              className="map-container relative w-full h-[300px] bg-gray-300 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112300.64271546992!2d76.9988556!3d28.407333199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d454eaaaaab%3A0x95d58d6fca5dcc45!2sMetla%20Services!5e0!3m2!1sen!2sin!4v1726728789440!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <EnvironmentOutlined className="text-3xl text-indigo-600 mr-4" />
                <div>
                  <p className="font-semibold text-lg text-gray-700">Address:</p>
                  <p className="text-gray-600">Unit no. DCG-0104, DLF Corporate Greens, Sector 74A, Gurugram, Haryana – 122001</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailOutlined className="text-3xl text-indigo-600 mr-4" />
                <div>
                  <p className="font-semibold text-lg text-gray-700">Email:</p>
                  <p className="text-gray-600">info@metlaservices.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneOutlined className="text-3xl text-indigo-600 mr-4" />
                <div>
                  <p className="font-semibold text-lg text-gray-700">Phone:</p>
                  <p className="text-gray-600">+91-9289586627</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="p-8 bg-white"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">We’d love to hear from you</h2>
          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="space-y-6"
          >
            {/* Name Field */}
            <Form.Item
              name="name"
              label="Your Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                placeholder="Enter your name"
                size="large"
                className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </Form.Item>

            {/* Email Address Field */}
            <Form.Item
              name="email"
              label="Email Address"
              rules={[{ required: true, message: 'Please enter a valid email', type: 'email' }]}
            >
              <Input
                placeholder="Enter your email address"
                size="large"
                className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </Form.Item>

            {/* Phone No Field */}
            <Form.Item
              name="phone"
              label="Phone No"
              rules={[
                { required: true, message: 'Please enter your phone number' },
                {
                  pattern: phoneValidation,
                  message: 'Please enter a valid 10-digit phone number',
                },
              ]}
            >
              <Input
                placeholder="Enter your phone number"
                size="large"
                className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </Form.Item>

            {/* Message Field */}
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}>
              <Input.TextArea
                rows={4}
                placeholder="Type your message..."
                className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-md transition duration-300"
                loading={loading} // Show loading spinner when submitting
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
