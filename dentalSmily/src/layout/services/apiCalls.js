import axios from 'axios';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';

// const root = "http://localhost:3000";
const root = "https://project04-dentalclinic-production-2c5e.up.railway.app";



export const logMe = async (body) => {
    return await axios.post(`${root}/login`, body);
};

export const newUser = async (body) => {
    return await axios.post(`${root}/user`, body)
}

export const getUserData = async (token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/user/myprofile`, config)
}

export const getTodosUsers = async ( token) => {
  console.log("----------------------------------------------",)
  console.log("Esto vale tokensss:",token)
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${root}/user/all`, config, token );
};

export const nuevoAppointment = async ( body, token) => {
  console.log("----------------------------------------------",)
  console.log("esto vale body", body)
  console.log("Esto vale tokensss:",token)
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }};
        return await axios.post(`${root}/appointment/`,body, config)
}

export const updateAppointment = async ( id, body, token  ) => {
  console.log("----------------------------------------------",)
  console.log("esto vale body", body)
  console.log("Esto vale tokensss:",token)
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }};
        return await axios.put(`${root}/appointment/update/${id}`,body, config )
}

export const getAppointmentasUser = async (token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/appointmentuser`, config)
}

export const userUpdate = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
  return await axios.put(`${root}/user/update/`, body, config)
}

export const getAppointmentasDoctor = async (token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/appointmentAsDoctor`, config, token)
}

export const getAllAppoinment = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/appointments`, config)
}

  export const changeRole = async (body, token) => {
    const { id, role_id } = body;
    // const userId = req.params.id
    const bodyParameters = {
      id: id,
      role_id: role_id,
            //       where: {
            // id: userId
            // }
      };
      
    const config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }}
    return await axios.put(`${root}/user/update/role/.id`,  bodyParameters, config);
  }