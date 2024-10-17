// components/RequireOtpVerification.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../Redux-Hooks/hooks'; // Adjust the path as needed

const RequireOtpVerification: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const { otpVerified,user } = useAppSelector((state) => state.user);

    // Read OTP verification status from local storage
    const otpVerifiedFromStorage = localStorage.getItem('otpVerified') === 'true';

    if (!otpVerified && !otpVerifiedFromStorage) {
        // Redirect to OTP verification page
        return <Navigate to={`/user/verify-otp/${user.email}`} state={{ from: location }} />;
    }

    return <>{children}</>;
};

export default RequireOtpVerification;
