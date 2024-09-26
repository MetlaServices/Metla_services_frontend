import axios from "../../config/axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store"; // Adjust the path as needed
import { Action } from "@reduxjs/toolkit";
import { message, notification } from 'antd'; // Import Ant Design's message and notification components
import { Navigate, NavigateFunction } from "react-router-dom";
import { otpVerificationStart, otpVerificationSuccess, removeUser, saveUser } from "../reducers/userSlice";

// Define the thunk type for async action creators
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

interface UserResponse {
    user: {
        id: string;
        username: string;
        email: string;
        // Add more fields as needed
    };
}

// interface LoginResponse {
//     accessToken: string;
//     refreshToken: string;
//     accessTokenExpiresIn: number;
// }

const saveTokens = (accessToken: string, refreshToken: string, accessTokenExpiresIn: number) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('tokenExpiration', (Date.now() + accessTokenExpiresIn).toString());
};

const refreshAccessToken = async (): Promise<string | null> => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return null;

    try {
        const response = await axios.post('/user/refresh-token', { refreshToken });
        const { accessToken, accessTokenExpiresIn } = response.data;
        saveTokens(accessToken, refreshToken, accessTokenExpiresIn);
        return accessToken;
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        return null;
    }
};

export const asyncCurrentUser = (): AppThunk => async (dispatch) => {
    try {
        let token = localStorage.getItem('token');

        // Check if token is expired
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        if (tokenExpiration && Date.now() > parseInt(tokenExpiration, 10)) {
            token = await refreshAccessToken();
            if (!token) throw new Error('Token refresh failed');
        }

        if (!token) {
            throw new Error('No token found, please login again.');
        }

        const response = await axios.post<UserResponse>(
            '/user/currentUser',
            null,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );
        await dispatch(saveUser(response.data.user));
    } catch (error) {
        console.error('Error fetching current user:', error);
        message.error('Failed to get current user. Please try again!');
    }
};

export const asyncSendContactDetails = (formData: any): AppThunk => async () => {
    try {
        await axios.post('/user/sendContactData', formData);
        message.success('Contact details submitted successfully!');
    } catch (error) {
        console.error(error);
        message.error('Failed to send the query. Please try again!');
    }
};


export const asyncSubmitJobApplication = (formData: any): AppThunk => async () => {


    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        await axios.post('/user/sendApplicantDetails', formData, config);
        message.success('Details sent successfully!');
    } catch (error) {
        console.error(error);
        message.error('Failed to send application. Please try again!');
    }
};

export const asyncSendOtp = (email: string): AppThunk => async (dispatch) => {
    try {
        const response = await axios.post('/user/send-otp', { email });

        // Display success notification
        notification.success({
            message: 'OTP Sent',
            description: 'An OTP has been sent to your email successfully.',
            placement: 'topRight',
        });

        // Save user data to Redux store
        await dispatch(saveUser(response.data.user));
    } catch (error) {
        const errorMessage = 'Failed to send OTP. Please try again.';

        // Display error notification
        notification.error({
            message: 'Error',
            description: errorMessage,
            placement: 'topRight',
        });
    }
};

export const asyncVerifyOtp = (email: string, otp: number, navigate: NavigateFunction): AppThunk => async (dispatch) => {
    dispatch(otpVerificationStart()); // Dispatch start action

    try {
        const response = await axios.post('/user/verify-otp', { otp, email });

        // Handle success
        message.success('OTP Verified');
        dispatch(otpVerificationSuccess(response.data.message));

        // Save tokens to localStorage if provided in the response
        if (response.data.accessToken && response.data.refreshToken) {
            saveTokens(
                response.data.accessToken,
                response.data.refreshToken,
                response.data.accessTokenExpiresIn
            );
        }

        // Save OTP verification status to local storage
        localStorage.setItem('otpVerified', 'true');

        await navigate(`/user/dashboard/${email}`);
        await dispatch(asyncCurrentUser());
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Verification failed';

        message.error(errorMessage); // Display the error message
    }
};


export const asyncUpdateProfile = (formData: any): AppThunk => async (dispatch) => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token
        if (!token) {
            throw new Error('No token found');
        }
        
        const response = await axios.put('/user/update-profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}` // Include the token in the request
            },
        });

        console.log('API Response:', response.data); // Log the response

        await dispatch(asyncCurrentUser())

    } catch (error) {
        console.error('Error updating profile:', error);
        message.error('Failed to update profile');
    }
};


export const asyncUserLogout = (): AppThunk => async (dispatch) => {
    try {
        // Make an API call to the logout endpoint with the Authorization header
        const response = await axios.post('/user/logout', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        console.log(response);

        dispatch(removeUser());

        message.success(response.data.message);
        <Navigate to='/'/>

    } catch (error) {
        console.error(error);
    } 
};
