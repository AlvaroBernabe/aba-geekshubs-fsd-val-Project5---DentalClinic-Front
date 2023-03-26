
import { configureStore } from '@reduxjs/toolkit';
import detailSlice from '../layout/detailSlice';
import userSlice from '../layout/userSlice';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import appointmentSlice from '../layout/appointmentSlice';

const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice,
    appointment: appointmentSlice
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});