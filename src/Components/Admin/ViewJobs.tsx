import React, { useEffect } from 'react';
import { RootState } from '../../store/store';
import { Card, List, Spin, Button } from 'antd';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../Redux-Hooks/hooks';
import { asyncFetchJobs } from '../../store/actions/jobAction';
import { useNavigate } from 'react-router-dom';

const JobsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const jobs = useAppSelector((state: RootState) => state.jobs.jobs); // Access the jobs array from the state
    const loading = useAppSelector((state: RootState) => state.jobs.loading); // Access the loading state
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(asyncFetchJobs());
    }, [dispatch]);

    const handleDelete = (jobId: string) => {
        // Implement delete logic here, such as calling an API and updating state
        console.log(`Deleting job with ID: ${jobId}`);
    };

    const handleView = (jobId: string) => {
        // Implement view logic here, such as redirecting to a detail page
        console.log(`Viewing job with ID: ${jobId}`);
    };

    const handleEdit = async(jobId: string) => {
       await navigate(`/jobs/edit/${jobId}`) 
    };

    return (
        <div className="p-4">
            {loading ? (
                <div className="text-center">
                    <Spin size="large" />
                </div>
            ) : (
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={jobs}
                    renderItem={(job) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <List.Item>
                                <Card title={job.title}>
                                    <p><strong>Company:</strong> {job.company}</p>
                                    <p><strong>Location:</strong> {job.location}</p>
                                    <p><strong>Level:</strong> {job.level}</p>
                                    <p><strong>Salary:</strong> Rs {job.salary.toLocaleString()}</p>
                                    <div className="flex space-x-2">
                                        <Button onClick={() => handleView(job._id)} type="primary">View</Button>
                                        <Button onClick={() => handleEdit(job._id)} type="default">Edit</Button>
                                        <Button onClick={() => handleDelete(job._id)} danger>Delete</Button>
                                    </div>
                                </Card>
                            </List.Item>
                        </motion.div>
                    )}
                />
            )}
        </div>
    );
};

export default JobsList;
