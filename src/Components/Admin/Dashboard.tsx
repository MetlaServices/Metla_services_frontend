import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useAppSelector } from '../Redux-Hooks/hooks';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const {admin}=useAppSelector((state)=>state.admin)
    console.log(admin)
    // Data for the cards
    const cardData = [
        {
            title: 'Manage Jobs',
            description: 'View, edit, and manage all job postings.',
            route: '/admin/view-jobs',
        },
        {
            title: 'Add New Job',
            description: 'Create a new job posting for your company.',
            route: '/admin/add-job',
        },
        {
            title: 'View Applications',
            description: 'Check all job applications and candidates.',
            route: '/admin/applications',
        },
        {
            title: 'Queries',
            description: 'Reply to query of the users',
            route: '/admin/view-queries',
        },
    ];

    return (
        <div className="p-6">
            <Row gutter={[16, 16]}>
                {cardData.map((card, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(card.route)}
                            className="cursor-pointer"
                        >
                            <Card
                                className="h-44 flex flex-col justify-between bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
                                hoverable
                                bordered
                                title={<div className="text-lg font-semibold">{card.title}</div>}
                                extra={<ArrowRightOutlined />}
                            >
                                <p className="text-gray-600">{card.description}</p>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Dashboard;
