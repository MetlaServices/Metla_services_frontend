import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Query {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    createdAt: string;
}
export interface Application {
    _id: string;
    applicantId: string; // Assuming this is a string; adjust if it's an ObjectId
    jobId: string; // Assuming this is a string; adjust if it's an ObjectId
    jobTitle: string;
    email: string;
    phoneNumber: string;
    coverLetter: string;
    status: string; // Use appropriate enum type if you have predefined statuses
    appliedDate: string; // Use Date type if you need actual Date object
    resumeLink: {
        fieldId: string;
        url: string;
    };
    
}

interface UserState {
    admin: any; // Define the type according to your admin data structure
    isAuth: boolean;
    loading: boolean;
    applications: Application[]; // Define the type of applications array
    queries: Query[]; // Define the type of queries array
    error: string | null; // Fix syntax error and initialize error state
}

const savedAdmin = localStorage.getItem('admin');

// Define initial state
const initialState: UserState = {
    admin: savedAdmin ? JSON.parse(savedAdmin) : null,
    isAuth: !!savedAdmin, // Set isAuth based on the presence of savedAdmin
    loading: false,
    queries: [],
    applications: [], // Initialize applications array
    error: null, // Initialize error state
};
// Create user slice
export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        // Define action to save user data
        saveAdmin: (state, action: PayloadAction<any>) => {
            const admin = action.payload;
            state.admin = admin;
            state.isAuth = true;
            // Save admin data to localStorage
            localStorage.setItem('admin', JSON.stringify(admin));
        },
        // Define action to remove user data
        removeAdmin: (state) => {
            state.admin = null;
            state.isAuth = false;
            localStorage.clear(); // This will remove all items from localStorage
        },
        
        // Define action to set loading state
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        // Define action to set error state
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        // Define action to save queries
        saveQuery: (state, action: PayloadAction<Query[]>) => {
            state.queries = action.payload;
        },
        saveApplications:(state,action:PayloadAction<Application[]>)=>{
            state.applications=action.payload
        }
    },
});

// Export action creators
export const { saveAdmin, removeAdmin, setLoading, setError, saveQuery,saveApplications } = adminSlice.actions;

// Export reducer
export default adminSlice.reducer;
