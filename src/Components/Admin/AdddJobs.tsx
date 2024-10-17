import React from 'react';
import dayjs from 'dayjs';
import { Form, Input, Button, Select, InputNumber, DatePicker } from 'antd';
import { Dayjs } from 'dayjs'; // Use Dayjs from dayjs for TypeScript
import { useAppDispatch } from '../Redux-Hooks/hooks';
import { asyncAdminAddJobs } from '../../store/actions/adminAction';

const { TextArea } = Input;
const { Option } = Select;

interface JobFormValues {
  title: string;
  company: string;
  location: string;
  description: string[];
  level: string;
  salary: number;
  companySize: string;
  industry: string;
  experience: string;
  postedDate: Dayjs; // Use Dayjs type
}

const AddJob: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  // Handle form submission
  const onFinish = async (values: JobFormValues) => {
    console.log('Form values:', values);

    // Format the postedDate field with dayjs
    const formattedDate = dayjs(values.postedDate.toDate()).format('YYYY-MM-DD');
    console.log('Formatted Date:', formattedDate);

    // Format salary for display purposes
    const formattedSalary = `Rs ${values.salary.toLocaleString()}`;
    console.log('Formatted Salary:', formattedSalary);

    const jobData = {
      ...values,
      postedDate: formattedDate,
    };

    console.log(jobData);

    // Call an API to save the job post
    await dispatch(asyncAdminAddJobs(jobData));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Job Posting</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
      >
        <Form.Item
          name="title"
          label="Job Title"
          rules={[{ required: true, message: 'Please enter the job title' }]}
        >
          <Input placeholder="Job Title" />
        </Form.Item>

        <Form.Item
          name="company"
          label="Company"
          rules={[{ required: true, message: 'Please enter the company name' }]}
        >
          <Input placeholder="Company Name" />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please enter the job location' }]}
        >
          <Input placeholder="Location" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Job Description"
          rules={[{ required: true, message: 'Please enter the job description' }]}
        >
          <div>
            {[...Array(10)].map((_, index) => (
              <Form.Item
                key={index}
                name={`description[${index}]`}
                label={`Description Point ${index + 1}`}
                rules={[{ required: true, message: `Please enter point ${index + 1}` }]}
              >
                <TextArea rows={2} placeholder={`Description Point ${index + 1}`} />
              </Form.Item>
            ))}
          </div>
        </Form.Item>

        <Form.Item
          name="level"
          label="Job Level"
          rules={[{ required: true, message: 'Please select the job level' }]}
        >
          <Select placeholder="Select Level">
            <Option value="junior">Junior</Option>
            <Option value="mid">Mid</Option>
            <Option value="senior">Senior</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="salary"
          label="Salary"
          rules={[{ required: true, message: 'Please enter the salary' }]}
        >
          <InputNumber
            className="w-full"
            min={0}
            placeholder="Salary"
          />
        </Form.Item>

        <Form.Item
          name="companySize"
          label="Company Size"
          rules={[{ required: true, message: 'Please select the company size' }]}
        >
          <Select placeholder="Select Company Size">
            <Option value="small">Small (1-50)</Option>
            <Option value="medium">Medium (51-200)</Option>
            <Option value="large">Large (200+)</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="industry"
          label="Industry"
          rules={[{ required: true, message: 'Please select the industry' }]}
        >
          <Select placeholder="Select Industry">
            <Option value="hr-consulting">HR Consulting</Option>
            <Option value="software-development">Software Development</Option>
            <Option value="finance">Finance</Option>
            <Option value="marketing">Marketing</Option>
            <Option value="education">Education</Option>
            <Option value="healthcare">Healthcare</Option>
            <Option value="retail">Retail</Option>
            <Option value="manufacturing">Manufacturing</Option>
            <Option value="logistics">Logistics</Option>
            <Option value="real-estate">Real Estate</Option>
            <Option value="legal">Legal</Option>
            <Option value="media">Media</Option>
            <Option value="non-profit">Non-Profit</Option>
            <Option value="telecommunications">Telecommunications</Option>
            <Option value="government">Government</Option>
            <Option value="energy">Energy</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="experience"
          label="Experience"
          rules={[{ required: true, message: 'Please select the experience level' }]}
        >
          <Select placeholder="Select Experience Level">
            <Option value="fresher">Fresher</Option>
            <Option value="1-3 years">1-3 years</Option>
            <Option value="3-5 years">3-5 years</Option>
            <Option value="5+ years">5+ years</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="postedDate"
          label="Posted Date"
          rules={[{ required: true, message: 'Please select the posting date' }]}
        >
          <DatePicker className="w-full" format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Add Job
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddJob;
