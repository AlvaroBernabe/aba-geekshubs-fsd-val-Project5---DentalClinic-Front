import axios from 'axios';

const root = "http://localhost:3000";

export const logMe = async (body) => {
    console.log('apiCalls');
    return await axios.post(`${root}/login`, body);
};