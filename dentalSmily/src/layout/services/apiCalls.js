import axios from 'axios';

const root = "http://localhost:3000";

export const logMe = async (body) => {
    console.log('apiCalls');
    return await axios.post(`${root}/login`, body);
};

export const newUser = async (body) => {
    return await axios.post(`${root}/user`, body)
}


export const getUserData = async () => {
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImVtYWlsIjoiYWx2YXJvZHNhZmQyc2RAZ21haWwuY29tIiwicm9sZUlkIjoxLCJmdWxsTmFtZSI6ImFsdmFyaXRvMWYyNDEwOTMiLCJpYXQiOjE2NzkwMDYwNDIsImV4cCI6MTY3OTAxMzI0Mn0.viYPBwegREjJysz0RTPpMGkFlr_113d6cW8piubCL9Y";
    // let config = {        headers: { Authorization: `Bearer ${token}` }    };
    let config = {        headers: { Authorization: `Bearer ${credentials.token}` }    };
    return await axios.get(`${root}/user`, config)
}

// export const reservations = async (body, token) => {
//     var config = {
//         headers: { 
//         'Authorization': 'Bearer '+ token,  
//         }
//     };
//     return await axios.get(`${route}/api/reservations`, body, config);
// };


export const nuevoAppointment = async (body) => {
    let token = credentials.token
    let config = {        headers: { Authorization: `Bearer ${token}` }    };
    return await axios.post(`${root}/appointment`, body, config)
}