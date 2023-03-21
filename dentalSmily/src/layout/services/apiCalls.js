import axios from 'axios';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';

const root = "http://localhost:3000";

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
        return await axios.post(`${root}/appointment`,body, config )
}

export const getAppointmentasUser = async (token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/appointmentuser`, config, token)
}

export const userUpdate = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
  return await axios.put(`${root}/user/update/`, body, config)
}



// export const reservations = async (body, token) => {
//     var config = {
//         headers: { 
//         'Authorization': 'Bearer '+ token,  
//         }
//     };
//     return await axios.get(`${route}/api/reservations`, body, config);
// };






  // export const updateUser = async (body) => {
  //   return await axios.put(`${root}/updateprofile`, body);
  // }


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





//   export let getOrders = async (userInfo, jwt) => {

//     try {
//         await axios.get(`${API_URL}/order/user/${userInfo.id}`, {
//             headers: {
//                 "auth-token": jwt
//             }
//         }).then(response => {
//             returnedArticles = response
//         })
//         return returnedArticles
//     }
//     catch (error) {
//         returnedMessage = "Something went wrong!"
//         return returnedArticles;

//     }
// };
