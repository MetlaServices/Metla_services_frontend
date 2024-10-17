import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for a job
export // jobSlice.ts
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
  postedDate: string; // Change Date to string
  createdBy: string;
}


interface JobState {
    jobs: Job[]; // This can be an array if you are still handling multiple jobs somewhere else
    loading: boolean;
    selectedJob: Job | null; // Single selected job
}

// Define initial state
const initialState: JobState = {
    jobs: [], // Initialize with an empty array if needed
    loading: false,
    selectedJob: null, // Initialize selectedJob as null
};

// Create job slice
export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        saveJobs: (state, action: PayloadAction<Job[]>) => {
            state.jobs = action.payload;
            state.loading = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setSelectedJob: (state, action: PayloadAction<Job | null>) => {
            state.selectedJob = action.payload;
        },
    },
});

// Export action creators
export const { saveJobs, setLoading, setSelectedJob } = jobSlice.actions;

// Export reducer
export default jobSlice.reducer;
