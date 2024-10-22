import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any;
  isUserAuth: boolean;
  contacts: any[];
  otpSent: boolean;
  otpVerified: boolean;
  error: string | null;
  loading: boolean;
  blog:any;
   blogs: any[]; // Add blogs here (or define a more specific type for blogs)

}

const savedUser = localStorage.getItem('user');
const initialState: UserState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isUserAuth: savedUser !== null,
  contacts: [],
  otpSent: false,
  otpVerified: false,
  error: null,
  loading: false,
  blogs:[],
  blog:null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    otpVerificationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    otpVerificationSuccess: (state:any) => {
      state.loading = false;
      state.otpVerified = true;
      state.error = null; // Clear any previous error
    },
    otpVerificationFailure: (state:any, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    saveUser: (state:any, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isUserAuth = true;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Save the updated user data
    },
    removeUser: (state:any) => {
      state.user = null;
      state.isUserAuth = false;
      localStorage.clear()
    },
    saveBlogs:(state:any,action)=>{
      state.blogs=action.payload
    }
    ,
    saveParticularBlog:(state:any,action)=>{
      state.blog=action.payload
    }
  },
});

export const { 
  otpVerificationStart, 
  otpVerificationSuccess, 
  otpVerificationFailure, 
  saveUser, 
  removeUser,
  saveBlogs ,
  saveParticularBlog
} = userSlice.actions;

export default userSlice.reducer;
