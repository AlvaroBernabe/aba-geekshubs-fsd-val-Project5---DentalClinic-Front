import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
      choosenAppointment: {}
    },
    reducers: {
      addAppointment: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      addAppointmentDoctor: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
    }
    
});

export const { addAppointment, addAppointmentDoctor } = appointmentSlice.actions;

export const appointmentDetailData = (state) => state.appointment;

export default appointmentSlice.reducer;