import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import { useAppDispatch } from '../Redux-Hooks/hooks';
import { submitForm } from '../../store/actions/userAction';

interface PopupFormProps {
  visible: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form Values:', values);

      // Dispatch the form submission action
      await dispatch(submitForm(values));

      // Show success message
      message.success('Form submitted successfully!');

      form.resetFields();
      onClose(); // Close the popup after submission
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  return (
    <Modal
      title="User Form"
      visible={visible}
      onOk={handleOk}
      onCancel={onClose}
      className="rounded-lg"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            {
              pattern: /^\d{10}$/,
              message: 'Phone number must be 10 digits long!',
            },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea placeholder="Enter your message" rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PopupForm;
