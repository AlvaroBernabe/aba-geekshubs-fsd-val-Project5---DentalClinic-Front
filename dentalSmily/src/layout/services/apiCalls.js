import axios from 'axios';

const root = "http://localhost:3000";

export const logMe = async (body) => {
    return await axios.post(`${root}/login`, body);
};

export const newUser = async (body) => {
    return await axios.post(`${root}/user`, body)
}

export const getUserData = async () => {
    let config = {        headers: { Authorization: `Bearer ${credentials.token}` }    };
    return await axios.get(`${root}/user/myprofile`, config)
}

// export const getTodosUsers = async () => {
//   let token = credentials.token
//   let config = {        headers: { Authorization: `Bearer ${token}` }    };
//   return await axios.get(`${root}/user/all`, config)
// }


export const getTodosUsers = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}/user/all`, config);
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



  export const updateUser = async (body) => {
    return await axios.put(`${root}updateprofile`, body);
  }