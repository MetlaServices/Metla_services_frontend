import React, { useEffect } from 'react';
import { Table, Spin, Alert, Select, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store'; // Adjust path as needed
import { asyncViewApplications } from '../../store/actions/adminAction';
import {Application} from '../../store/reducers/adminSlice'
const { Option } = Select;
// In your models or types file
export enum ApplicationStatus {
  PENDING = 'pending',
  REVIEWED = 'reviewed',
  INTERVIEW_SCHEDULED = 'interview_scheduled',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

// Helper function to format enum values
const formatStatus = (status: ApplicationStatus) => {
    switch (status) {
        case ApplicationStatus.PENDING:
            return 'Pending';
        case ApplicationStatus.REVIEWED:
            return 'Reviewed';
        case ApplicationStatus.INTERVIEW_SCHEDULED:
            return 'Interview Scheduled';
        case ApplicationStatus.ACCEPTED:
            return 'Accepted';
        case ApplicationStatus.REJECTED:
            return 'Rejected';
        default:
            return status;
    }
};

const ViewApplications: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { applications, loading, error } = useSelector((state: RootState) => state.admin);

    useEffect(() => {
        dispatch(asyncViewApplications());
    }, [dispatch]);

    const handleStatusChange = async () => {
        try {
            // Update the status in the backend (API call should be here)
            // Example API call
            // await axios.put(`/admin/update-application/${id}`, { status });

            // Update the status in the Redux state
            // dispatch(updateApplicationStatus({ id, status }));
            message.success('Status updated successfully!');
        } catch (err) {
            message.error('Failed to update status.');
            console.error(err);
        }
    };

    const columns: ColumnsType<Application> = [
        {
            title: 'Job Title',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Applied Date',
            dataIndex: 'appliedDate',
            key: 'appliedDate',
            render: (text: string) => new Date(text).toLocaleDateString(), // Format date
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: ApplicationStatus,) => (
                <Select
                    defaultValue={status}
                    style={{ width: 200 }}
                    onChange={() => handleStatusChange()}
                >
                    {Object.values(ApplicationStatus).map(status => (
                        <Option key={status} value={status}>
                            {formatStatus(status)}
                        </Option>
                    ))}
                </Select>
            ),
        },
    ];

    if (loading) return <Spin size="large" />;
    if (error) return <Alert message={error} type="error" showIcon />;

    return (
        <div className="p-4 md:p-6 lg:p-8 xl:p-10">
            <Table
                columns={columns}
                dataSource={applications}
                rowKey="_id"
                pagination={{ pageSize: 10 }}
                scroll={{ x: 'max-content' }} // Adds horizontal scroll for table on smaller screens
                className="bg-white shadow-md rounded-lg"
            />
        </div>
    );
};

export default ViewApplications;
