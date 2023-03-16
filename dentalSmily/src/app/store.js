
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../layout/login/userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
    }
    
});