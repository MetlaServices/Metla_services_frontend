import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are loaded
import { useAppDispatch } from '../../Redux-Hooks/hooks';
import { asyncAdminSignup ,asyncAdminLogin} from '../../../store/actions/adminAction';

const { Title } = Typography;

export const AdminLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const dispatch=useAppDispatch()
  const onFinish = async(values: any) => {
    setLoading(true);
    await dispatch(asyncAdminLogin(values,navigate))
    setLoading(false);

    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <Card className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white border border-gray-300">
        <Title level={2} className="text-center mb-8 text-gray-800">Admin Login</Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500" />}
              placeholder="email"
              className="border rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-500" />}
              placeholder="Password"
              className="border rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-semibold transition-colors duration-300"
              loading={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </Form.Item>
        </Form>
        <div className="flex justify-between mt-4">
          <Link to="/admin/forgot-password" className="text-blue-600 hover:text-blue-700">Forgot Password?</Link>
          <Link to="/admin/register" className="text-blue-600 hover:text-blue-700">Register</Link>
        </div>
      </Card>
    </div>
  );
};



export const Register: React.FC = () => {
  const dispatch=useAppDispatch()
  const onFinish = (values: any) => {
    console.log('Registration Success:', values);
    dispatch(asyncAdminSignup(values))
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <Card className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white border border-gray-300">
        <Title level={2} className="text-center mb-8 text-gray-800">Register</Title>
        <Form
          name="register"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500" />}
              placeholder="Email Address"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-500" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};


export const ForgotPassword: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Forgot Password Success:', values);
    // Handle forgot password logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <Card className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white border border-gray-300">
        <Title level={2} className="text-center mb-8 text-gray-800">Forgot Password</Title>
        <Form
          name="forgot-password"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500" />}
              placeholder="Email Address"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

