import React, { useState } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { useAppDispatch } from '../Redux-Hooks/hooks';
import { asyncSendClientQuery } from '../../store/actions/userAction';
import contactImage from '../../assets/contact_us.avif'; // Adjust path as necessary

const { TextArea } = Input;

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false); // Loading state

  const onFinish = async (values: any) => {
    setLoading(true); // Start loading
    await dispatch(asyncSendClientQuery(values));
    setLoading(false); // Stop loading after submission
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${contactImage})`, // Background image
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Form container with cream background */}
      <div className="relative bg-[#f5f5dc] p-12 rounded-lg shadow-xl max-w-md mx-auto z-10 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Contact Us</h2>

        {/* Contact Form */}
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input
                placeholder="John Doe"
                className="border-gray-300 rounded-lg shadow-sm"
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
            >
              <Input
                placeholder="john.doe@example.com"
                className="border-gray-300 rounded-lg shadow-sm"
              />
            </Form.Item>
          </div>
          <Form.Item
            name="phone"
            label="Phone No"
            rules={[{ required: true, message: 'Please enter your phone number!' }]}
          >
            <Input
              placeholder="+91-9599383349"
              className="border-gray-300 rounded-lg shadow-sm"
            />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message!' }]}
          >
            <TextArea
              rows={4}
              placeholder="Your message here..."
              className="border-gray-300 rounded-lg shadow-sm"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-3 text-lg font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700"
              loading={loading} // Show loading spinner during submission
            >
              {loading ? <Spin /> : 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
