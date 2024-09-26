import React, { useEffect } from 'react';
import { Table, Spin, Alert, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store'; // Adjust path as needed
import { asyncGetQuery } from '../../store/actions/adminAction';
import 'antd/dist/reset.css'; // Import Ant Design styles

interface Query {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    createdAt: string;
}

const ViewQueries: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { queries, loading, error } = useSelector((state: RootState) => state.admin);

    useEffect(() => {
        dispatch(asyncGetQuery());
    }, [dispatch]);

    const handleReply = (email: string) => {
        // Open default mail client with pre-filled email
        window.location.href = `mailto:${email}?subject=Reply to your query`;
    };

    const columns: ColumnsType<Query> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
            ellipsis: true, // Truncate long messages
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text: string) => new Date(text).toLocaleDateString(), // Format date
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record: Query) => (
                <Button
                    type="primary"
                    onClick={() => handleReply(record.email)}
                    style={{ borderRadius: '4px' }}
                    className="transition-transform transform hover:scale-105"
                >
                    Reply
                </Button>
            ),
        },
    ];

    if (loading) return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;

    if (error) return <Alert message={error} type="error" showIcon className="mb-4" />;

    return (
        <div className="p-4 md:p-6 lg:p-8 xl:p-10">
            <Table
                columns={columns}
                dataSource={queries}
                rowKey="_id"
                pagination={{ pageSize: 10 }}
                scroll={{ x: 'max-content' }} // Adds horizontal scroll for table on smaller screens
                className="bg-white shadow-md rounded-lg"
                bordered
            />
        </div>
    );
};

export default ViewQueries;
