import axios from "../../config/axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "@reduxjs/toolkit";
import { message } from 'antd';
import { removeAdmin, saveAdmin, saveApplications, saveQuery, setError, setLoading } from "../reducers/adminSlice";
import { Navigate, NavigateFunction } from "react-router-dom";

// Define the thunk type for async action creators
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Define types for API responses
interface AdminResponse {
    admin: {
        id: string;
        username: string;
        email: string;
        // Add more fields as needed
    };
}

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
}

// Helper function to save tokens
const saveTokens = (accessToken: string, refreshToken: string, accessTokenExpiresIn: number) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('tokenExpiration', (Date.now() + accessTokenExpiresIn).toString());
};

// Helper function to get new access token using refresh token
const refreshAccessToken = async (): Promise<string | null> => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return null;

    try {
        const response = await axios.post('/admin/refresh-token', { refreshToken });
        const { accessToken, accessTokenExpiresIn } = response.data;
        saveTokens(accessToken, refreshToken, accessTokenExpiresIn);
        return accessToken;
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        return null;
    }
};

// Action: Get Current Admin
export const asyncCurrentAdmin = (): AppThunk => async (dispatch) => {
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

        const response = await axios.post<AdminResponse>(
            '/admin/currentAdmin', 
            null, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );
        console.log(response)
        await dispatch(saveAdmin(response.data.admin));
        console.log(response.data.admin);
    } catch (error) {
        console.error('Error fetching current admin:', error);
        message.error('Failed to get current admin. Please try again!');
    }
};

// Action: Admin Signup
export const asyncAdminSignup = (formData: Record<string, any>): AppThunk => async () => {
    try {
        await axios.post('/admin/signup', formData);
        message.success('Admin Signup Successfully!');
    } catch (error) {
        console.error('Error during admin signup:', error);
        message.error('Failed to sign up. Please try again!');
        throw error;
    }
};

// Action: Admin Login
export const asyncAdminLogin = (formData: Record<string, any>, navigate: NavigateFunction): AppThunk => async (dispatch) => {
    try {
        const response = await axios.post<LoginResponse>('/admin/login', formData);
        const { accessToken, refreshToken, accessTokenExpiresIn } = response.data;

        // Save tokens to local storage
        saveTokens(accessToken, refreshToken, accessTokenExpiresIn);

        // Fetch the current admin information
        await dispatch(asyncCurrentAdmin());
        navigate('/admin/dashboard');
        message.success('Admin Login Successfully');
    } catch (error) {
        console.error('Error during admin login:', error);
        message.error('Failed to login. Please try again!');
        throw error;
    }
};

// Action: Add Jobs
export const asyncAdminAddJobs = (formData: Record<string, any>): AppThunk => async () => {
    try {
        // Ensure token is present
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found. Please login again.');

        // Send a POST request to your API to add the job
        await axios.post('/admin/add-job', formData, {
            headers: {
                Authorization: `Bearer ${token}`, // Assuming token is stored in local storage
            },
        });

        message.success('Job added successfully!');
    } catch (error) {
        console.error('Error adding job:', error);
        message.error('Failed to add job. Please try again!');
    }
};

// Action: Get Queries
export const asyncGetQuery = (): AppThunk => async (dispatch) => {
    try {
        ;
        const token =  localStorage.getItem('token');

        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.get('/admin/queries', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Save queries to state
        dispatch(saveQuery(response.data.data));

    } catch (error) {
        // Handle errors
        console.log(error)
    } 
};

// Action: View Applications

export const asyncViewApplications = (): AppThunk => async (dispatch) => {
    try {
        // Retrieve the token from local storage or another secure place
        const token = localStorage.getItem('token'); // Adjust as necessary

        const response = await axios.get('/admin/viewapplications', {
            headers: {
                'Authorization': `Bearer ${token}` // Include the Bearer token in the request headers
            }
        });

        // Dispatch success action with the fetched data
        dispatch(saveApplications(response.data.data));
    } catch (error) {
        // Dispatch failure action with error message
        console.error(error);
    }
};


// Action: Logout


export const asyncAdminLogout = (): AppThunk => async (dispatch) => {
    try {
        // Set loading state to true
        dispatch(setLoading(true));
        // Make an API call to the logout endpoint with the Authorization header
        const response = await axios.post('/admin/logout', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        console.log(response);

        dispatch(removeAdmin());

        message.success(response.data.message);
        // Optionally clear any error state
        dispatch(setError(null));
        <Navigate to='/'/>

    } catch (error) {
        // Set the error state if logout fails
        dispatch(setError('Logout failed. Please try again.'));
        console.error(error);
    } finally {
        // Set loading state to false
        dispatch(setLoading(false));
    }
};
