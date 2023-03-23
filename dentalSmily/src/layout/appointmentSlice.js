import { createSlice } from "@reduxjs/toolkit";  

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
        choosenAppointment : {}
    },
    reducers: {
        addChoosenAppointment: (state, action) => {
            return {
                ...state,
                ...action.payload
            } 
        },
    }
})

export const { addChoosenAppointment } = appointmentSlice.actions;

export const appointmentData = (state) => state.appointment;

export default appointmentSlice.reducer;