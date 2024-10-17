import React from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { useAppDispatch } from '../Redux-Hooks/hooks';
import { submitForm } from '../../store/actions/userAction';

interface PopupFormProps {
  visible: boolean;
  onClose: () => void;
<<<<<<< HEAD
}

const PopupForm: React.FC<PopupFormProps> = ({ visible, onClose }) => {
=======
  setIsFormFilled: (filled: boolean) => void; // Add this prop
}

const PopupForm: React.FC<PopupFormProps> = ({ visible, onClose, setIsFormFilled }) => {
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
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

<<<<<<< HEAD
      form.resetFields();
=======
      setIsFormFilled(true); // Set form filled state to true
      form.resetFields(); // Reset form fields
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
      onClose(); // Close the popup after submission
    } catch (error) {
      console.error('Submission Failed:', error);
      message.error('Form submission failed. Please try again.');
    }
  };

  return (
    <Modal
      title="Fill in the form to receive your freebie!"
      open={visible}
      onCancel={onClose}
      className="rounded-lg"
      centered
      width={250} // Reduce width of the modal
<<<<<<< HEAD
      footer={null} 
    >
      <Form 
        form={form} 
=======
      footer={null}
    >
      <Form
        form={form}
>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
        layout="vertical"
        size="small" // Make the form compact
        style={{ margin: 0 }} // Remove any external margin
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
          style={{ marginBottom: 12 }} // Reduce the bottom margin
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
          style={{ marginBottom: 12 }} // Reduce the bottom margin
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            {
              pattern: /^\d{10}$/,
              message: 'Phone number must be 10 digits long!',
            },
          ]}
          style={{ marginBottom: 12 }} // Reduce the bottom margin
        >
          <Input placeholder="Phone" />
        </Form.Item>
      </Form>
<<<<<<< HEAD
      
=======

>>>>>>> e3c761706892c44b54d9d20b26859b5ff0b509cc
      {/* Custom footer buttons */}
      <div className="flex justify-end mt-2">
        <Button onClick={onClose} size="small" className="mr-2">Cancel</Button>
        <Button onClick={handleOk} type="primary" size="small">Submit</Button>
      </div>
    </Modal>
  );
};

export default PopupForm;
