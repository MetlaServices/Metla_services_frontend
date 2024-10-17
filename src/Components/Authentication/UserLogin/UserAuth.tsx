// components/UserAuth.tsx
import React, { useState } from 'react';
import { Button, Card, Form, Input, Spin, Typography, message } from 'antd';
import { asyncSendOtp, asyncVerifyOtp } from '../../../store/actions/userAction';
import { useAppDispatch } from '../../Redux-Hooks/hooks';
import { useNavigate, useParams } from 'react-router-dom';

const { Title, Text } = Typography;




export const UserAuth: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // Local loading state
    const [otpSent, setOtpSent] = useState(false); // Local otpSent state
    const [error, setError] = useState<string | null>(null); // Local error state
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); // Initialize useNavigate hook
  
    const handleSendOtp = async (values: { email: string }) => {
      if (!values.email) {
        message.error('Please enter a valid email address');
        return;
      }
  
      setLoading(true); // Set loading to true when starting OTP dispatch
  
      try {
        await dispatch(asyncSendOtp(values.email));
        setOtpSent(true); // Set otpSent to true after successful OTP dispatch
        // Navigate to verify OTP page
        navigate(`/user/verify-otp/${values.email}`);
      } catch (err) {
        // Handle any errors that might occur during dispatch
        message.error('Failed to send OTP. Please try again.');
        setError('Failed to send OTP. Please try again.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after the OTP dispatch completes
      }
    };
  
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
        {/* Loader displayed over the entire screen when loading */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
            <Spin tip="Sending OTP..." size="large" />
          </div>
        )}
        <Card
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
          bordered={false}
        >
          <Title level={3} className="text-center">Login</Title>
          <Text className="block mb-6 text-center text-gray-600">
            Enter your email address to receive an OTP for login
          </Text>
  
          <Form
            layout="vertical"
            onFinish={handleSendOtp}
            initialValues={{ email }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                size="large"
                className="rounded-md"
              />
            </Form.Item>
  
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading} // Loader is shown based on the local loading state
                className="w-full rounded-md"
                size="large"
              >
                Send OTP
              </Button>
            </Form.Item>
          </Form>
  
          {/* Display message after OTP has been sent */}
          {otpSent && (
            <Text className="block mt-4 text-center text-green-600">
              OTP has been sent to your email.
            </Text>
          )}
          {/* Display error message */}
          {error && (
            <Text className="block mt-4 text-center text-red-600">
              {error}
            </Text>
          )}
        </Card>
      </div>
    );
  };

// OTP VERIFICATION COMPONENT

export const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState<string>(''); // Use string type for state
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { email } = useParams<{ email: string }>(); // Get email from route params

  const handleVerifyOtp = async (values: { otp: string }) => {
    if (!values.otp) {
      message.error('Please enter the OTP');
      return;
    }

      await dispatch(asyncVerifyOtp(email!,Number(values.otp),navigate )); // Convert OTP to number and ensure email is not null
     
 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        bordered={false}
      >
        <Title level={3} className="text-center">Verify OTP</Title>
        <Text className="block mb-6 text-center text-gray-600">
          Enter the OTP sent to your email
        </Text>

        <Form
          layout="vertical"
          onFinish={handleVerifyOtp}
          initialValues={{ otp }}
        >
          <Form.Item
            label="OTP"
            name="otp"
            rules={[{ required: true, message: 'Please enter the OTP' }]}
          >
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              size="large"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-md"
              size="large"
            >
              Verify OTP
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};


