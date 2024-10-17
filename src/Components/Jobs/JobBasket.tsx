import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, Card, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../Redux-Hooks/hooks';
import { asyncFetchJobs } from '../../store/actions/jobAction';
import { setSelectedJob } from '../../store/reducers/jobSlice';
// import { RcFile } from 'antd/es/upload/interface';
import Title from 'antd/es/typography/Title';
import { asyncSubmitJobApplication } from '../../store/actions/userAction';

// Update the Job type to include createdBy and other properties
interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  level: string;
  salary: number;
  companySize: string;
  industry: string;
  experience: string;
  postedDate: string;
  createdBy: string;
}

interface JobApplicationModalProps {
  visible: boolean;
  onClose: () => void;
  onOk: (values: FormData) => void;
  job: Job | null;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ visible, onClose, onOk, job }) => {
  const [form] = Form.useForm();
  const [resumeFile, setResumeFile] = useState<File | null>(null); // Use File type here

  const handleModalOk = () => {
    form.validateFields()
      .then(values => {
        // Prepare form data
        const formData = new FormData();
        formData.append('jobId', job?._id || '');
        formData.append('jobTitle', job?.title || '');
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('coverLetter', values.coverLetter);
        if (resumeFile) formData.append('resume', resumeFile);
        
        // Dispatch the form data
        onOk(formData);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  return (
    <Modal
      title="Apply for Job"
      visible={visible}
      onOk={handleModalOk}
      onCancel={onClose}
      okText="Submit"
      cancelText="Cancel"
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ jobTitle: job?.title }}
      >
        <Form.Item
          name="jobTitle"
          label="Job Title"
        >
          <Input disabled value={job?.title} />
        </Form.Item>

        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your full name' }]}>
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}>
          <Input placeholder="Enter your email address" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please enter your phone number' }]}>
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item
          name="resume"
          label="Resume"
          rules={[{ required: true, message: 'Please upload your resume' }]}>
          <Input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
        </Form.Item>

        <Form.Item
          name="coverLetter"
          label="Cover Letter"
        >
          <Input.TextArea rows={4} placeholder="Write your cover letter" />
        </Form.Item>
      </Form>
    </Modal>
  );
};


const JobListingsWithModal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const { jobs, loading } = useAppSelector((state) => state.jobs);
  const selectedJob = useAppSelector((state) => state.jobs.selectedJob);

  useEffect(() => {
    dispatch(asyncFetchJobs());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleApply = (job: Job) => {
    dispatch(setSelectedJob(job));
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    dispatch(setSelectedJob(null));
  };

  const handleModalOk = async (formValues: any) => {
    try {
      const applicationData = {
        ...formValues,
        jobId: selectedJob?._id, // Include jobId if needed
      };

      await dispatch(asyncSubmitJobApplication(applicationData));
      handleModalClose();
    } catch (error) {
      console.error('Failed to submit job application:', error);
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm) ||
    job.company.toLowerCase().includes(searchTerm) ||
    job.location.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex flex-col p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <Input
          placeholder="Search jobs..."
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>

      {/* Job Listings */}
      <Title level={2} className="mb-4">Job Listings</Title>
      <Row gutter={16}>
        {loading ? (
          <Col span={24} className="text-center">
            <p>Loading...</p>
          </Col>
        ) : (
          filteredJobs.map((job) => (
            <Col span={24} md={12} lg={8} key={job._id} className="mb-4">
              <Card
                title={job.title}
                extra={<Button type="primary" onClick={() => handleApply(job)}>Apply</Button>}
                style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                className="transition-transform transform hover:scale-105"
              >
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> ${job.salary.toLocaleString()}</p>
                <p><strong>Posted:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Job Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          visible={isModalVisible}
          onClose={handleModalClose}
          onOk={handleModalOk}
          job={selectedJob}
        />
      )}
    </div>
  );
};
export default JobListingsWithModal;
