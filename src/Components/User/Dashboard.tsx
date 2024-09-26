import React from 'react';
import { Card, Typography, Button, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { 
  FileTextOutlined, 
  UserOutlined, 
  BellOutlined, 
  SettingOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useAppSelector } from '../Redux-Hooks/hooks'; // Adjust the path to your hooks

const { Title } = Typography;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
const {user}=useAppSelector((state)=>state.user)
console.log(user)
const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Title level={2} className="mb-6 text-center text-gray-800">
        Welcome{user.name ? `, ${user.name}` : ''}!
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        
        <motion.div 
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        >
          <Card
            className="h-full hover:shadow-xl transition-shadow"
            title={
              <Space>
                <FileTextOutlined />
                <span>View Your Applications</span>
              </Space>
            }
            bordered={false}
            onClick={() => handleNavigation('/applications')}
            hoverable
          >
            <p>Manage and view all your job applications in one place. Track their status and get updates.</p>
            <Divider />
            <Button type="link" onClick={() => handleNavigation('/applications')}>
              Go to Applications
            </Button>
          </Card>
        </motion.div>

        <motion.div 
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        >
          <Card
            className="h-full hover:shadow-xl transition-shadow"
            title={
              <Space>
                <UserOutlined />
                <span>Profile Management</span>
              </Space>
            }
            bordered={false}
            onClick={() => handleNavigation(`/profile/${user?._id}`)}
            hoverable
          >
            <p>Update your personal information, resume, and other profile settings.</p>
            <Divider />
            <Button type="link" onClick={() => handleNavigation('/profile')}>
              Go to Profile
            </Button>
          </Card>
        </motion.div>

        <motion.div 
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        >
          <Card
            className="h-full hover:shadow-xl transition-shadow"
            title={
              <Space>
                <BellOutlined />
                <span>Job Alerts</span>
              </Space>
            }
            bordered={false}
            onClick={() => handleNavigation('/jobs')}
            hoverable
          >
            <p>Manage your job alerts and preferences to receive notifications for relevant jobs.</p>
            <Divider />
            <Button type="link" onClick={() => handleNavigation('/job-alerts')}>
              Go to Job Alerts
            </Button>
          </Card>
        </motion.div>

        <motion.div 
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        >
          <Card
            className="h-full hover:shadow-xl transition-shadow"
            title={
              <Space>
                <SettingOutlined />
                <span>Settings</span>
              </Space>
            }
            bordered={false}
            onClick={() => handleNavigation('/settings')}
            hoverable
          >
            <p>Adjust your account settings, privacy preferences, and more.</p>
            <Divider />
            <Button type="link" onClick={() => handleNavigation('/settings')}>
              Go to Settings
            </Button>
          </Card>
        </motion.div>

        <motion.div 
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        >
          <Card
            className="h-full hover:shadow-xl transition-shadow"
            title={
              <Space>
                <QuestionCircleOutlined />
                <span>Help Center</span>
              </Space>
            }
            bordered={false}
            onClick={() => handleNavigation('/help')}
            hoverable
          >
            <p>Find answers to your questions and contact support if you need assistance.</p>
            <Divider />
            <Button type="link" onClick={() => handleNavigation('/help')}>
              Go to Help Center
            </Button>
          </Card>
        </motion.div>

        <motion.div 
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
        >
          <Card
            className="h-full hover:shadow-xl transition-shadow"
            title={
              <Space>
                <LogoutOutlined />
                <span>Logout</span>
              </Space>
            }
            bordered={false}
            onClick={() => handleNavigation('/logout')}
            hoverable
          >
            <p>Log out of your account securely.</p>
            <Divider />
            <Button type="link" onClick={() => handleNavigation('/logout')}>
              Logout
            </Button>
          </Card>
        </motion.div>

      </div>
    </div>
  );
};

export default UserDashboard;
