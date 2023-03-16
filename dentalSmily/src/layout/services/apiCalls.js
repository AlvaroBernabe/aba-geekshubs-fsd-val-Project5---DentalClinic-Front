import axios from 'axios';

const root = "http://localhost:3000";

export const logMe = async (body) => {
    console.log('apiCalls');
    return await axios.post(`${root}/login`, body);
};

export const getUserData = async () => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImVtYWlsIjoiYWx2YXJvZHNhZmQyc2RAZ21haWwuY29tIiwicm9sZUlkIjoxLCJmdWxsTmFtZSI6ImFsdmFyaXRvMWYyNDEwOTMiLCJpYXQiOjE2NzkwMDM5OTcsImV4cCI6MTY3OTAxMTE5N30._3odQb-XWgDAigk_LOpZyBIPYT52TCgkGz270LdkUdw";
    let config = {        headers: { Authorization: `Bearer ${token}` }    };
    // let config = {        headers: { Authorization: `Bearer ${props.datosLogin.token}` }    };
    return await axios.get(`${root}/user`, config)
}

export const reservations = async (body, token) => {
    var config = {
        headers: { 
        'Authorization': 'Bearer '+ token,  
        }
    };
    return await axios.get(`${route}/api/reservations`, body, config);
};