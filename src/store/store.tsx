import { configureStore,ThunkAction, Action } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminSlice";
import jobReducer from './reducers/jobSlice'
import userReducer from './reducers/userSlice'
export const store = configureStore({
    reducer: {
        admin: adminReducer,
        jobs:jobReducer,
        user:userReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
