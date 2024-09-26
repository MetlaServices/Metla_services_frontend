// src/components/EditJob.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Spin, message } from 'antd';
import { useAppDispatch, useAppSelector } from '../Redux-Hooks/hooks';
import { asyncFetchJobById, asyncUpdateJob } from '../../store/actions/jobAction'; // Import actions

const EditJob: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const {admin}=useAppSelector((state)=>state.admin)
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const job = useAppSelector((state) => state.jobs.selectedJob); // Get the selected job from Redux
    const loading = useAppSelector((state) => state.jobs.loading); // Get loading state from Redux
    console.log(admin)
    // Fetch job by ID when the component mounts
    useEffect(() => {
        if (id) {
            dispatch(asyncFetchJobById(id)); // Dispatch fetchJobById action
        }
    }, [id, dispatch]);

    // Set form fields when job data changes
    useEffect(() => {
        if (job) {
            form.setFieldsValue(job);
        }
    }, [job, form]);

    // Handle form submission to update job
    const onFinish = async (values: any) => {
        if (!id) {
            message.error('Invalid job ID.');
            return;
        }

        try {
            await dispatch(asyncUpdateJob(id, values,admin?._id)); // Dispatch updateJob action
            message.success('Job updated successfully!');
        } catch (error) {
            message.error('Failed to update job.');
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            {loading ? (
                <div className="text-center">
                    <Spin size="large" />
                </div>
            ) : (
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Company" name="company" rules={[{ required: true, message: 'Please input the company!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please input the location!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Level" name="level" rules={[{ required: true, message: 'Please select the level!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Salary" name="salary" rules={[{ required: true, message: 'Please input the salary!' }]}>
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item label="Company Size" name="companySize" rules={[{ required: true, message: 'Please input the company size!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Industry" name="industry" rules={[{ required: true, message: 'Please input the industry!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Experience" name="experience" rules={[{ required: true, message: 'Please input the experience!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Posted Date" name="postedDate" rules={[{ required: true, message: 'Please input the posted date!' }]}>
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Update Job</Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    );
};

export default EditJob;
