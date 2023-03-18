
import { configureStore } from '@reduxjs/toolkit';
import detailSlice from '../layout/detailSlice';
import userSlice from '../layout/userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        detail: detailSlice,
    }
});