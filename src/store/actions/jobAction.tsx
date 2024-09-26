import { setLoading } from "../reducers/adminSlice";
import { saveJobs, setSelectedJob } from "../reducers/jobSlice";
import axios from '../../config/axios';
import { message } from "antd";
import { AppThunk } from '../store'; // Adjust the import path

export const asyncFetchJobs = (): AppThunk => async (dispatch) => {
    try {
        // Set loading to true before API call
        dispatch(setLoading(true));
        console.log(localStorage.getItem('token'));

        // Send a GET request to fetch jobs
        const response = await axios.get('/job/fetchJobs', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        // Dispatch an action to save jobs to the Redux store
        dispatch(saveJobs(response.data.jobs)); 

        message.success('Jobs fetched successfully!');
    } catch (error) {
        console.error('Error fetching jobs:', error);
        message.error('Failed to fetch jobs. Please try again!');
    } finally {
        // Set loading to false after API call, regardless of success or failure
        dispatch(setLoading(false));
    }
};



export const asyncFetchJobById = (id: string): AppThunk => async (dispatch) => {
  await   dispatch(setLoading(true));
    try {
        const response = await axios.get(`/job/fetchJob/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log(response)
    await    dispatch(setSelectedJob(response.data.job));
    } catch (error) {
        console.error('Error fetching job:', error);
    } finally {
        dispatch(setLoading(false));
    }
};



export const asyncUpdateJob = (id: string, values: any,admin:String): AppThunk => async (dispatch) => {
    await dispatch(setLoading(true));
    try {
        // Send a PUT request to update the job with the provided values
        const response = await axios.put(`/job/updateJob/${admin}/${id}`, values, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        // Assuming the response contains the updated job details
        dispatch(setSelectedJob(response.data.job));
        dispatch(asyncFetchJobById(id))
    } catch (error) {
        console.error('Error updating job:', error);
    } finally {
        dispatch(setLoading(false));
    }
};