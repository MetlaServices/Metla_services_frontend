import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Upload, message, Card, Avatar, Typography, Spin } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../Redux-Hooks/hooks';
import { asyncUpdateProfile } from '../../store/actions/userAction';

const { Title, Text } = Typography;

const Profile: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const user = useAppSelector(state => state.user.user);
  const isLoading = useAppSelector(state => state.user.loading);

  if (!user) return <div>Loading...</div>; // Optional: Add a loading state or placeholder

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {editMode ? (
            <ProfileEdit user={user} onCancel={() => setEditMode(false)} />
          ) : (
            <ProfileView user={user} onEdit={() => setEditMode(true)} />
          )}
        </>
      )}
    </div>
  );
};

const ProfileEdit: React.FC<{ user: any; onCancel: () => void }> = ({ user, onCancel }) => {
  const [form] = Form.useForm();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.user.loading);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        phone: user.phone,
      });
    }
  }, [user, form]);

  const handleUpdate = async (values: any) => {
    try {
      setLoading(true); // Start loader
      const updatedData = new FormData();
      updatedData.append('name', values.name);
      updatedData.append('phone', values.phone);
      if (resumeFile) {
        updatedData.append('resumeFile', resumeFile);
      }

      await dispatch(asyncUpdateProfile(updatedData));
      message.success('Profile updated successfully');
      onCancel();
    } catch (error) {
      message.error('Failed to update profile');
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const uploadProps = {
    beforeUpload: (file: File) => {
      setResumeFile(file);
      return false; // Prevent default upload behavior
    },
    showUploadList: false,
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50">
          <Spin size="large" />
        </div>
      )}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleUpdate}
        className="space-y-6"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input className="rounded-lg border-gray-300" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input className="rounded-lg border-gray-300" />
        </Form.Item>

        <Form.Item label="Resume File">
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />} className="rounded-lg border-gray-300">
              Upload Resume File
            </Button>
          </Upload>
        </Form.Item>

        <div className="flex justify-end space-x-4 mt-6">
          <Button type="primary" htmlType="submit" loading={isLoading} className="rounded-lg bg-blue-500 text-white">
            Save
          </Button>
          <Button onClick={onCancel} className="rounded-lg border-gray-300">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

interface ProfileViewProps {
  user: any;
  onEdit: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onEdit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white border border-gray-200">
        <div className="flex flex-col items-center mb-8">
          <Avatar size={120} icon={user.profilePicUrl ? <img src={user.profilePicUrl} alt="Profile" /> : <UserOutlined />} />
          <Title level={2} className="mt-4 text-center text-2xl font-semibold">{user.name || 'User Name'}</Title>
          <Text type="secondary" className="text-center">{user.email || 'user@example.com'}</Text>
        </div>

        <Button type="primary" onClick={onEdit} className="rounded-lg bg-blue-500 text-white">
          Edit Profile
        </Button>
      </Card>
    </motion.div>
  );
};

export default Profile;
